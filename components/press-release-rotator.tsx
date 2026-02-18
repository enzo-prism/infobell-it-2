"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import type { PressRelease } from "@/lib/content/press"
import { RotatingBanner } from "@/components/rotating-banner"

function PressReleasePill({
  href,
  label,
  isActive,
}: {
  href: string
  label: string
  isActive: boolean
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      tabIndex={isActive ? 0 : -1}
      className={cn(
        "absolute inset-0 z-10 flex w-full items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] shadow-sm transition-all",
        "hover:border-[color:var(--brand)] hover:bg-[color:var(--brand)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
    >
      <span className="inline-flex flex-none items-center rounded-full bg-[color:var(--surface-2)] px-2 py-0.5 font-semibold text-[color:var(--brand)] transition-colors hover:bg-white/20 hover:text-white">
        New!
      </span>
      <span className="min-w-0 flex-1 truncate text-left">
        <span className="text-[color:var(--muted-text)] transition-colors hover:text-white/85">Press Release:</span>{" "}
        <span className="text-[color:var(--text)] transition-colors hover:text-white/95"> {label}</span>
      </span>
      <span
        aria-hidden="true"
        className="translate-x-0 text-base text-[color:var(--muted-text)] transition hover:translate-x-1 hover:text-white"
      >
        &rarr;
      </span>
    </Link>
  )
}

export function PressReleaseRotator({
  releases,
  className,
}: {
  releases: PressRelease[]
  className?: string
}) {
  if (releases.length <= 1) return null

  const bannerClassName = `min-h-12 sm:min-h-12 ${className ?? ""}`.trim()

  return (
    <RotatingBanner
      items={releases}
      intervalMs={5000}
      pauseOnHover
      pauseOnFocus
      showControls
      reduceMotionAware
      getLabel={(release) => release.title}
      renderLabel={(release, { isActive }) => (
        <PressReleasePill
          href={`/press-releases/${release.slug}`}
          label={release.title}
          isActive={isActive}
        />
      )}
      className={bannerClassName}
    />
  )
}
