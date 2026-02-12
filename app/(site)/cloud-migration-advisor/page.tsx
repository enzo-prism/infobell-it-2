import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("cloud-migration-advisor")

if (!productDetail) {
  throw new Error("Product metadata is missing for cloud-migration-advisor")
}

const product = productDetail

export const metadata: Metadata = withSeoMetadata({
  title: "Cloud Migration Advisor",
  description:
    "Cloud Migration Advisor helps enterprises assess workloads, reduce migration risk, and prioritize modernization decisions.",
  path: "/cloud-migration-advisor",
})

export default function ProductPage() {
  return <ProductDetailCard product={product} />
}
