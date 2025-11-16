"use client"

import { useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import type { TeamMember } from "@/lib/content/team"

type LeadershipCardProps = {
  member: TeamMember
  linkedInHref: string
  index: number
}

export function LeadershipCard({ member, linkedInHref, index }: LeadershipCardProps) {
  const openLinkedIn = useCallback(() => {
    window.open(linkedInHref, "_blank", "noopener,noreferrer")
  }, [linkedInHref])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        openLinkedIn()
      }
    },
    [openLinkedIn]
  )

  return (
    <article
      role="link"
      tabIndex={0}
      aria-label={`Open LinkedIn profile for ${member.name}`}
      className="card-glow group flex flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_20px_45px_-18px_rgba(56,189,248,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 motion-safe:animate-slide-up"
      style={{ animationDelay: `${index * 120}ms` }}
      onClick={openLinkedIn}
      onKeyDown={handleKeyDown}
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
          <Link
            href={linkedInHref}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="card-glow inline-flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 group-hover:border-sky-300 group-hover:shadow-[0_15px_30px_-15px_rgba(56,189,248,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70"
          >
            <Linkedin className="h-4 w-4" />
            Connect on LinkedIn
          </Link>
        </div>
      </div>
    </article>
  )
}
