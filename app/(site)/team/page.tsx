import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Linkedin } from "lucide-react"
import { LEADERSHIP_TEAM, TEAM_INTRO } from "@/lib/content/team"

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
            <article
              key={member.slug}
              className="flex flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary/40"
            >
              <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-muted aspect-[4/5]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 28%" }}
                  priority={index === 0}
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">{member.name}</h2>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{member.summary}</p>
                <div className="mt-6">
                  <ConnectButton href={getLinkedIn(member)} />
                </div>
              </div>
            </article>
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

function ConnectButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <Linkedin className="h-4 w-4" />
      Connect on LinkedIn
    </Link>
  )
}
