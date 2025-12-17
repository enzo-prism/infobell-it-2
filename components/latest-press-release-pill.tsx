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
          "group flex w-full items-center gap-2 rounded-full border border-[color:rgba(10,31,68,0.18)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--navy)] shadow-[0_10px_25px_-20px_rgba(10,31,68,0.45)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-white hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.92),0_18px_45px_-30px_rgba(10,31,68,0.85)] active:translate-y-0 active:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75),0_10px_25px_-20px_rgba(10,31,68,0.7)] dark:border-white/20 dark:bg-[color:var(--navy)] dark:text-white dark:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.82),0_18px_45px_-30px_rgba(0,0,0,0.7)] dark:hover:border-[color:rgba(10,31,68,0.18)] dark:hover:bg-white dark:hover:text-[color:var(--navy)] dark:hover:shadow-[0_10px_25px_-20px_rgba(10,31,68,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--navy)] focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-safe:transform-gpu dark:focus-visible:ring-white/70 sm:hidden",
          className
        )}
      >
        <span className="inline-flex flex-none items-center rounded-full bg-[color:rgba(10,31,68,0.1)] px-2 py-0.5 font-semibold text-[color:var(--navy)] transition-colors group-hover:bg-white/20 group-hover:text-white dark:bg-white/20 dark:text-white dark:group-hover:bg-[color:rgba(10,31,68,0.1)] dark:group-hover:text-[color:var(--navy)]">
          New!
        </span>
        <span className="min-w-0 flex-1 truncate">
          <span className="text-[color:rgba(10,31,68,0.65)] transition-colors group-hover:text-white/85 dark:text-white/85 dark:group-hover:text-[color:rgba(10,31,68,0.65)]">
            Press Release:
          </span>{" "}
          {latest.title}
        </span>
      </Link>

      <Link
        href={href}
        aria-label={ariaLabel}
        className={cn(
          "group hidden max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-[color:rgba(10,31,68,0.18)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--navy)] shadow-[0_10px_25px_-20px_rgba(10,31,68,0.45)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-white hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.92),0_18px_45px_-30px_rgba(10,31,68,0.85)] active:translate-y-0 active:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75),0_10px_25px_-20px_rgba(10,31,68,0.7)] dark:border-white/20 dark:bg-[color:var(--navy)] dark:text-white dark:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.82),0_18px_45px_-30px_rgba(0,0,0,0.7)] dark:hover:border-[color:rgba(10,31,68,0.18)] dark:hover:bg-white dark:hover:text-[color:var(--navy)] dark:hover:shadow-[0_10px_25px_-20px_rgba(10,31,68,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--navy)] focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-safe:transform-gpu dark:focus-visible:ring-white/70 sm:inline-flex",
          className
        )}
      >
        <span className="inline-flex items-center rounded-full bg-[color:rgba(10,31,68,0.1)] px-2 py-0.5 font-semibold text-[color:var(--navy)] transition-colors group-hover:bg-white/20 group-hover:text-white dark:bg-white/20 dark:text-white dark:group-hover:bg-[color:rgba(10,31,68,0.1)] dark:group-hover:text-[color:var(--navy)]">
          New!
        </span>
        <span className="text-[color:rgba(10,31,68,0.65)] transition-colors group-hover:text-white/85 dark:text-white/85 dark:group-hover:text-[color:rgba(10,31,68,0.65)]">
          Press Release:
        </span>
        <span className="text-[color:var(--navy)] transition-colors group-hover:text-white dark:text-white dark:group-hover:text-[color:var(--navy)]">
          {latest.title}
        </span>
        <span
          aria-hidden="true"
          className="translate-x-0 text-base text-[color:rgba(10,31,68,0.65)] transition group-hover:translate-x-1 group-hover:text-white/85 dark:text-white/85 dark:group-hover:text-[color:rgba(10,31,68,0.65)]"
        >
          &rarr;
        </span>
      </Link>
    </>
  )
}
