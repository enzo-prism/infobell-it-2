import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import Image from "next/image"
import { CLIENT_LOGOS, AFFILIATION_LOGOS } from "@/lib/content/company"
import { TECH_STACK } from "@/lib/content/home"
import { AutoHighlightLogoGrid } from "@/components/auto-highlight-logo-grid"
import { TechStackGrid } from "@/components/tech-stack-grid"

export const metadata: Metadata = withSeoMetadata({
  title: "Global Client Success Stories",
  description:
    "See how global enterprises partner with Infobell IT to deliver AI, cloud, and performance programs with measurable outcomes and long-term impact.",
  path: "/clients",
})

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
            containerClassName="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-6 lg:gap-6"
            cardClassName="flex w-full aspect-[1000/667] items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-md motion-reduce:transition-none"
            logoFrameClassName="h-full w-full"
            autoHighlight={false}
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 18vw"
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
            cardClassName="card-glow flex h-20 w-44 items-center justify-center overflow-hidden rounded-lg border border-slate-200/80 bg-white transition hover:-translate-y-1 hover:shadow-lg sm:h-24 sm:w-48"
            logoFrameClassName="h-10 w-full"
            autoHighlight={false}
            sizes="(max-width: 640px) 50vw, 12rem"
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
