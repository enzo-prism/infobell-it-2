import Link from "next/link"

import { PressReleaseRotator } from "@/components/press-release-rotator"
import { PRESS_RELEASES } from "@/lib/content/press"
import { cn } from "@/lib/utils"

type LatestPressReleasePillProps = {
  className?: string
}

function StaticPressReleasePill({ release, className }: { release: typeof PRESS_RELEASES[number]; className?: string }) {
  return (
    <Link
      href={`/press-releases/${release.slug}`}
      aria-label={`New press release: ${release.title}`}
      className={cn(
        "flex w-full items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] shadow-sm transition-all",
        "hover:border-[color:var(--brand)] hover:bg-[color:var(--brand)] hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <span className="inline-flex flex-none items-center rounded-full bg-[color:var(--surface-2)] px-2 py-0.5 font-semibold text-[color:var(--brand)] transition-colors hover:bg-white/20 hover:text-white">
        New!
      </span>
      <span className="min-w-0 flex-1 truncate">
        <span className="text-[color:var(--muted-text)] transition-colors hover:text-white/85">Press Release:</span>{" "}
        <span className="text-[color:var(--text)] transition-colors hover:text-white/95">{release.title}</span>
      </span>
      <span
        aria-hidden="true"
        className="translate-x-0 text-base text-[color:var(--muted-text)] transition hover:translate-x-1 hover:text-white/85"
      >
        &rarr;
      </span>
    </Link>
  )
}

export function LatestPressReleasePill({ className }: LatestPressReleasePillProps) {
  const latest = PRESS_RELEASES
  if (!latest.length) return null

  if (latest.length <= 1) {
    return <StaticPressReleasePill release={latest[0]} className={className} />
  }

  return <PressReleaseRotator releases={latest} className={className} />
}
