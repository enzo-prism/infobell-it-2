"use client"

import type { ReactNode } from "react"
import { RotatingBanner } from "@/components/rotating-banner"

export function CapabilityHighlightsRotator({
  highlights,
  className,
}: {
  highlights: string[]
  className?: string
}) {
  if (!highlights.length) return null

  return (
    <RotatingBanner
      items={highlights}
      className={className}
      intervalMs={5000}
      showControls
      pauseOnFocus
      pauseOnHover
      defaultAutoPlay
      reduceMotionAware
      getLabel={(highlight) => highlight}
      renderLabel={(highlight): ReactNode => (
        <p className="text-base font-semibold text-foreground transition-colors duration-250 sm:text-lg">
          {highlight}
        </p>
      )}
    />
  )
}
