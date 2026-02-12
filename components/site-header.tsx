"use client"

import * as Accordion from "@radix-ui/react-accordion"
import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { useEffect, useRef, useState, type FocusEvent, type ComponentType } from "react"
import {
  Brain,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Cloud,
  Cpu,
  Gauge,
  Leaf,
  Menu,
  Newspaper,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react"
import {
  NAV_PRIMARY,
  SITE_LOGO,
  type NavGroup,
  type NavIcon,
  type NavItem,
} from "@/lib/content/site"
import { Button } from "@/components/ui/button"

type NavEntry = NavItem | NavGroup
const NAV_ICON_MAP: Record<NavIcon, ComponentType<{ className?: string }>> = {
  brain: Brain,
  cpu: Cpu,
  leaf: Leaf,
  gauge: Gauge,
  cloud: Cloud,
  shield: ShieldCheck,
  building2: Building2,
  usersRound: UsersRound,
  briefcaseBusiness: BriefcaseBusiness,
  newspaper: Newspaper,
}

function SolutionIcon({ icon, className }: { icon?: NavIcon; className?: string }) {
  if (!icon) return null
  const IconComponent = NAV_ICON_MAP[icon]
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

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordionValue, setMobileAccordionValue] = useState<string[]>([])
  const [desktopGroup, setDesktopGroup] = useState<string | null>(null)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current)
      }
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const nextValue: string[] = []
    for (const entry of NAV_PRIMARY) {
      if (!isGroup(entry)) continue
      if (entry.items.some((item) => isActiveRoute(pathname, item.href))) {
        nextValue.push(entry.label)
      }
    }
    setMobileAccordionValue(nextValue)
  }, [mobileOpen, pathname])

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

  const mobileNavGroups = NAV_PRIMARY.filter(isGroup)
  const mobileNavLinks = NAV_PRIMARY.filter(
    (entry): entry is NavItem => !isGroup(entry) && entry.href !== "/" && entry.href !== "/contact",
  )

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 md:h-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2 shadow-sm transition hover:border-primary/50 dark:border-border/40"
        >
          <Image
            src={SITE_LOGO.lightSrc}
            alt={SITE_LOGO.alt}
            width={SITE_LOGO.width}
            height={SITE_LOGO.height}
            className="h-10 w-auto dark:hidden md:h-12"
            priority={true}
          />
          <Image
            src={SITE_LOGO.darkSrc}
            alt={SITE_LOGO.alt}
            width={SITE_LOGO.width}
            height={SITE_LOGO.height}
            className="hidden h-10 w-auto dark:block md:h-12"
            priority={true}
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
                  className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <Button
                type="button"
                size="icon"
                variant="icon"
                className="lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm lg:hidden" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col border-l border-border bg-background shadow-2xl focus:outline-none lg:hidden">
                <Dialog.Title className="sr-only">Mobile navigation</Dialog.Title>
                <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-4 sm:px-6">
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2 shadow-sm transition hover:border-primary/50 dark:border-border/40"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Image
                      src={SITE_LOGO.lightSrc}
                      alt={SITE_LOGO.alt}
                      width={SITE_LOGO.width}
                      height={SITE_LOGO.height}
                      className="h-10 w-auto dark:hidden"
                      priority={true}
                    />
                    <Image
                      src={SITE_LOGO.darkSrc}
                      alt={SITE_LOGO.alt}
                      width={SITE_LOGO.width}
                      height={SITE_LOGO.height}
                      className="hidden h-10 w-auto dark:block"
                      priority={true}
                    />
                    <span className="sr-only">Infobell IT</span>
                  </Link>
                  <Dialog.Close asChild>
                    <Button type="button" size="icon" variant="icon" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </Dialog.Close>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="space-y-2">
                    <Link
                      href="/"
                      aria-current={pathname === "/" ? "page" : undefined}
                      className={clsx(
                        "flex items-center justify-between rounded-2xl border border-border bg-card/60 px-4 py-3 text-base font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card/80 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                        pathname === "/" && "border-primary/60 bg-primary/10",
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      Home
                      <span className={clsx("text-muted-foreground", pathname === "/" && "text-primary")}>
                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </span>
                    </Link>
                  </div>

                  <Accordion.Root
                    type="multiple"
                    value={mobileAccordionValue}
                    onValueChange={setMobileAccordionValue}
                    className="mt-6 space-y-3"
                  >
                    {mobileNavGroups.map((group) => {
                      const groupActive = group.items.some((item) => isActiveRoute(pathname, item.href))
                      return (
                        <Accordion.Item
                          key={group.label}
                          value={group.label}
                          className="overflow-hidden rounded-2xl border border-border bg-card/50 shadow-sm"
                        >
                          <Accordion.Header>
                            <Accordion.Trigger
                              className={clsx(
                                "group flex w-full items-center justify-between px-4 py-3 text-base font-semibold text-foreground transition hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 data-[state=open]:bg-card/70",
                                groupActive && "bg-primary/10 text-foreground",
                              )}
                            >
                              <span>{group.label}</span>
                              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            </Accordion.Trigger>
                          </Accordion.Header>
                          <Accordion.Content className="px-2 pb-2">
                            <ul className="space-y-1">
                              {group.items.map((item) => {
                                const isActive = isActiveRoute(pathname, item.href)
                                return (
                                  <li key={item.label}>
                                    <Link
                                      href={item.href}
                                      aria-current={isActive ? "page" : undefined}
                                      className={clsx(
                                        "group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm font-semibold text-foreground transition hover:border-border hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                                        isActive && "border-primary/40 bg-primary/10",
                                      )}
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      <SolutionIcon icon={item.icon} className="h-7 w-7 rounded-lg" />
                                      <span className="flex-1">{item.label}</span>
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </Accordion.Content>
                        </Accordion.Item>
                      )
                    })}
                  </Accordion.Root>

                  <div className="mt-6 space-y-2">
                    {mobileNavLinks.map((item) => {
                      const isActive = isActiveRoute(pathname, item.href)
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={clsx(
                            "flex items-center justify-between rounded-2xl border border-border bg-card/60 px-4 py-3 text-base font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card/80 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                            isActive && "border-primary/60 bg-primary/10",
                          )}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                          <span className={clsx("text-muted-foreground", isActive && "text-primary")}>
                            <ChevronDown className="h-4 w-4 -rotate-90" />
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <div className="border-t border-border bg-background/80 px-4 py-4 backdrop-blur sm:px-6">
                  <div className="grid gap-3">
                    <Button asChild className="w-full" onClick={() => setMobileOpen(false)}>
                      <Link href="/contact">Contact</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Link href="/#products">View all service products</Link>
                    </Button>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
