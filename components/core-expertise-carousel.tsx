"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CORE_EXPERTISE } from "@/lib/content/home"
import { ExpertiseSlideCard } from "@/components/expertise-slide-card"
import { Button } from "@/components/ui/button"

export function CoreExpertiseCarousel() {
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
          aria-label="Scroll previous expertise"
          size="icon"
          variant="icon"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          onClick={() => scrollByCards("next")}
          aria-label="Scroll next expertise"
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
        {CORE_EXPERTISE.map((item) => {
          return (
            <ExpertiseSlideCard
              key={item.title}
              item={item}
              variant="detailed"
              className="min-w-[280px] max-w-[320px] snap-start sm:min-w-[320px]"
            />
          )
        })}
      </div>
    </div>
  )
}
