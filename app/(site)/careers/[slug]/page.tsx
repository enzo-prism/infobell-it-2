import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CAREER_ROLES, APPLY_EMAIL } from "@/lib/content/careers"
import { Button } from "@/components/ui/button"

type CareerPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return CAREER_ROLES.map((role) => ({ slug: role.slug }))
}

export async function generateMetadata({ params }: CareerPageProps): Promise<Metadata> {
  const { slug } = await Promise.resolve(params)
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
  const { slug } = await Promise.resolve(params)
  const role = CAREER_ROLES.find((item) => item.slug === slug)

  if (!role) {
    notFound()
  }

  const relatedRoles = CAREER_ROLES.filter((item) => item.slug !== role.slug).slice(0, 2)

  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{role.location}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">{role.title}</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{role.summary}</p>
          <Button asChild className="mt-6">
            <Link href={`mailto:${APPLY_EMAIL}?subject=Application: ${encodeURIComponent(role.title)}`}>Apply today</Link>
          </Button>
        </header>

        <section className="mt-16 grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-heading">Job Responsibilities / Skill-Set</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/5 to-background p-6 text-center shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-heading">Apply today</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Email us your resume and a short note about this role. Make sure to mention{" "}
              <span className="font-semibold text-foreground">{role.title}</span> in the subject line so our hiring team
              can fast-track your application.
            </p>
            <Button asChild className="mt-6">
              <Link href={`mailto:${APPLY_EMAIL}?subject=Application: ${encodeURIComponent(role.title)}`}>
                Email {APPLY_EMAIL}
              </Link>
            </Button>
          </aside>
        </section>

        <section className="mt-16 rounded-3xl border border-border bg-muted/20 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-heading">Related Jobs</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {relatedRoles.map((related) => (
              <article key={related.slug} className="rounded-2xl border border-border bg-card/70 p-6">
                <h4 className="text-lg font-semibold text-heading">{related.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{related.summary}</p>
                <Button asChild className="mt-4" size="sm" variant="outline">
                  <Link href={`/careers/${related.slug}`}>View role</Link>
                </Button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
