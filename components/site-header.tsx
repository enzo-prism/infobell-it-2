"use client"

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { useEffect, useRef, useState, type FocusEvent, type ComponentType } from "react"
import { Bot, ChevronDown, Cloud, Cpu, Gauge, Leaf, Menu, ShieldCheck, X } from "lucide-react"
import { NAV_PRIMARY, type NavGroup, type NavItem } from "@/lib/content/site"
import { ThemeToggle } from "@/components/theme-toggle"

type NavEntry = NavItem | NavGroup
const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  bot: Bot,
  cpu: Cpu,
  leaf: Leaf,
  gauge: Gauge,
  cloud: Cloud,
  shield: ShieldCheck,
}

function SolutionIcon({ icon, className }: { icon?: string; className?: string }) {
  if (!icon) return null
  const IconComponent = ICON_MAP[icon]
  if (!IconComponent) return null
  return (
    <span
      className={clsx(
        "flex h-8 w-8 flex-none items-center justify-center rounded-xl border border-border/50 bg-muted/40 text-muted-foreground transition duration-300 group-hover:border-primary/40 group-hover:text-primary",
        className
      )}
    >
      <IconComponent className="h-3.5 w-3.5 stroke-[1.6]" />
    </span>
  )
}

function isGroup(entry: NavEntry): entry is NavGroup {
  return (entry as NavGroup).items !== undefined
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopGroup, setDesktopGroup] = useState<string | null>(null)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current)
      }
    }
  }, [])

  const openDesktopGroup = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
    }
    setDesktopGroup(label)
  }

  const scheduleDesktopClose = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
    }
    closeTimeout.current = setTimeout(() => {
      setDesktopGroup((prev) => (prev === label ? null : prev))
    }, 150)
  }

  const handleDesktopBlur = (event: FocusEvent<HTMLDivElement>, label: string) => {
    const nextFocus = event.relatedTarget as Node | null
    if (!nextFocus || !event.currentTarget.contains(nextFocus)) {
      setDesktopGroup((prev) => (prev === label ? null : prev))
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 md:h-24">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl border border-border bg-white px-3 py-2 shadow-sm transition hover:border-primary/50 dark:border-border/40"
        >
          <Image
            src="/images/logos/infobellLogo.png"
            alt="Infobell IT logo"
            width={160}
            height={50}
            className="h-10 w-auto md:h-12"
            priority
          />
          <span className="sr-only">Infobell IT</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {NAV_PRIMARY.map((entry) =>
            isGroup(entry) ? (
              <div
                key={entry.label}
                className="group relative"
                onMouseEnter={() => openDesktopGroup(entry.label)}
                onMouseLeave={() => scheduleDesktopClose(entry.label)}
                onFocus={() => openDesktopGroup(entry.label)}
                onBlur={(event) => handleDesktopBlur(event, entry.label)}
              >
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-foreground transition hover:text-primary"
                  aria-expanded={desktopGroup === entry.label}
                  aria-haspopup="true"
                  onClick={() =>
                    setDesktopGroup((prev) => (prev === entry.label ? null : entry.label))
                  }
                >
                  {entry.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${desktopGroup === entry.label ? "rotate-180" : ""}`}
                  />
                </button>
                {desktopGroup === entry.label ? (
                  <div
                    className="absolute left-0 top-full mt-2 w-56 rounded-lg border border-border bg-background p-2 shadow-lg"
                    onMouseEnter={() => openDesktopGroup(entry.label)}
                    onMouseLeave={() => scheduleDesktopClose(entry.label)}
                  >
                    {entry.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="group flex items-center gap-3 rounded-md px-2 py-1 text-sm transition hover:bg-muted"
                        onClick={() => setDesktopGroup(null)}
                      >
                        <SolutionIcon icon={item.icon} />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={entry.label}
                href={entry.href}
                className="rounded-md px-2 py-1 transition hover:text-primary"
              >
                {entry.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background p-2 text-sm text-foreground lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen ? (
        <nav id="mobile-nav" className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <div className="mb-4 flex justify-end">
            <ThemeToggle />
          </div>
          <ul className="flex flex-col gap-4 text-base font-medium">
            {NAV_PRIMARY.map((entry) =>
              isGroup(entry) ? (
                <li key={entry.label}>
                  <p className="mb-2 text-sm font-semibold uppercase text-muted-foreground">{entry.label}</p>
                  <ul className="flex flex-col gap-2">
                    {entry.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="group flex items-center gap-3 rounded-md px-3 py-2 transition hover:bg-muted"
                          onClick={() => setMobileOpen(false)}
                        >
                          <SolutionIcon icon={item.icon} />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={entry.label}>
                  <Link
                    href={entry.href}
                    className="block rounded-md px-3 py-2 transition hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {entry.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
