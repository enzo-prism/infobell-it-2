import type { Metadata } from "next"
import Link from "next/link"
import { CAREERS_HERO, CAREER_ROLES, APPLY_EMAIL } from "@/lib/content/careers"

export const metadata: Metadata = {
  title: "Careers | Infobell IT Solutions",
  description:
    "Join Infobell IT Solutions to build the future of enterprise AI, performance engineering, cloud-native development, and sustainable infrastructure.",
}

export default function CareersPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{CAREERS_HERO.title}</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{CAREERS_HERO.description}</p>
        </header>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          {CAREER_ROLES.map((role) => (
            <article
              key={role.slug}
              className="flex h-full flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Bengaluru, India</p>
                <h2 className="mt-2 text-xl font-semibold text-foreground">{role.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{role.summary}</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href={`/careers/${role.slug}`}
                  className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  View details
                </Link>
                <Link
                  href={`mailto:${APPLY_EMAIL}?subject=Application: ${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
                >
                  Apply now
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
