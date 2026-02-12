import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import { BLUEBOOK_CATEGORIES } from "@/lib/content/bluebook"
import type { BlueBookReport } from "@/lib/content/bluebook"
import { GetItNowDialog } from "@/components/get-it-now-dialog"

export const metadata: Metadata = withSeoMetadata({
  title: "Blue Book Performance Reports",
  description:
    "Explore Infobell IT Blue Book reports with independent benchmark insights across cloud, AI infrastructure, and virtualization platforms.",
  path: "/bluebook",
})

export default function BlueBookIndexPage() {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">Blue Book Series</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">
            Independent performance evaluations across cloud providers, AI infrastructure, and virtualization platforms
            to guide architecture decisions.
          </p>
        </header>

        <div className="mt-16 space-y-16">
          {BLUEBOOK_CATEGORIES.map((category) => (
            <section key={category.name}>
              <h2 className="text-2xl font-semibold text-heading">{category.name}</h2>
              <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {category.reports.map((report) => (
                  <BlueBookCard key={report.slug} report={report} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

type BlueBookCardProps = {
  report: BlueBookReport
}

function BlueBookCard({ report }: BlueBookCardProps) {
  const [leadParagraph, ...supportingParagraphs] = report.summary

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/95 p-6 shadow-sm ring-1 ring-border/40 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex-1 space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{report.legacyId}</p>
          <h3 className="text-xl font-semibold leading-tight text-heading">{report.subtitle}</h3>
        </div>
        {leadParagraph ? (
          <p className="text-sm leading-6 text-muted-foreground">{leadParagraph}</p>
        ) : null}
        {supportingParagraphs.length ? (
          <div className="space-y-3 rounded-2xl bg-background/60 p-4 ring-1 ring-border/60">
            {supportingParagraphs.map((paragraph, index) => (
              <div
                key={`${report.slug}-summary-${index}`}
                className="flex gap-3 text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-foreground"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                <p className="text-sm leading-6">{paragraph}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="relative mt-6 group/cta">
        <GetItNowDialog reportName={report.subtitle} buttonClassName="w-full transition-transform duration-300 group-hover/cta:scale-[1.01]" />
      </div>
    </article>
  )
}
