import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { CapabilityPage } from "@/components/capability-page"
import { CAPABILITY_DETAILS } from "@/lib/content/capabilities"

const capability = CAPABILITY_DETAILS.compliance

export const metadata: Metadata = withSeoMetadata({
  title: "Compliance & Confidential AI",
  description:
    "Infobell IT delivers compliance and confidential computing solutions that secure sensitive workloads without sacrificing performance.",
  path: "/compliance",
})

export default function CompliancePage() {
  return <CapabilityPage capability={capability} />
}
