import type { Metadata } from "next"
import Link from "next/link"
import { AI_HERO, AI_PARTNERS, AI_SERVICE_SECTIONS } from "@/lib/content/ai"
import { IFX_HIGHLIGHT } from "@/lib/content/home"

export const metadata: Metadata = {
  title: "Artificial Intelligence Solutions | Infobell IT Solutions",
  description: AI_HERO.description,
}

export default function AiOverviewPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{AI_HERO.title}</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{AI_HERO.description}</p>
        </header>

        <section className="mt-16 rounded-3xl border border-border bg-card/80 p-10 shadow-sm">
          <div className="flex flex-col gap-6 text-left md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Featured Platform</p>
              <h2 className="text-3xl font-semibold text-foreground">{IFX_HIGHLIGHT.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{IFX_HIGHLIGHT.description}</p>
            </div>
            <Link
              href={IFX_HIGHLIGHT.href}
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Explore IFX
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-foreground">Strategic Accelerator Partnerships</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {AI_PARTNERS.map((partner) => (
              <article key={partner.name} className="rounded-2xl border border-border bg-card/80 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground">{partner.name}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{partner.description}</p>
                <Link
                  href={partner.href}
                  className="mt-6 inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          {AI_SERVICE_SECTIONS.map((section) => (
            <article key={section.heading} className="rounded-3xl border border-border bg-muted/20 p-8">
              <h3 className="text-2xl font-semibold text-foreground">{section.heading}</h3>
              {section.description ? (
                <p className="mt-3 text-sm text-muted-foreground">{section.description}</p>
              ) : null}
              {section.bullets ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
