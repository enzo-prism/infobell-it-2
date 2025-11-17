import type { Metadata } from "next"
import Link from "next/link"
import { LEADERSHIP_TEAM, TEAM_INTRO } from "@/lib/content/team"
import { LeadershipCard } from "@/components/leadership-card"

export const metadata: Metadata = {
  title: "Our Team | Infobell IT Solutions",
  description:
    "Meet the leadership team guiding Infobell IT Solutions across AI, performance engineering, cloud-native development, and sustainability initiatives.",
}

const COMPANY_LINKEDIN = "https://www.linkedin.com/company/infobell-it/"

export default function TeamPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Our Leadership</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{TEAM_INTRO}</p>
        </header>

        <section className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP_TEAM.map((member, index) => (
            <LeadershipCard
              key={member.slug}
              member={member}
              index={index}
              linkedInHref={getLinkedIn(member)}
            />
          ))}
        </section>

        <section className="mt-20">
          <div className="card-glow flex flex-col gap-6 rounded-3xl border border-border bg-gradient-to-tr from-primary/10 via-background to-background p-8 shadow-lg md:flex-row md:items-center">
            <div className="flex-1 space-y-3 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Careers</p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Build the next era of enterprise engineering with us.
              </h2>
              <p className="text-base text-muted-foreground">
                We are hiring across AI, performance, cloud, and sustainability programs. Join a global team that blends
                deep technical expertise with collaborative, human-centered leadership.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Explore open roles
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-6 py-2.5 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function getLinkedIn(member: (typeof LEADERSHIP_TEAM)[number]) {
  return (
    member.socials?.find((social) => social.label.toLowerCase().includes("linkedin"))?.href ??
    COMPANY_LINKEDIN
  )
}
