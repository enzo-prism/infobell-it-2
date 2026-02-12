import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("transcribe")

if (!productDetail) {
  throw new Error("Product metadata is missing for transcribe")
}

const product = productDetail

export const metadata: Metadata = withSeoMetadata({
  title: "Transcribe Meeting Intelligence",
  description:
    "Transcribe captures multi-speaker conversations and turns them into structured insights, summaries, and actions for enterprise teams.",
  path: "/transcribe",
})

export default function ProductPage() {
  return <ProductDetailCard product={product} />
}
