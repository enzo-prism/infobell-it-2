import type { Metadata } from "next"
import { CapabilityPage } from "@/components/capability-page"
import { CAPABILITY_DETAILS } from "@/lib/content/capabilities"

const capability = CAPABILITY_DETAILS.sustainability

export const metadata: Metadata = {
  title: `${capability.title} | Infobell IT Solutions`,
  description: capability.summary,
}

export default function SustainabilityPage() {
  return <CapabilityPage capability={capability} />
}
