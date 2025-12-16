"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CORE_EXPERTISE } from "@/lib/content/home"
import { ExpertiseSlideCard } from "@/components/expertise-slide-card"
import { Button } from "@/components/ui/button"

export function HeroPillarsSlider() {
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
    <div className="mt-8 sm:mt-10">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Centers of Excellence</p>
        <div className="hidden gap-2 sm:flex lg:hidden">
          <Button
            type="button"
            onClick={() => scrollByCards("prev")}
            aria-label="Scroll previous center of excellence"
            size="icon"
            variant="icon"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            onClick={() => scrollByCards("next")}
            aria-label="Scroll next center of excellence"
            size="icon"
            variant="icon"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        role="region"
        aria-label="Infobell centers of excellence"
        className="flex gap-4 overflow-x-auto scroll-smooth px-1 pb-8 pt-2 snap-x snap-mandatory lg:hidden"
      >
        {CORE_EXPERTISE.map((item) => (
          <ExpertiseSlideCard
            key={item.title}
            item={item}
            variant="compact"
            ariaLabel={`Explore ${item.title}`}
            className="min-w-[280px] max-w-[320px] snap-start sm:min-w-[320px]"
          />
        ))}
      </div>

      <div className="hidden grid-cols-3 gap-4 lg:grid xl:gap-6">
        {CORE_EXPERTISE.map((item) => (
          <ExpertiseSlideCard
            key={item.title}
            item={item}
            variant="compact"
            ariaLabel={`Explore ${item.title}`}
            className="h-full"
          />
        ))}
      </div>
    </div>
  )
}
