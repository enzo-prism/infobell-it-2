import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { BLUEBOOK_CATEGORIES } from "@/lib/content/bluebook"
import { APPLY_EMAIL } from "@/lib/content/careers"
import { Button } from "@/components/ui/button"

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
    <div className="bg-background py-16 sm:py-20">
      <article className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">{report.title}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            {report.subtitle}
          </h1>
        </header>

        <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
          {report.summary.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-primary/30 bg-primary/10 p-6 text-center sm:p-8">
          <h2 className="text-xl font-semibold text-heading">Need the detailed dataset or methodology?</h2>
          <p className="mt-3 text-sm text-foreground">
            Reference: {report.legacyId}. Contact our performance engineering team for the full report.
          </p>
          <Button asChild className="mt-6" size="lg">
            <Link href={`mailto:${APPLY_EMAIL}?subject=Blue Book Report Request: ${encodeURIComponent(report.subtitle)}`}>
              Request full report
            </Link>
          </Button>
        </section>
      </article>
    </div>
  )
}
