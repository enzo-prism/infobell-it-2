import type { Metadata } from "next"
import { AMD_PAGE } from "@/lib/content/ai"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { AiPartnerPage } from "@/components/ai/ai-partner-page"

export const metadata: Metadata = withSeoMetadata({
  title: "AI Solutions Powered by AMD",
  description:
    "Infobell IT and AMD deliver enterprise AI solutions for model deployment, benchmarking, and scalable infrastructure.",
  path: "/ai/amd",
})

export default function AmdPage() {
  return <AiPartnerPage content={AMD_PAGE} />
}
