import Link from "next/link"

import { PRESS_RELEASES } from "@/lib/content/press"
import { cn } from "@/lib/utils"

type LatestPressReleasePillProps = {
  className?: string
}

export function LatestPressReleasePill({ className }: LatestPressReleasePillProps) {
  const latest = PRESS_RELEASES[0]

  if (!latest) return null

  const href = `/press-releases/${latest.slug}`
  const ariaLabel = `New press release: ${latest.title}`

  return (
    <>
      <Link
        href={href}
        aria-label={ariaLabel}
        className={cn(
          "group flex w-full items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm transition hover:border-primary/30 hover:bg-card/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:hidden",
          className
        )}
      >
        <span className="inline-flex flex-none items-center rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
          New!
        </span>
        <span className="min-w-0 flex-1 truncate text-foreground">
          <span className="text-muted-foreground">Press Release:</span> {latest.title}
        </span>
      </Link>

      <Link
        href={href}
        aria-label={ariaLabel}
        className={cn(
          "group hidden max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm transition hover:border-primary/30 hover:bg-card/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex",
          className
        )}
      >
        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
          New!
        </span>
        <span className="text-muted-foreground">Press Release:</span>
        <span className="text-foreground underline-offset-4 transition group-hover:underline">{latest.title}</span>
        <span
          aria-hidden="true"
          className="translate-x-0 text-base text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground"
        >
          &rarr;
        </span>
      </Link>
    </>
  )
}
