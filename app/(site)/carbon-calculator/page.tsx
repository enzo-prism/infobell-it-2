import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("carbon-calculator")

if (!productDetail) {
  throw new Error("Product metadata is missing for carbon-calculator")
}

const product = productDetail

export const metadata: Metadata = withSeoMetadata({
  title: "Carbon Calculator Platform",
  description:
    "Carbon Calculator helps teams track cloud emissions, quantify sustainability impact, and prioritize cost-aware optimization.",
  path: "/carbon-calculator",
})

export default function ProductPage() {
  return <ProductDetailCard product={product} />
}
