import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { AI_HERO, AI_PARTNERS, AI_SERVICE_SECTIONS } from "@/lib/content/ai"
import { IFX_HIGHLIGHT } from "@/lib/content/home"
import { HeroVideoFrame } from "@/components/hero-video-frame"

export const metadata: Metadata = {
  title: "Artificial Intelligence Solutions | Infobell IT Solutions",
  description: AI_HERO.description,
}

export default function AiOverviewPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.75rem] border border-border/60 px-8 py-14 text-center shadow-[0_50px_120px_-40px_rgba(14,165,233,0.8)]">
          <div className="pointer-events-none absolute inset-0 z-0 animate-gradient bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.35),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_50%_120%,rgba(147,51,234,0.2),transparent_50%)] opacity-90" />
          <div className="relative z-10">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{AI_HERO.title}</h1>
            <p className="mt-6 text-lg leading-7 text-muted-foreground">{AI_HERO.description}</p>
          </div>
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
                <div className="mb-6">
                  <Image src={partner.logo} alt={`${partner.name} logo`} width={180} height={72} className="h-auto w-40" />
                </div>
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

        <section className="mt-16 rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Get Started</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">
                Interested in AI engineering or performance benchmarking?
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                From lab design to launch readiness, Infobell keeps your workloads fast, predictable, and auditable.
              </p>
              <Link
                href="/contact?subject=AI%20Solutions"
                className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Connect with performance engineering
              </Link>
            </div>
            <HeroVideoFrame className="mx-auto w-full max-w-sm" />
          </div>
        </section>
      </div>
    </div>
  )
}
