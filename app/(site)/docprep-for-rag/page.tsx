import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("docprep-for-rag")

if (!productDetail) {
  throw new Error("Product metadata is missing for docprep-for-rag")
}

const product = productDetail

export const metadata: Metadata = withSeoMetadata({
  title: "DocPrep for RAG Platform",
  description:
    "DocPrep for RAG prepares enterprise documents for reliable retrieval workflows, improving data quality and AI readiness.",
  path: "/docprep-for-rag",
})

export default function ProductPage() {
  return <ProductDetailCard product={product} />
}
