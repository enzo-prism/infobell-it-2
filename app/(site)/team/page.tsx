import Image from "next/image"
import type { Metadata } from "next"
import { LEADERSHIP_TEAM, TEAM_INTRO } from "@/lib/content/team"

export const metadata: Metadata = {
  title: "Our Team | Infobell IT Solutions",
  description:
    "Meet the leadership team guiding Infobell IT Solutions across AI, performance engineering, cloud-native development, and sustainability initiatives.",
}

export default function TeamPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Our Leadership</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{TEAM_INTRO}</p>
        </header>
        <section className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP_TEAM.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center rounded-3xl border border-border bg-card/80 p-8 text-center shadow-sm"
            >
              <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border bg-muted">
                <Image src={member.image} alt={member.name} fill sizes="160px" className="object-cover" />
              </div>
              <h2 className="mt-8 text-xl font-semibold text-foreground">{member.name}</h2>
              <p className="text-sm text-muted-foreground">{member.title}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
