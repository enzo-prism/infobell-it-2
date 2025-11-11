"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import clsx from "clsx"
import type { LogoEntry } from "@/lib/content/company"

type AutoHighlightLogoGridProps = {
  logos: LogoEntry[]
  containerClassName: string
  cardClassName: string
  baseWidth: number
  baseHeight: number
  heightRem: number
  intervalMs?: number
}

export function AutoHighlightLogoGrid({
  logos,
  containerClassName,
  cardClassName,
  baseWidth,
  baseHeight,
  heightRem,
  intervalMs = 3000,
}: AutoHighlightLogoGridProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!logos.length) return
    const interval = setInterval(() => {
      setPrevIndex((prev) => (prev === null ? activeIndex : prev))
      setActiveIndex((prev) => (prev + 1) % logos.length)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [logos.length, intervalMs, activeIndex])

  useEffect(() => {
    if (prevIndex === null) return
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
        const multiplier = logo.multiplier ?? 1
        const isActive = hoveredIndex === index || activeIndex === index
        const isFading = prevIndex === index
        const baseClasses = clsx(
          "group",
          cardClassName,
          isActive && "border-sky-300 shadow-lg",
          isFading && !isActive && "border-sky-200",
          logo.href ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300" : "cursor-default"
        )

        const image = (
          <Image
            src={logo.image}
            alt={logo.alt}
            width={baseWidth * multiplier}
            height={baseHeight * multiplier}
            className={clsx(
              "w-auto object-contain transition duration-700 ease-out",
              isActive
                ? "grayscale-0 opacity-100"
                : isFading
                  ? "grayscale-[20%] opacity-90"
                  : "grayscale opacity-70",
              "group-hover:grayscale-0 group-hover:opacity-100"
            )}
            style={{ height: `${heightRem * multiplier}rem` }}
          />
        )

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
            {image}
          </div>
        )
      })}
    </div>
  )
}
