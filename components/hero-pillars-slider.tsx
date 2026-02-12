"use client"

import Link from "next/link"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react"
import { HERO_CENTER_SLIDES } from "@/lib/content/home"
import { cn } from "@/lib/utils"

export function HeroPillarsSlider() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const scrollRafRef = useRef<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  const updateActiveIndex = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const slides = Array.from(
      container.querySelectorAll<HTMLElement>("[data-hero-center-slide]")
    )
    if (!slides.length) return

    const scrollLeft = container.scrollLeft
    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - scrollLeft)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex((previous) => (previous === closestIndex ? previous : closestIndex))
  }, [])

  const scheduleActiveIndexUpdate = useCallback(() => {
    if (scrollRafRef.current !== null) return

    scrollRafRef.current = window.requestAnimationFrame(() => {
      scrollRafRef.current = null
      updateActiveIndex()
    })
  }, [updateActiveIndex])

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = scrollContainerRef.current
      if (!container) return

      const slide = container.querySelectorAll<HTMLElement>("[data-hero-center-slide]")[index]
      if (!slide) return

      container.scrollTo({
        left: slide.offsetLeft,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      })
    },
    [prefersReducedMotion]
  )

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!HERO_CENTER_SLIDES.length) return

    if (event.key === "ArrowRight") {
      event.preventDefault()
      const nextIndex = Math.min(activeIndex + 1, HERO_CENTER_SLIDES.length - 1)
      setActiveIndex(nextIndex)
      scrollToIndex(nextIndex)
      return
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault()
      const nextIndex = Math.max(activeIndex - 1, 0)
      setActiveIndex(nextIndex)
      scrollToIndex(nextIndex)
      return
    }

    if (event.key === "Home") {
      event.preventDefault()
      setActiveIndex(0)
      scrollToIndex(0)
      return
    }

    if (event.key === "End") {
      event.preventDefault()
      const lastIndex = HERO_CENTER_SLIDES.length - 1
      setActiveIndex(lastIndex)
      scrollToIndex(lastIndex)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    updateActiveIndex()

    container.addEventListener("scroll", scheduleActiveIndexUpdate, { passive: true })

    const resizeObserver = new ResizeObserver(() => {
      updateActiveIndex()
    })
    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
      container.removeEventListener("scroll", scheduleActiveIndexUpdate)
      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current)
        scrollRafRef.current = null
      }
    }
  }, [scheduleActiveIndexUpdate, updateActiveIndex])

  return (
    <div className="mt-8 sm:mt-10">
      <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Centers of Excellence</h2>

      <div
        ref={scrollContainerRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Centers of excellence"
        onKeyDown={handleKeyDown}
        className="mt-4 flex overflow-x-auto scroll-smooth pb-4 pt-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:scroll-auto"
      >
        {HERO_CENTER_SLIDES.map((slide, index) => (
          <Link
            key={slide.slug}
            href={slide.href}
            data-hero-center-slide
            aria-roledescription="slide"
            aria-label={`${slide.title} (${index + 1} of ${HERO_CENTER_SLIDES.length})`}
            className="group w-full flex-none snap-start rounded-3xl px-1 transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
          >
            <article
              className={cn(
                "card-glow relative flex min-h-[170px] flex-col justify-between gap-6 rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-background to-background p-6 shadow-sm transition-shadow duration-300 ease-out group-hover:border-white/25 group-hover:shadow-lg group-focus-visible:border-white/25 group-focus-visible:shadow-lg sm:min-h-[190px] sm:p-8 motion-reduce:transition-none",
                index === activeIndex && "border-primary/40"
              )}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
              >
                <Image
                  src={slide.hoverImageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 1024px"
                  className="object-cover object-center scale-105 opacity-100 blur-sm transition-transform duration-700 ease-out group-hover:scale-100 group-focus-visible:scale-100 dark:brightness-75 dark:contrast-125 dark:saturate-125 motion-reduce:transform-none motion-reduce:transition-none"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-l from-slate-950/80 via-slate-950/45 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
              />

              <h3 className="relative z-20 w-full text-left text-2xl font-semibold tracking-tight text-heading transition-colors duration-300 group-hover:text-white group-focus-visible:text-white sm:text-3xl">
                {slide.title}
              </h3>
              <div className="relative z-20 w-full self-start text-left sm:max-w-lg lg:max-w-md">
                <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-white/90 group-focus-visible:text-white/90">
                  {slide.tagline}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-white/75 group-focus-visible:text-white/75 sm:text-base sm:leading-7">
                  {slide.summary}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2" aria-label="Slide pagination">
        {HERO_CENTER_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={slide.slug}
              type="button"
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => {
                setActiveIndex(index)
                scrollToIndex(index)
              }}
              className={cn(
                "h-2.5 w-2.5 rounded-full bg-border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive && "w-7 bg-primary"
              )}
            />
          )
        })}
      </div>
    </div>
  )
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()

    mediaQuery.addEventListener("change", updatePreference)
    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  return prefersReducedMotion
}
