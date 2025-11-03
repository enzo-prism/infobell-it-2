import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { BLUEBOOK_CATEGORIES } from "@/lib/content/bluebook"
import { APPLY_EMAIL } from "@/lib/content/careers"

const ALL_REPORTS = BLUEBOOK_CATEGORIES.flatMap((category) => category.reports)

type BluebookPageProps = {
  params: { slug: string }
}

export async function generateMetadata({ params }: BluebookPageProps): Promise<Metadata> {
  const report = ALL_REPORTS.find((item) => item.slug === params.slug)
  if (!report) {
    return {}
  }
  return {
    title: `${report.subtitle} | Infobell IT Solutions Blue Book`,
    description: report.summary[0] ?? report.subtitle,
  }
}

export default async function BluebookReportPage({ params }: BluebookPageProps) {
  const report = ALL_REPORTS.find((item) => item.slug === params.slug)
  if (!report) {
    notFound()
  }

  return (
    <div className="bg-background py-20">
      <article className="mx-auto w-full max-w-4xl px-4">
        <header className="text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">{report.title}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {report.subtitle}
          </h1>
        </header>

        <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
          {report.summary.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-primary/30 bg-primary/10 p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground">Need the detailed dataset or methodology?</h2>
          <p className="mt-3 text-sm text-foreground">
            Reference: {report.legacyId}. Contact our performance engineering team for the full report.
          </p>
          <Link
            href={`mailto:${APPLY_EMAIL}?subject=Blue Book Report Request: ${encodeURIComponent(report.subtitle)}`}
            className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Request full report
          </Link>
        </section>
      </article>
    </div>
  )
}
