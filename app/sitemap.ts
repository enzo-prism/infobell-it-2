import type { MetadataRoute } from "next"
import { BLUEBOOK_CATEGORIES } from "@/lib/content/bluebook"
import { CAREER_ROLES } from "@/lib/content/careers"
import { SITE_URL } from "@/lib/content/site"

const STATIC_ROUTES = [
  "/",
  "/ai",
  "/ai/amd",
  "/ai/ifx",
  "/ai/intel",
  "/ai/nvidia",
  "/bluebook",
  "/carbon-calculator",
  "/careers",
  "/clients",
  "/cloud-control",
  "/cloud-migration-advisor",
  "/cloud-native",
  "/compliance",
  "/contact",
  "/convogene",
  "/docprep-for-rag",
  "/echoswift",
  "/hpc",
  "/locations",
  "/performance",
  "/press-releases/prease-release-amd-2025",
  "/privacy-policy",
  "/smarte",
  "/sustainability",
  "/team",
  "/transcribe",
  "/vast",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const bluebookReports = BLUEBOOK_CATEGORIES.flatMap((category) => category.reports)

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified,
    })),
    ...CAREER_ROLES.map((role) => ({
      url: `${SITE_URL}/careers/${role.slug}`,
      lastModified,
    })),
    ...bluebookReports.map((report) => ({
      url: `${SITE_URL}/bluebook/${report.slug}`,
      lastModified,
    })),
  ]
}

