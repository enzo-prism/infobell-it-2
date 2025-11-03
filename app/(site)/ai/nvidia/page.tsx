import type { Metadata } from "next"
import { NVIDIA_PAGE } from "@/lib/content/ai"

export const metadata: Metadata = {
  title: `${NVIDIA_PAGE.title} | Infobell IT Solutions`,
  description: NVIDIA_PAGE.intro,
}

export default function NvidiaPage() {
  const { title, intro, expertise, offerings, sections, closing } = NVIDIA_PAGE

  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-5xl px-4">
        <header className="text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{intro}</p>
        </header>

        <section className="mt-16 rounded-3xl border border-border bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Our Expertise</h2>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {expertise.map((item) => (
              <li key={item} className="rounded-xl border border-border bg-background px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {offerings?.map((offering) => (
          <section key={offering.heading} className="mt-12 rounded-3xl border border-border bg-muted/20 p-8">
            <h2 className="text-2xl font-semibold text-foreground">{offering.heading}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {offering.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        {sections?.map((section) => (
          <section key={section.heading} className="mt-12 rounded-3xl border border-border bg-card/70 p-8">
            <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </section>
        ))}

        {closing ? <p className="mt-12 text-sm text-muted-foreground">{closing}</p> : null}
      </div>
    </div>
  )
}
