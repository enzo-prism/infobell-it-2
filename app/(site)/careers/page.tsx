import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CAREERS_HERO, CAREER_ROLES, APPLY_EMAIL } from "@/lib/content/careers"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Careers | Infobell IT Solutions",
  description:
    "Join Infobell IT Solutions to build the future of enterprise AI, performance engineering, cloud-native development, and sustainable infrastructure.",
}

export default function CareersPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="mx-auto max-w-4xl text-center space-y-6">
          <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-border bg-muted">
            <Image
              src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1762617675/infobell-team_dimbqx.webp"
              alt="Infobell team collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{CAREERS_HERO.title}</h1>
            <p className="mt-4 text-lg leading-7 text-muted-foreground">{CAREERS_HERO.description}</p>
          </div>
        </header>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          {CAREER_ROLES.map((role) => (
            <article
              key={role.slug}
              className="flex h-full flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{role.location}</p>
                <h2 className="mt-2 text-xl font-semibold text-foreground">{role.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{role.summary}</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Button asChild size="sm">
                  <Link href={`/careers/${role.slug}`}>View details</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href={`mailto:${APPLY_EMAIL}?subject=Application: ${encodeURIComponent(role.title)}`}>
                    Apply now
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
