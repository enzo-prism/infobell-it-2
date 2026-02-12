import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("smarte")

if (!productDetail) {
  throw new Error("Product metadata is missing for smarte")
}

const product = productDetail

export const metadata: Metadata = withSeoMetadata({
  title: "SmartE Vision AI Platform",
  description:
    "SmartE uses vision AI to detect anomalies quickly, with explainable results and dependable workflows for enterprise quality teams.",
  path: "/smarte",
})

export default function ProductPage() {
  return <ProductDetailCard product={product} />
}
