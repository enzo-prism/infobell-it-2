import type { Metadata } from "next"
import { AMD_PAGE } from "@/lib/content/ai"

export const metadata: Metadata = {
  title: `${AMD_PAGE.title} | Infobell IT Solutions`,
  description: AMD_PAGE.intro,
}

export default function AmdPage() {
  const { title, intro, spotlight, expertise, closing } = AMD_PAGE

  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{intro}</p>
        </header>

        {spotlight ? (
          <section className="mt-16 rounded-3xl border border-primary/40 bg-primary/10 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground">{spotlight.heading}</h2>
            {spotlight.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-4 text-sm leading-7 text-muted-foreground">
                {paragraph}
              </p>
            ))}
            {spotlight.bullets ? (
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {spotlight.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        <section className="mt-16 rounded-3xl border border-border bg-card/80 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-foreground">Our Expertise</h2>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {expertise.map((item) => (
              <li key={item} className="rounded-xl border border-border bg-background px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {closing ? <p className="mt-12 text-sm text-muted-foreground">{closing}</p> : null}
      </div>
    </div>
  )
}
