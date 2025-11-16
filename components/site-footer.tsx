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

function isGroup(entry: NavItem | NavGroup): entry is NavGroup {
  return (entry as NavGroup).items !== undefined
}

const solutionsGroup = NAV_PRIMARY.find((entry) => isGroup(entry) && entry.label === "Solutions")
const productGroup = NAV_PRIMARY.find((entry) => isGroup(entry) && entry.label === "Products")
const companyLinks = NAV_PRIMARY.filter(
  (entry): entry is NavItem => !isGroup(entry) && entry.label !== "Home"
)

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/95">
      <div className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-6 rounded-3xl border border-border/60 bg-gradient-to-br from-muted/40 via-background to-muted/30 p-8 text-center shadow-[0_35px_90px_-45px_rgba(14,165,233,0.7)] md:flex-row md:text-left">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Infobell IT Solutions</p>
            <h2 className="text-3xl font-semibold text-foreground">Let’s build today’s and tomorrow’s IT. Together.</h2>
            <p className="text-sm text-muted-foreground">
              From benchmarking labs to intelligent products, our teams partner with you across AI, performance
              engineering, and modern infrastructure programs.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Connect with us
          </Link>
        </div>

        <div className="mt-12 grid gap-10 text-sm text-muted-foreground md:grid-cols-2 lg:grid-cols-[1.1fr,1fr,1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Headquarters</p>
            <p className="font-semibold text-foreground">{CORPORATE_OFFICE.heading}</p>
            <p>{CORPORATE_OFFICE.addressLine}</p>
            <Link href={`mailto:${CORPORATE_OFFICE.email}`} className="text-primary transition hover:underline">
              {CORPORATE_OFFICE.email}
            </Link>
            <div className="flex items-center gap-4 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition hover:border-primary hover:text-primary"
                >
                  {link.label.toLowerCase().includes("linkedin") ? <Linkedin className="h-4 w-4" /> : link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Solutions</p>
            <ul className="mt-4 space-y-3">
              {isGroup(solutionsGroup)
                ? solutionsGroup.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="transition hover:text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Products</p>
            <ul className="mt-4 space-y-3">
              {isGroup(productGroup)
                ? productGroup.items.slice(0, 6).map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="transition hover:text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))
                : null}
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
              {FOOTER_LINKS.map((item) => (
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
