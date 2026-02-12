import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { ProductDetailCard } from "@/components/product-detail"
import { getProductBySlug } from "@/lib/content/products"

const productDetail = getProductBySlug("echoswift")

if (!productDetail) {
  throw new Error("Product metadata is missing for echoswift")
}

const product = productDetail

export const metadata: Metadata = withSeoMetadata({
  title: "EchoSwift LLM Benchmarking",
  description:
    "EchoSwift benchmarks LLM workloads across infrastructure options, helping teams compare latency, throughput, and cost.",
  path: "/echoswift",
})

export default function ProductPage() {
  return <ProductDetailCard product={product} />
}
