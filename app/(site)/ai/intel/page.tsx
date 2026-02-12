import type { Metadata } from "next"
import { INTEL_PAGE } from "@/lib/content/ai"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { AiPartnerPage } from "@/components/ai/ai-partner-page"

export const metadata: Metadata = withSeoMetadata({
  title: "AI Solutions Powered by Intel",
  description:
    "Infobell IT and Intel deliver enterprise AI programs with secure deployment, benchmark-led tuning, and production-ready infrastructure design.",
  path: "/ai/intel",
})

export default function IntelPage() {
  return <AiPartnerPage content={INTEL_PAGE} />
}
