import Link from "next/link"

import { PRESS_RELEASES } from "@/lib/content/press"
import { cn } from "@/lib/utils"

type LatestPressReleasePillProps = {
  className?: string
}

export function LatestPressReleasePill({ className }: LatestPressReleasePillProps) {
  const latest = PRESS_RELEASES[0]

  if (!latest) return null

  return (
    <Link
      href={`/press-releases/${latest.slug}`}
      aria-label={`New press release: ${latest.title}`}
      className={cn(
        "group inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm transition hover:border-primary/30 hover:bg-card/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-sm font-semibold text-primary">
        New!
      </span>
      <span className="text-muted-foreground">Press Release:</span>
      <span className="text-foreground">{latest.title}</span>
      <span
        aria-hidden="true"
        className="translate-x-0 text-base text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground"
      >
        &rarr;
      </span>
    </Link>
  )
}

