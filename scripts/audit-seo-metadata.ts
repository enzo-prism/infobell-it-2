import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

const SEO_LIMITS = {
  TITLE_MIN: 35,
  TITLE_MAX: 58,
  DESCRIPTION_MIN: 110,
  DESCRIPTION_MAX: 145,
} as const

const BRAND_DUPLICATION_PATTERNS = [
  /\|\s*Infobell IT\s*\|\s*Infobell IT/i,
  /\|\s*Infobell IT Solutions\s*\|\s*Infobell IT/i,
  /\|\s*Infobell IT Service Product\s*\|\s*Infobell IT/i,
]

type RouteTarget = {
  path: string
  expectedStatus: number
}

type AuditFailure = {
  path: string
  expectedStatus: number
  actualStatus: number
  issues: string[]
}

async function walkFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)))
      continue
    }
    files.push(fullPath)
  }

  return files
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim()
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&#(\d+);/g, (_, dec: string) => String.fromCodePoint(Number(dec)))
    .replace(/&#x([a-fA-F0-9]+);/g, (_, hex: string) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#x2F;/gi, "/")
}

function readAttribute(tag: string, attribute: string): string | null {
  const pattern = new RegExp(`${attribute}\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s\"'>]+))`, "i")
  const match = tag.match(pattern)
  if (!match) {
    return null
  }

  return match[1] ?? match[2] ?? match[3] ?? null
}

function parseTitle(html: string): { count: number; value: string } {
  const matches = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)]
  if (matches.length === 0) {
    return { count: matches.length, value: "" }
  }

  const text = normalizeText(decodeEntities(matches[0][1].replace(/<[^>]+>/g, "")))
  return { count: matches.length, value: text }
}

function parseDescription(html: string): { count: number; value: string } {
  const metaTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => match[0])
  const descriptions = metaTags
    .filter((tag) => normalizeText(readAttribute(tag, "name") ?? "").toLowerCase() === "description")
    .map((tag) => normalizeText(decodeEntities(readAttribute(tag, "content") ?? "")))

  return {
    count: descriptions.length,
    value: descriptions[0] ?? "",
  }
}

function hasDuplicateBrand(value: string): boolean {
  return BRAND_DUPLICATION_PATTERNS.some((pattern) => pattern.test(value))
}

async function getStaticRoutesFromApp(): Promise<string[]> {
  const appSiteDir = path.join(process.cwd(), "app/(site)")
  const allFiles = await walkFiles(appSiteDir)

  const routes = allFiles
    .filter((file) => file.endsWith("page.tsx"))
    .map((file) => path.relative(appSiteDir, file))
    .filter((relativePath) => !relativePath.includes("["))
    .map((relativePath) => {
      const routeDir = relativePath.replace(/\/page\.tsx$/, "")
      if (routeDir === "page.tsx" || routeDir === "") {
        return "/"
      }
      if (routeDir === "page") {
        return "/"
      }

      return `/${routeDir}`
    })

  return [...new Set(routes)].sort()
}

async function getCareerRoutes(): Promise<string[]> {
  const source = await readFile(path.join(process.cwd(), "lib/content/careers.ts"), "utf8")
  const roleBlockMatch = source.match(/export const CAREER_ROLES:[\s\S]*?=\s*\[([\s\S]*?)\n\]/)
  const block = roleBlockMatch ? roleBlockMatch[1] : source
  const slugs = [...block.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1])

  return [...new Set(slugs)].sort().map((slug) => `/careers/${slug}`)
}

async function getBluebookRoutes(): Promise<string[]> {
  const rawJson = await readFile(path.join(process.cwd(), "lib/content/bluebook-data.json"), "utf8")
  const categories = JSON.parse(rawJson) as Array<{ reports?: Array<{ slug?: string }> }>
  const slugs = categories.flatMap((category) =>
    (category.reports ?? []).map((report) => normalizeText(report.slug ?? "")).filter(Boolean),
  )

  return [...new Set(slugs)].sort().map((slug) => `/bluebook/${slug}`)
}

function getBaseUrl(): string {
  const fromEnv = process.env.SEO_AUDIT_BASE_URL ?? process.env.BASE_URL
  if (fromEnv) {
    return fromEnv.endsWith("/") ? fromEnv.slice(0, -1) : fromEnv
  }

  const port = process.env.PORT ?? "3000"
  return `http://127.0.0.1:${port}`
}

async function buildTargets(): Promise<RouteTarget[]> {
  const staticRoutes = await getStaticRoutesFromApp()
  const careerRoutes = await getCareerRoutes()
  const bluebookRoutes = await getBluebookRoutes()
  const all200Routes = [...new Set([...staticRoutes, ...careerRoutes, ...bluebookRoutes])].sort()

  return [
    ...all200Routes.map((path) => ({ path, expectedStatus: 200 })),
    { path: "/non-existent", expectedStatus: 404 },
  ]
}

async function auditRoute(baseUrl: string, target: RouteTarget): Promise<AuditFailure | null> {
  const routeUrl = `${baseUrl}${target.path}`
  const response = await fetch(routeUrl)
  const html = await response.text()
  const title = parseTitle(html)
  const description = parseDescription(html)
  const issues: string[] = []

  if (response.status !== target.expectedStatus) {
    issues.push(`Expected status ${target.expectedStatus}, got ${response.status}`)
  }

  if (target.expectedStatus === 200 && title.count !== 1) {
    issues.push(`Expected exactly one <title>, found ${title.count}`)
  }

  if (target.expectedStatus === 200 && description.count !== 1) {
    issues.push(`Expected exactly one <meta name=\"description\">, found ${description.count}`)
  }

  if (target.expectedStatus !== 200 && title.count < 1) {
    issues.push("Expected at least one <title> on non-200 route")
  }

  if (target.expectedStatus !== 200 && description.count < 1) {
    issues.push("Expected at least one <meta name=\"description\"> on non-200 route")
  }

  if (target.expectedStatus === 200 && title.count === 1) {
    if (title.value.length < SEO_LIMITS.TITLE_MIN || title.value.length > SEO_LIMITS.TITLE_MAX) {
      issues.push(
        `Title length ${title.value.length} is outside ${SEO_LIMITS.TITLE_MIN}-${SEO_LIMITS.TITLE_MAX}: "${title.value}"`,
      )
    }
  }

  if (target.expectedStatus === 200 && description.count === 1) {
    if (
      description.value.length < SEO_LIMITS.DESCRIPTION_MIN ||
      description.value.length > SEO_LIMITS.DESCRIPTION_MAX
    ) {
      issues.push(
        `Description length ${description.value.length} is outside ${SEO_LIMITS.DESCRIPTION_MIN}-${SEO_LIMITS.DESCRIPTION_MAX}: "${description.value}"`,
      )
    }
  }

  if (title.value && hasDuplicateBrand(title.value)) {
    issues.push(`Title contains duplicated brand suffix pattern: "${title.value}"`)
  }

  if (issues.length === 0) {
    return null
  }

  return {
    path: target.path,
    expectedStatus: target.expectedStatus,
    actualStatus: response.status,
    issues,
  }
}

async function main() {
  const baseUrl = getBaseUrl()
  const targets = await buildTargets()
  const failures: AuditFailure[] = []

  for (const target of targets) {
    const failure = await auditRoute(baseUrl, target)
    if (failure) {
      failures.push(failure)
    }
  }

  const audited200Count = targets.filter((target) => target.expectedStatus === 200).length

  console.log(`SEO metadata audit base URL: ${baseUrl}`)
  console.log(`Audited routes: ${targets.length} (${audited200Count} expected 200 + 1 expected 404 edge route)`)

  if (failures.length === 0) {
    console.log("PASS: All audited routes satisfy metadata and response requirements.")
    return
  }

  console.error(`FAIL: ${failures.length} route(s) did not pass.`)
  for (const failure of failures) {
    console.error(`\n${failure.path} (expected ${failure.expectedStatus}, got ${failure.actualStatus})`)
    for (const issue of failure.issues) {
      console.error(`- ${issue}`)
    }
  }

  process.exitCode = 1
}

main().catch((error) => {
  console.error("SEO metadata audit failed with an unexpected error.")
  console.error(error)
  process.exitCode = 1
})
