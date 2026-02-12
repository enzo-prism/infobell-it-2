import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("cloud-control")

if (!productDetail) {
  throw new Error("Product metadata is missing for cloud-control")
}

const product = productDetail

export const metadata: Metadata = withSeoMetadata({
  title: "Cloud Control Analytics",
  description:
    "Cloud Control delivers analytics for private and hybrid clouds, helping teams improve reliability, efficiency, and cost performance.",
  path: "/cloud-control",
})

export default function ProductPage() {
  return <ProductDetailCard product={product} />
}
