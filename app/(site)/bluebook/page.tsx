import type { Metadata } from "next"
import Link from "next/link"
import { BLUEBOOK_CATEGORIES } from "@/lib/content/bluebook"

export const metadata: Metadata = {
  title: "Blue Book Series | Infobell IT Solutions",
  description:
    "Download Infobell IT Solutions Blue Book performance evaluations covering cloud instances, bare metal systems, AI-in-a-box solutions, and virtualization platforms.",
}

export default function BlueBookIndexPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Blue Book Series</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">
            Independent performance evaluations across cloud providers, AI infrastructure, and virtualization platforms
            to guide architecture decisions.
          </p>
        </header>

        <div className="mt-16 space-y-16">
          {BLUEBOOK_CATEGORIES.map((category) => (
            <section key={category.name}>
              <h2 className="text-2xl font-semibold text-foreground">{category.name}</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.reports.map((report) => (
                  <article key={report.slug} className="flex h-full flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-sm">
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {report.title}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-foreground">{report.subtitle}</h3>
                      {report.summary.length ? (
                        <p className="mt-3 text-sm text-muted-foreground">{report.summary[0]}</p>
                      ) : null}
                    </div>
                    <Link
                      href={`/bluebook/${report.slug}`}
                      className="mt-6 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                    >
                      View report
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
