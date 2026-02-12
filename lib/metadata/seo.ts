import type { Metadata } from "next"
import type { BlueBookReport } from "@/lib/content/bluebook"
import type { CareerRole } from "@/lib/content/careers"

export const SEO_LIMITS = {
  TITLE_MIN: 35,
  TITLE_MAX: 58,
  DESCRIPTION_MIN: 110,
  DESCRIPTION_MAX: 145,
} as const

export const BRAND_SUFFIX = "Infobell IT" as const

const BRAND_SUFFIX_WITH_SEPARATOR = ` | ${BRAND_SUFFIX}`
const DESCRIPTION_PADDING = " Trusted by enterprise teams."
const OPEN_GRAPH_IMAGE_PATH = "/opengraph-image"
const OPEN_GRAPH_IMAGE_ALT = "Infobell IT Advanced Technology Solutions"

export type SeoInput = {
  title: string
  description: string
  path: string
}

export function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim()
}

export function trimToWordBoundary(value: string, max: number): string {
  const normalized = normalizeText(value)
  if (normalized.length <= max) {
    return normalized
  }

  const clipped = normalized.slice(0, max + 1)
  const boundary = clipped.lastIndexOf(" ")
  const candidate = boundary > 0 ? clipped.slice(0, boundary) : clipped.slice(0, max)

  return candidate.replace(/[.,;:!?-]+$/g, "").trim()
}

export function stripBrandFragments(baseTitle: string): string {
  return normalizeText(baseTitle)
    .replace(/\|\s*Infobell IT Solutions/gi, "")
    .replace(/\|\s*Infobell IT Service Product/gi, "")
    .replace(/\|\s*Infobell IT/gi, "")
    .replace(/\s*-\s*Infobell IT Solutions/gi, "")
    .replace(/\s*-\s*Infobell IT/gi, "")
    .trim()
}

function enforceProfessionalTone(value: string): string {
  const normalized = normalizeText(value)

  return normalized
    .replace(/[!?]{2,}/g, ".")
    .replace(/!\s*$/g, ".")
    .replace(/\s+([.,;:!?])/g, "$1")
    .replace(/(\b\w+\b)(?:\s+\1\b)+/gi, "$1")
}

export function enforceTitleLength(baseTitle: string): string {
  const maxBaseLength = SEO_LIMITS.TITLE_MAX - BRAND_SUFFIX_WITH_SEPARATOR.length
  const minBaseLength = SEO_LIMITS.TITLE_MIN - BRAND_SUFFIX_WITH_SEPARATOR.length

  let normalizedTitle = enforceProfessionalTone(stripBrandFragments(baseTitle))
  normalizedTitle = trimToWordBoundary(normalizedTitle, maxBaseLength)

  if (normalizedTitle.length < minBaseLength) {
    const fallbackExpansions = ["Career Role", "Enterprise Services"]

    for (const expansion of fallbackExpansions) {
      normalizedTitle = trimToWordBoundary(`${normalizedTitle} ${expansion}`, maxBaseLength)
      if (normalizedTitle.length >= minBaseLength) {
        break
      }
    }
  }

  return normalizedTitle
}

export function enforceDescriptionLength(description: string): string {
  let normalizedDescription = enforceProfessionalTone(description)
  normalizedDescription = trimToWordBoundary(normalizedDescription, SEO_LIMITS.DESCRIPTION_MAX)

  if (normalizedDescription.length < SEO_LIMITS.DESCRIPTION_MIN) {
    normalizedDescription = trimToWordBoundary(
      `${normalizedDescription}${DESCRIPTION_PADDING}`,
      SEO_LIMITS.DESCRIPTION_MAX,
    )
  }

  if (!/[.!?]$/.test(normalizedDescription)) {
    normalizedDescription = `${normalizedDescription}.`
  }

  return normalizedDescription
}

export function withSeoMetadata({ title, description, path }: SeoInput): Metadata {
  const normalizedTitle = enforceTitleLength(title)
  const normalizedDescription = enforceDescriptionLength(description)
  const fullTitle = `${normalizedTitle}${BRAND_SUFFIX_WITH_SEPARATOR}`

  return {
    title: normalizedTitle,
    description: normalizedDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description: normalizedDescription,
      url: path,
      siteName: BRAND_SUFFIX,
      type: "website",
      images: [
        {
          url: OPEN_GRAPH_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: OPEN_GRAPH_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: normalizedDescription,
      images: [OPEN_GRAPH_IMAGE_PATH],
    },
  }
}

export function buildCareerSeo(role: CareerRole, slug: string): Metadata {
  return withSeoMetadata({
    title: role.title,
    description: `Join Infobell IT as ${role.title} in ${role.location}. Build AI, cloud, and performance engineering solutions at scale.`,
    path: `/careers/${slug}`,
  })
}

export function buildBluebookSeo(report: BlueBookReport, slug: string): Metadata {
  const normalizedLegacyId = normalizeText(report.legacyId)
  const reportCodeMatch = normalizedLegacyId.match(/(\d{4}-\d{4})$/)
  const legacyIdParts = normalizedLegacyId.split("-").filter(Boolean)
  const fallbackCode = legacyIdParts.length > 0 ? legacyIdParts[legacyIdParts.length - 1] : slug
  const reportCode = reportCodeMatch ? reportCodeMatch[1] : fallbackCode

  return withSeoMetadata({
    title: `Blue Book Report ${reportCode}`,
    description: `Blue Book Report ${reportCode} from Infobell IT provides independent benchmark insights across cloud, AI, and virtualization for enterprise teams.`,
    path: `/bluebook/${slug}`,
  })
}
