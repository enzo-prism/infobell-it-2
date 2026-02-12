import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { CapabilityPage } from "@/components/capability-page"
import { CAPABILITY_DETAILS } from "@/lib/content/capabilities"

const capability = CAPABILITY_DETAILS.sustainability

export const metadata: Metadata = withSeoMetadata({
  title: "Sustainability Engineering",
  description:
    "Infobell IT sustainability engineering helps enterprises reduce emissions, align FinOps and ESG goals, and improve workload efficiency at scale.",
  path: "/sustainability",
})

export default function SustainabilityPage() {
  return <CapabilityPage capability={capability} />
}
