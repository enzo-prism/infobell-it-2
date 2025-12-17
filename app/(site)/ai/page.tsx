import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { AI_HERO, AI_PARTNERS, AI_SERVICE_SECTIONS } from "@/lib/content/ai"
import { CAPABILITY_SUMMARIES } from "@/lib/content/capabilities"
import { IFX_HIGHLIGHT } from "@/lib/content/home"
import { AiServicesTabs } from "@/components/ai/ai-services-tabs"
import { HeroVideoFrame } from "@/components/hero-video-frame"
import { SolutionHeroIcon } from "@/components/solution-hero-icon"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Artificial Intelligence Solutions | Infobell IT Solutions",
  description: AI_HERO.description,
}

export default function AiOverviewPage() {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/60 px-6 py-10 text-center shadow-[0_50px_120px_-40px_rgba(14,165,233,0.8)] sm:rounded-[2.75rem] sm:px-8 sm:py-14">
          <div className="pointer-events-none absolute inset-0 z-0 animate-gradient bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.35),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_50%_120%,rgba(147,51,234,0.2),transparent_50%)] opacity-90" />
          <div className="relative z-10">
            <SolutionHeroIcon icon={CAPABILITY_SUMMARIES.ai.icon} size="lg" className="mx-auto mb-6" />
            <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">{AI_HERO.title}</h1>
            <p className="mt-6 text-lg leading-7 text-muted-foreground">{AI_HERO.description}</p>
          </div>
        </header>

        <section className="mt-16 rounded-3xl border border-border bg-card/80 p-6 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 text-left md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Featured Platform</p>
              <h2 className="text-3xl font-semibold text-heading">{IFX_HIGHLIGHT.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{IFX_HIGHLIGHT.description}</p>
            </div>
            <Button asChild>
              <Link href={IFX_HIGHLIGHT.href}>Explore IFX</Link>
            </Button>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-heading">Strategic Accelerator Partnerships</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {AI_PARTNERS.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="card-glow group flex flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300/70 hover:bg-card hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none sm:p-8"
              >
                <div className="mb-6 flex h-20 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted/30 px-4 transition-colors duration-300 group-hover:border-sky-300/50 group-hover:bg-muted/20 motion-reduce:transition-none">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={240}
                    height={96}
                    className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <h3 className="text-xl font-semibold text-heading">{partner.name}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{partner.description}</p>
                <Button asChild className="mt-6 w-fit pointer-events-none" variant="outline" size="sm">
                  <span>Learn more</span>
                </Button>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-heading">How we deliver</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Explore focused service tracks—each designed to move from prototype to production with benchmark-ready confidence.
            </p>
          </div>
          <AiServicesTabs sections={AI_SERVICE_SECTIONS} />
        </section>

        <section className="mt-16 rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Get Started</p>
              <h2 className="mt-4 text-3xl font-semibold text-heading">
                Interested in AI engineering or performance benchmarking?
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                From lab design to launch readiness, Infobell keeps your workloads fast, predictable, and auditable.
              </p>
              <Button asChild className="mt-6" size="lg">
                <Link href="/contact?subject=AI%20Solutions">Connect with performance engineering</Link>
              </Button>
            </div>
            <HeroVideoFrame className="mx-auto w-full max-w-sm" />
          </div>
        </section>
      </div>
    </div>
  )
}
