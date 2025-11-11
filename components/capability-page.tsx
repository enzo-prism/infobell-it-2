import Link from "next/link"
import type { CapabilityDetail } from "@/lib/content/capabilities"

export function CapabilityPage({ capability }: { capability: CapabilityDetail }) {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header
          className={`rounded-3xl border border-border bg-gradient-to-br ${capability.heroBackground} p-8 shadow-sm`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Center of Excellence</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {capability.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{capability.heroTagline}</p>
          <p className="mt-4 text-base text-muted-foreground">{capability.summary}</p>
        </header>

        <section className="mt-12 space-y-4 text-sm leading-7 text-muted-foreground">
          {capability.overview.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <section className="mt-12 space-y-8">
          {capability.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl border border-border/40 bg-card/70 p-3">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground">Use Cases & Featured Work</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {capability.useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-2xl border border-border bg-muted/20 p-5 text-sm leading-6 text-muted-foreground"
              >
                {useCase}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-primary/30 bg-primary/10 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">{capability.cta.heading}</h2>
          <p className="mt-3 text-base text-foreground">{capability.cta.body}</p>
          <Link
            href={`/contact?subject=${encodeURIComponent(capability.title)}`}
            className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            {capability.cta.action}
          </Link>
        </section>
      </div>
    </div>
  )
}
