import type { Metadata } from "next"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("convogene")

if (!productDetail) {
  throw new Error("ConvoGene product metadata is missing")
}

const product = productDetail

export const metadata: Metadata = {
  title: `${product.title} | Infobell IT Service Product`,
  description: product.tagline,
}

export default function ConvoGenePage() {
  return <ProductDetailCard product={product} />
}
