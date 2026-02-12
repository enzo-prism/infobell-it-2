import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { CapabilityPage } from "@/components/capability-page"
import { CAPABILITY_DETAILS } from "@/lib/content/capabilities"

const capability = CAPABILITY_DETAILS.hpc

export const metadata: Metadata = withSeoMetadata({
  title: "High-Performance Computing",
  description:
    "Infobell IT delivers high-performance computing engineering for benchmark-led tuning, workload optimization, and infrastructure planning.",
  path: "/hpc",
})

export default function HpcPage() {
  return <CapabilityPage capability={capability} />
}
