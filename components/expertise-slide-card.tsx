"use client"

import Link from "next/link"
import type { ExpertiseItem } from "@/lib/content/home"
import { ExpertiseHoverIcon } from "@/components/expertise-hover-icon"
import { cn } from "@/lib/utils"

export type ExpertiseSlideCardProps = {
  item: ExpertiseItem
  variant?: "compact" | "detailed"
  className?: string
  ariaLabel?: string
}

function getHighlights(description: string) {
  return description
    .split(";")
    .map((point) => point.trim())
    .filter(Boolean)
    .map((point) => {
      const normalized = point.replace(/\.+$/, "")
      return normalized.charAt(0).toUpperCase() + normalized.slice(1)
    })
}

export function ExpertiseSlideCard({
  item,
  variant = "detailed",
  className,
  ariaLabel,
}: ExpertiseSlideCardProps) {
  const points = variant === "detailed" ? getHighlights(item.description).slice(0, 4) : []

  return (
    <Link
      href={item.href}
      aria-label={ariaLabel ?? `${item.title} capability`}
      className={cn(
        "card-glow hover-tilt group flex flex-col justify-between rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition duration-200 hover:border-transparent hover:bg-card hover:shadow-[inset_0_0_0_2px_rgba(14,165,233,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <div className="flex flex-col gap-4 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent text-primary shadow-inner shadow-primary/20 ring-1 ring-primary/15 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
          <ExpertiseHoverIcon icon={item.icon} className="h-8 w-8" />
        </div>
        <h3 className="text-lg font-semibold text-heading">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.summary}</p>
        {variant === "detailed" ? (
          <ul className="space-y-3 text-left text-sm leading-6 text-muted-foreground">
            {points.map((point) => (
              <li key={point} className="flex gap-3 rounded-xl border border-border/40 bg-card/60 p-3 shadow-sm">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <span className="mt-5 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
        Learn more
      </span>
    </Link>
  )
}
