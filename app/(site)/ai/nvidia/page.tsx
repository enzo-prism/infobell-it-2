import type { Metadata } from "next"
import { NVIDIA_PAGE } from "@/lib/content/ai"
import { AiPartnerPage } from "@/components/ai/ai-partner-page"

export const metadata: Metadata = {
  title: `${NVIDIA_PAGE.title} | Infobell IT Solutions`,
  description: NVIDIA_PAGE.intro,
}

export default function NvidiaPage() {
  return <AiPartnerPage content={NVIDIA_PAGE} />
}
