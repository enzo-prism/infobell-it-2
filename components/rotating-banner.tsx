"use client"

import { useCallback, useEffect, useRef, useState, type FocusEvent, type ReactNode } from "react"
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

type RenderLabelProps = {
  isActive: boolean
  index: number
  total: number
}

type RotatingBannerProps<T> = {
  items: T[]
  intervalMs?: number
  getLabel: (item: T, index: number) => string
  renderLabel: (item: T, state: RenderLabelProps) => ReactNode
  showControls?: boolean
  pauseOnFocus?: boolean
  pauseOnHover?: boolean
  defaultAutoPlay?: boolean
  reduceMotionAware?: boolean
  className?: string
}

export function RotatingBanner<T>({
  items,
  intervalMs = 5000,
  getLabel,
  renderLabel,
  showControls = true,
  pauseOnFocus = true,
  pauseOnHover = true,
  defaultAutoPlay = true,
  reduceMotionAware = true,
  className,
}: RotatingBannerProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(defaultAutoPlay)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [announcement, setAnnouncement] = useState("")
  const containerRef = useRef<HTMLDivElement | null>(null)
  const intervalRef = useRef<number | ReturnType<typeof setInterval> | null>(null)
  const hasMultipleItems = items.length > 1

  const canPlay = hasMultipleItems && isPlaying && !prefersReducedMotion && !isHovered && !isFocused

  useEffect(() => {
    if (!reduceMotionAware) return
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)

    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [reduceMotionAware])

  const clearAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    clearAutoPlay()
    if (!canPlay) return

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % items.length)
    }, intervalMs)

    return () => clearAutoPlay()
  }, [canPlay, intervalMs, items.length, clearAutoPlay])

  useEffect(() => {
    return () => clearAutoPlay()
  }, [clearAutoPlay])

  const announce = useCallback((index: number) => {
    setAnnouncement(`${getLabel(items[index], index)} (${index + 1} of ${items.length})`)
  }, [getLabel, items])

  const goToIndex = useCallback(
    (index: number) => {
      setActiveIndex((previous) => {
        if (previous === index) return previous
        announce(index)
        return index
      })
    },
    [announce],
  )

  const handlePrev = useCallback(() => {
    if (!hasMultipleItems) return
    const nextIndex = (activeIndex - 1 + items.length) % items.length
    goToIndex(nextIndex)
  }, [activeIndex, goToIndex, hasMultipleItems, items.length])

  const handleNext = useCallback(() => {
    if (!hasMultipleItems) return
    const nextIndex = (activeIndex + 1) % items.length
    goToIndex(nextIndex)
  }, [activeIndex, goToIndex, hasMultipleItems, items.length])

  const showControlsBar = showControls && hasMultipleItems
  const showPlayControl = reduceMotionAware ? !prefersReducedMotion : true

  const focusIn = () => {
    if (pauseOnFocus) {
      setIsFocused(true)
    }
  }

  const focusOut = (event: FocusEvent<HTMLDivElement>) => {
    if (!pauseOnFocus) return
    const nextTarget = event.relatedTarget as Node | null
    if (!containerRef.current?.contains(nextTarget)) {
      setIsFocused(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className="w-full space-y-2"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      onFocusCapture={focusIn}
      onBlurCapture={focusOut}
    >
      <div className={`relative overflow-hidden ${className ?? "min-h-12"}`}>
        {items.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={`${index}-${getLabel(item, index)}`}
              className={`absolute inset-0 flex items-center transition-all duration-250 ease-out ${
                isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {renderLabel(item, { isActive, index, total: items.length })}
            </div>
          )
        })}
      </div>
      {showControlsBar ? (
        <div className="flex items-center justify-end gap-2">
          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={handlePrev}
            aria-label="Show previous item"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={handleNext}
            aria-label="Show next item"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
          {showPlayControl ? (
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={() => setIsPlaying((previous) => !previous)}
              aria-label={isPlaying ? "Pause rotation" : "Play rotation"}
              aria-pressed={isPlaying}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          ) : null}
        </div>
      ) : null}
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  )
}
