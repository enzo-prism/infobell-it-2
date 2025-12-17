import type { Metadata } from "next"
import { AMD_PAGE } from "@/lib/content/ai"
import { AiPartnerPage } from "@/components/ai/ai-partner-page"

export const metadata: Metadata = {
  title: `${AMD_PAGE.title} | Infobell IT Solutions`,
  description: AMD_PAGE.intro,
}

export default function AmdPage() {
  return <AiPartnerPage content={AMD_PAGE} />
}
