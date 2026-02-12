import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { CapabilityPage } from "@/components/capability-page"
import { CAPABILITY_DETAILS } from "@/lib/content/capabilities"

const capability = CAPABILITY_DETAILS["cloud-native"]

export const metadata: Metadata = withSeoMetadata({
  title: "Cloud Native Engineering",
  description:
    "Infobell IT designs cloud-native platforms that improve delivery speed, resilience, and governance for enterprise applications.",
  path: "/cloud-native",
})

export default function CloudNativePage() {
  return <CapabilityPage capability={capability} />
}
