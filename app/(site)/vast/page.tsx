import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("vast")

if (!productDetail) {
  throw new Error("Product metadata is missing for vast")
}

const product = productDetail

export const metadata: Metadata = withSeoMetadata({
  title: "VAST Media Summarization",
  description:
    "VAST transforms video and audio into multilingual, citation-backed summaries for compliance, operations, and enterprise knowledge workflows.",
  path: "/vast",
})

export default function ProductPage() {
  return <ProductDetailCard product={product} />
}
