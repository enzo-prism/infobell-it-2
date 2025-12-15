import type { Metadata } from "next"
import Link from "next/link"

import { PRESS_RELEASES } from "@/lib/content/press"

export const metadata: Metadata = {
  title: "Press Releases | Infobell IT Solutions",
  description: "Company announcements and press releases from Infobell IT Solutions.",
}

export default function PressReleasesPage() {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Company</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">Press Releases</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">
            News and updates from Infobell IT Solutions, including partnership announcements and product milestones.
          </p>
        </header>

        <section className="mt-16 grid gap-6">
          {PRESS_RELEASES.map((release) => (
            <Link
              key={release.slug}
              href={`/press-releases/${release.slug}`}
              className="card-glow group flex flex-col gap-6 rounded-3xl border border-border bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Press Release</p>
                <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">{release.title}</h2>
                <p className="text-base leading-7 text-muted-foreground">{release.subtitle}</p>
              </div>
              <span className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:translate-x-1">
                <span className="underline-offset-4 group-hover:underline">Read more</span>
                <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

