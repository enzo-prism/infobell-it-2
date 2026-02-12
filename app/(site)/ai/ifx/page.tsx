import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import Image from "next/image"
import Link from "next/link"
import {
  IFX_SECTIONS,
  IFX_SERVICE_KITS,
  IFX_ADDITIONAL_KITS,
  IFX_CTA,
} from "@/lib/content/ai"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = withSeoMetadata({
  title: "Inference Framework eXpress (IFX)",
  description:
    "IFX is Infobell IT's open inference framework for enterprise LLM workloads, built for high throughput, observability, and scalable deployment.",
  path: "/ai/ifx",
})

const IFX_DIAGRAM_SRC =
  "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1762614447/ifx-diagram_gflz6d.webp"

export default function IfxPage() {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            Infobell IT Inference Framework eXpress (IFX)
          </h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">
            High-performance open inference platform engineered for enterprise AI deployments on AMD Instinct GPUs and
            EPYC CPUs.
          </p>
        </header>

        <div className="mt-16 space-y-10">
          {IFX_SECTIONS.map((section) => (
            <section key={section.heading} className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-heading">{section.heading}</h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="mt-4 text-sm leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {section.heading === "Why IFX?" ? (
                <figure className="mt-6 rounded-2xl border border-border bg-muted/30 p-3">
                  <Image
                    src={IFX_DIAGRAM_SRC}
                    alt="Diagram showing the modular IFX inference stack"
                    width={1920}
                    height={1080}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    className="h-auto w-full rounded-xl"
                  />
                  <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                    IFX architecture overview spanning orchestration, runtime, and observability layers.
                  </figcaption>
                </figure>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-heading">IFX-Powered Enterprise AI Service Kits</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {IFX_SERVICE_KITS.map((kit) => (
              <article key={kit.title} className="rounded-2xl border border-border bg-muted/30 p-6">
                <h3 className="text-xl font-semibold text-heading">{kit.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{kit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-heading">Other Service Kits: AI and Cloud Intelligence</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {IFX_ADDITIONAL_KITS.map((kit) => (
              <article key={kit.title} className="rounded-2xl border border-border bg-card/70 p-6">
                <h3 className="text-xl font-semibold text-heading">{kit.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{kit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-primary/30 bg-primary/10 p-6 text-center sm:p-8">
          {IFX_CTA.map((paragraph, index) => (
            <p key={index} className="mt-4 text-base text-foreground">
              {paragraph}
            </p>
          ))}
          <Button asChild className="mt-6" size="lg">
            <Link href="mailto:info@infobellit.com">Schedule a demo</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
