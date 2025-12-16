import Link from "next/link"
import { Linkedin } from "lucide-react"
import {
  FOOTER_LINKS,
  SOCIAL_LINKS,
  NAV_PRIMARY,
  type NavGroup,
  type NavItem,
  CORPORATE_OFFICE,
} from "@/lib/content/site"
import { Button } from "@/components/ui/button"

function isGroup(entry: NavItem | NavGroup): entry is NavGroup {
  return (entry as NavGroup).items !== undefined
}

function getGroupItems(label: string) {
  const entry = NAV_PRIMARY.find((navItem) => isGroup(navItem) && navItem.label === label)
  return entry && isGroup(entry) ? entry.items : []
}

const solutionsItems = getGroupItems("Solutions")
const productItems = getGroupItems("Products")
const companyItems = getGroupItems("Company")
const companyLinks = [
  ...companyItems,
  ...FOOTER_LINKS.filter((item) => !companyItems.some((companyItem) => companyItem.href === item.href)),
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/95">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-border/60 bg-gradient-to-br from-muted/40 via-background to-muted/30 p-6 text-center shadow-[0_35px_90px_-45px_rgba(14,165,233,0.7)] md:flex-row md:items-center md:text-left sm:p-8">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Infobell IT Solutions</p>
            <h2 className="text-3xl font-semibold text-heading">Let’s build today’s and tomorrow’s IT. Together.</h2>
            <p className="text-sm text-muted-foreground">
              From benchmarking labs to intelligent products, our teams partner with you across AI, performance
              engineering, and modern infrastructure programs.
            </p>
          </div>
          <Button asChild>
            <Link href="/contact">Contact the Team</Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-10 text-sm text-muted-foreground md:grid-cols-2 lg:grid-cols-[1.1fr,1fr,1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Headquarters</p>
            <p className="font-semibold text-heading">{CORPORATE_OFFICE.heading}</p>
            <p>{CORPORATE_OFFICE.addressLine}</p>
            <Link href={`mailto:${CORPORATE_OFFICE.email}`} className="text-primary transition hover:underline">
              {CORPORATE_OFFICE.email}
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start">
              {SOCIAL_LINKS.map((link) => {
                const isLinkedIn = link.label.toLowerCase().includes("linkedin")

                return (
                  <Button key={link.href} asChild size="sm">
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={isLinkedIn ? "Connect on Linkedin" : link.label}
                    >
                      {isLinkedIn ? (
                        <>
                          <Linkedin className="h-4 w-4" />
                          Connect on Linkedin
                        </>
                      ) : (
                        link.label
                      )}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Solutions</p>
            <ul className="mt-4 space-y-3">
              {solutionsItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Products</p>
            <ul className="mt-4 space-y-3">
              {productItems.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Company</p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2025 Infobell IT Solutions Pvt. Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy" className="transition hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
