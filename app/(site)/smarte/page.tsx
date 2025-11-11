import type { Metadata } from "next"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("smarte")

if (!productDetail) {
  throw new Error("Product metadata is missing for smarte")
}

const product = productDetail

export const metadata: Metadata = {
  title: `${product.title} | Infobell Service Product`,
  description: product.tagline,
}

export default function ProductPage() {
  return <ProductDetailCard product={product} />
}
