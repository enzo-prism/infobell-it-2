import type { Metadata } from "next"
import Image from "next/image"
import { CLIENT_LOGOS, AFFILIATION_LOGOS } from "@/lib/content/company"
import { TECH_STACK } from "@/lib/content/home"
import { AutoHighlightLogoGrid } from "@/components/auto-highlight-logo-grid"
import { TechStackGrid } from "@/components/tech-stack-grid"

export const metadata: Metadata = {
  title: "Our Clients | Infobell IT Solutions",
  description:
    "Infobell IT Solutions collaborates with global enterprises, technology partners, and industry consortia to deliver high-performance AI, cloud, and sustainability outcomes.",
}

export default function ClientsPage() {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">Our Clients</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">
            We collaborate with global leaders, innovators, and infrastructure partners to benchmark performance,
            accelerate AI adoption, and modernize mission-critical workloads.
          </p>
        </header>

        <section className="mt-16">
          <AutoHighlightLogoGrid
            logos={CLIENT_LOGOS}
            containerClassName="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5"
            cardClassName="flex h-24 items-center justify-center overflow-hidden rounded-xl border border-border bg-card/60 p-4 transition hover:-translate-y-1 hover:shadow-lg"
            baseWidth={150}
            baseHeight={80}
            heightRem={3}
          />
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-semibold text-heading">Our Affiliations</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Strategic alliances that support responsible AI, confidential computing, and open performance engineering.
          </p>
          <AutoHighlightLogoGrid
            logos={AFFILIATION_LOGOS}
            containerClassName="mt-8 flex flex-wrap items-center justify-center gap-6"
            cardClassName="flex h-24 w-48 items-center justify-center overflow-hidden rounded-lg border border-border bg-card/80 p-4 transition hover:-translate-y-1 hover:shadow-lg"
            baseWidth={160}
            baseHeight={80}
            heightRem={4}
            intervalMs={3500}
          />
        </section>

        <section className="mt-20 rounded-3xl border border-border bg-muted/20 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-heading">Our Tech Stacks</h2>
          <p className="mt-2 text-sm text-muted-foreground">Modern tools for next-gen IT solutions</p>
          <TechStackGrid items={TECH_STACK} className="mt-6" />
        </section>
      </div>
    </div>
  )
}
