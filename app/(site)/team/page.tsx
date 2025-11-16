import type { Metadata } from "next"
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
