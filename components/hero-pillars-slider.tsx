"use client"

import Link from "next/link"
import { useRef } from "react"
import {
  Brain,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Cpu,
  Gauge,
  Leaf,
  ShieldCheck,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ExpertiseIcon } from "@/lib/content/capabilities"
import { HERO_PILLARS } from "@/lib/content/home"
import { Button } from "@/components/ui/button"

const iconMap: Record<ExpertiseIcon, LucideIcon> = {
  brain: Brain,
  cpu: Cpu,
  leaf: Leaf,
  gauge: Gauge,
  cloud: Cloud,
  shield: ShieldCheck,
}

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

  const baseCardClassName =
    "card-glow group flex flex-col rounded-2xl border border-border bg-card/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"

  return (
    <div className="mt-8 sm:mt-10">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Centers of excellence</p>
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
        {HERO_PILLARS.map((pillar) => {
          const Icon = iconMap[pillar.icon]
          return (
            <Link
              key={pillar.title}
              href={pillar.href}
              aria-label={`Explore ${pillar.title}`}
              className={`${baseCardClassName} min-w-[260px] max-w-[320px] snap-start`}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent text-primary shadow-inner shadow-primary/20 ring-1 ring-primary/15 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-2">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-heading">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{pillar.summary}</p>
                </div>
              </div>
              <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:translate-x-1">
                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          )
        })}
      </div>

      <div className="hidden grid-cols-3 gap-4 lg:grid xl:gap-6">
        {HERO_PILLARS.map((pillar) => {
          const Icon = iconMap[pillar.icon]
          return (
            <Link
              key={pillar.title}
              href={pillar.href}
              aria-label={`Explore ${pillar.title}`}
              className={`${baseCardClassName} h-full`}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent text-primary shadow-inner shadow-primary/20 ring-1 ring-primary/15 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-2">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-heading">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{pillar.summary}</p>
                </div>
              </div>
              <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:translate-x-1">
                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
