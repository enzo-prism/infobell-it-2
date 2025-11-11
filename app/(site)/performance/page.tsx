import type { Metadata } from "next"
import { CapabilityPage } from "@/components/capability-page"
import { CAPABILITY_DETAILS } from "@/lib/content/capabilities"

const capability = CAPABILITY_DETAILS.performance

export const metadata: Metadata = {
  title: `${capability.title} | Infobell IT Solutions`,
  description: capability.summary,
}

export default function PerformancePage() {
  return <CapabilityPage capability={capability} />
}
