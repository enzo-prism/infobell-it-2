"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import clsx from "clsx"
import type { LogoEntry } from "@/lib/content/company"

type AutoHighlightLogoGridProps = {
  logos: LogoEntry[]
  containerClassName: string
  cardClassName: string
  logoFrameClassName?: string
  sizes?: string
  autoHighlight?: boolean
  intervalMs?: number
}

export function AutoHighlightLogoGrid({
  logos,
  containerClassName,
  cardClassName,
  logoFrameClassName = "h-8 w-full sm:h-10",
  sizes = "(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 18vw",
  autoHighlight = true,
  intervalMs = 3000,
}: AutoHighlightLogoGridProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!autoHighlight || !logos.length) return
    const interval = setInterval(() => {
      setPrevIndex((prev) => (prev === null ? activeIndex : prev))
      setActiveIndex((prev) => (prev + 1) % logos.length)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [autoHighlight, logos.length, intervalMs, activeIndex])

  useEffect(() => {
    if (!autoHighlight || prevIndex === null) return
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setPrevIndex(null)
    }, 400)
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [prevIndex])

  return (
    <div className={containerClassName}>
      {logos.map((logo, index) => {
        const isActive = hoveredIndex === index || (autoHighlight && activeIndex === index)
        const isFading = autoHighlight && prevIndex === index
        const baseClasses = clsx(
          "group relative overflow-hidden",
          cardClassName,
          isActive && "border-sky-300 shadow-lg",
          isFading && !isActive && "border-sky-200",
          logo.href ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300" : "cursor-default"
        )

        const image = (
          <div className={clsx("relative", logoFrameClassName)}>
            <Image
              src={logo.image}
              alt={logo.alt}
              fill
              sizes={sizes}
              className={clsx(
                "object-contain transition duration-700 ease-out",
                isActive
                  ? "grayscale-0 opacity-100"
                  : isFading
                    ? "grayscale-[20%] opacity-90"
                    : "grayscale opacity-70",
                "group-hover:grayscale-0 group-hover:opacity-100"
              )}
            />
          </div>
        )

        const sweepHighlight = isActive ? (
          <span className="pointer-events-none absolute inset-y-0 w-1/2 animate-sweep bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70" />
        ) : null

        if (logo.href) {
          return (
            <a
              key={logo.image}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${logo.alt}`}
              className={baseClasses}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {sweepHighlight}
              {image}
            </a>
          )
        }

        return (
          <div
            key={logo.image}
            className={baseClasses}
            role="img"
            aria-label={logo.alt}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {sweepHighlight}
            {image}
          </div>
        )
      })}
    </div>
  )
}
