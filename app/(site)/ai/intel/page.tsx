import type { Metadata } from "next"
import { INTEL_PAGE } from "@/lib/content/ai"
import { AiPartnerPage } from "@/components/ai/ai-partner-page"

export const metadata: Metadata = {
  title: `${INTEL_PAGE.title} | Infobell IT Solutions`,
  description: INTEL_PAGE.intro,
}

export default function IntelPage() {
  return <AiPartnerPage content={INTEL_PAGE} />
}
