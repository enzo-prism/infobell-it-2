import type { Metadata } from "next"
import { NVIDIA_PAGE } from "@/lib/content/ai"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { AiPartnerPage } from "@/components/ai/ai-partner-page"

export const metadata: Metadata = withSeoMetadata({
  title: "AI Solutions Powered by NVIDIA",
  description:
    "Infobell IT and NVIDIA help enterprises deploy AI applications with reliable performance, scalable architecture, and measurable outcomes.",
  path: "/ai/nvidia",
})

export default function NvidiaPage() {
  return <AiPartnerPage content={NVIDIA_PAGE} />
}
