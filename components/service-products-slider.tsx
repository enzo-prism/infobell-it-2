"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SERVICE_PRODUCTS } from "@/lib/content/home"
import { Button } from "@/components/ui/button"

export function ServiceProductsSlider() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const scrollByCards = (direction: "prev" | "next") => {
    const node = scrollContainerRef.current
    if (!node) return

    const cardWidth = node.firstElementChild instanceof HTMLElement ? node.firstElementChild.offsetWidth + 16 : 320
    node.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    })
  }

  return (
    <div className="mt-8">
      <div className="mb-4 flex justify-end gap-2">
        <Button
          type="button"
          onClick={() => scrollByCards("prev")}
          aria-label="Scroll previous service product"
          size="icon"
          variant="icon"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          onClick={() => scrollByCards("next")}
          aria-label="Scroll next service product"
          size="icon"
          variant="icon"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-1 pb-8 pt-2 snap-x snap-mandatory"
      >
        {SERVICE_PRODUCTS.map((product) => (
          <Link
            key={product.slug}
            href={`/${product.slug}`}
            aria-label={`View ${product.title}`}
            className="card-glow group flex min-w-[260px] max-w-[320px] snap-start flex-col rounded-2xl border border-border bg-card/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="relative h-32 w-full overflow-hidden rounded-xl border border-border bg-muted transition-all duration-500 ease-out group-hover:shadow-xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 80vw, 320px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-heading">{product.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
            <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:translate-x-1">
              <span className="underline-offset-4 group-hover:underline">Explore</span>
              <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
