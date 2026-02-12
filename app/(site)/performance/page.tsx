import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { CapabilityPage } from "@/components/capability-page"
import { CAPABILITY_DETAILS } from "@/lib/content/capabilities"

const capability = CAPABILITY_DETAILS.performance

export const metadata: Metadata = withSeoMetadata({
  title: "Performance Engineering",
  description:
    "Infobell IT performance engineering services help teams benchmark, optimize, and scale applications for predictable enterprise-grade results.",
  path: "/performance",
})

export default function PerformancePage() {
  return <CapabilityPage capability={capability} />
}
