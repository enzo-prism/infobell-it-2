import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CAREER_ROLES, APPLY_EMAIL } from "@/lib/content/careers"

type CareerPageProps = {
  params: { slug: string }
}

export async function generateMetadata({ params }: CareerPageProps): Promise<Metadata> {
  const { slug } = params
  const role = CAREER_ROLES.find((item) => item.slug === slug)

  if (!role) {
    return {}
  }

  return {
    title: `${role.title} | Careers at Infobell IT Solutions`,
    description: role.summary,
  }
}

export default async function CareerDetailPage({ params }: CareerPageProps) {
  const { slug } = params
  const role = CAREER_ROLES.find((item) => item.slug === slug)

  if (!role) {
    notFound()
  }

  const relatedRoles = CAREER_ROLES.filter((item) => item.slug !== role.slug).slice(0, 2)

  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-4xl px-4">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{role.title}</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{role.summary}</p>
          <Link
            href={`mailto:${APPLY_EMAIL}?subject=Application: ${encodeURIComponent(role.title)}`}
            className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Apply today
          </Link>
        </header>

        <section className="mt-16 rounded-3xl border border-border bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Job Responsibilities / Skill-Set</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {role.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-3xl border border-border bg-muted/20 p-8">
          <h3 className="text-xl font-semibold text-foreground">Related Jobs</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {relatedRoles.map((related) => (
              <article key={related.slug} className="rounded-2xl border border-border bg-card/70 p-6">
                <h4 className="text-lg font-semibold text-foreground">{related.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{related.summary}</p>
                <Link
                  href={`/careers/${related.slug}`}
                  className="mt-4 inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
                >
                  View role
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
