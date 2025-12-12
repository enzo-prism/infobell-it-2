import type { Metadata } from "next"
import { INTEL_PAGE } from "@/lib/content/ai"

export const metadata: Metadata = {
  title: `${INTEL_PAGE.title} | Infobell IT Solutions`,
  description: INTEL_PAGE.intro,
}

export default function IntelPage() {
  const { title, intro, expertise, closing } = INTEL_PAGE

  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{intro}</p>
        </header>

        <section className="mt-16 rounded-3xl border border-border bg-card/80 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-heading">Our Expertise</h2>
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
