import type { Metadata } from "next"
import Image from "next/image"
import { CLIENT_LOGOS, AFFILIATION_LOGOS } from "@/lib/content/company"
import { TECH_STACK } from "@/lib/content/home"

export const metadata: Metadata = {
  title: "Our Clients | Infobell IT Solutions",
  description:
    "Infobell IT Solutions collaborates with global enterprises, technology partners, and industry consortia to deliver high-performance AI, cloud, and sustainability outcomes.",
}

export default function ClientsPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Our Clients</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">
            We collaborate with global leaders, innovators, and infrastructure partners to benchmark performance,
            accelerate AI adoption, and modernize mission-critical workloads.
          </p>
        </header>

        <section className="mt-16">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.image}
                className="flex h-24 items-center justify-center rounded-xl border border-border bg-card/60 p-4"
              >
                <Image src={logo.image} alt={logo.alt} width={150} height={80} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-semibold text-foreground">Our Affiliations</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Strategic alliances that support responsible AI, confidential computing, and open performance engineering.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {AFFILIATION_LOGOS.map((logo) => (
              <div
                key={logo.image}
                className="flex h-24 w-48 items-center justify-center rounded-lg border border-border bg-card/80 p-4"
              >
                <Image src={logo.image} alt={logo.alt} width={160} height={80} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-border bg-muted/20 p-8">
          <h2 className="text-2xl font-semibold text-foreground">Our Tech Stacks</h2>
          <p className="mt-2 text-sm text-muted-foreground">Modern tools for next-gen IT solutions</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-muted-foreground"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
