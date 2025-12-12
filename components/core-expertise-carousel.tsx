"use client"

import Link from "next/link"
import { useRef } from "react"
import { Brain, Cloud, Cpu, Gauge, Leaf, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { CORE_EXPERTISE } from "@/lib/content/home"
import { Button } from "@/components/ui/button"

const expertiseIconMap: Record<(typeof CORE_EXPERTISE)[number]["icon"], LucideIcon> = {
  brain: Brain,
  cpu: Cpu,
  leaf: Leaf,
  gauge: Gauge,
  cloud: Cloud,
  shield: ShieldCheck,
}

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
          className="rounded-full bg-card"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          onClick={() => scrollByCards("next")}
          aria-label="Scroll next expertise"
          size="icon"
          variant="icon"
          className="rounded-full bg-card"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth pb-4 snap-x snap-mandatory"
      >
        {CORE_EXPERTISE.map((item) => {
          const Icon = expertiseIconMap[item.icon]
          const points = item.description
            .split(";")
            .map((point) => point.trim())
            .filter(Boolean)
            .map((point) => {
              const normalized = point.replace(/\.+$/, "")
              return normalized.charAt(0).toUpperCase() + normalized.slice(1)
            })
          return (
            <Link
              key={item.title}
              href={item.href}
              aria-label={`${item.title} capability`}
              className="card-glow hover-tilt group flex min-w-[280px] max-w-[320px] snap-start flex-col justify-between rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition duration-200 hover:border-transparent hover:bg-card hover:shadow-[inset_0_0_0_2px_rgba(14,165,233,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-w-[320px]"
            >
              <div className="flex flex-col gap-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent text-primary shadow-inner shadow-primary/20 ring-1 ring-primary/15 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
                <ul className="space-y-3 text-left text-sm leading-6 text-muted-foreground">
                  {points.slice(0, 4).map((point) => (
                    <li key={point} className="flex gap-3 rounded-xl border border-border/40 bg-card/60 p-3 text-left shadow-sm">
                      <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="mt-5 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                Learn more
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
