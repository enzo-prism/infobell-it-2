import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("convogene")

if (!productDetail) {
  throw new Error("ConvoGene product metadata is missing")
}

const product = productDetail

export const metadata: Metadata = withSeoMetadata({
  title: "ConvoGene Enterprise Chatbot",
  description:
    "ConvoGene is an enterprise chatbot platform from Infobell IT, built for secure deployment, governance, and scalable conversational automation.",
  path: "/convogene",
})

export default function ConvoGenePage() {
  return <ProductDetailCard product={product} />
}
