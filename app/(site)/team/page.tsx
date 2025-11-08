import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Aperture,
  Building2,
  Check,
  Cloud,
  Cpu,
  GraduationCap,
  Handshake,
  Layers,
  Linkedin,
  Lock,
  MapPin,
  Network,
  Rocket,
  Sparkles,
  Star,
  Target,
  Workflow,
  Compass,
} from "lucide-react"
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
            <Link
              key={member.slug}
              href={`#${member.slug}`}
              className="group flex flex-col items-center rounded-3xl border border-border bg-card/80 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border bg-muted">
                <Image src={member.image} alt={member.name} fill sizes="160px" className="object-cover" />
              </div>
              <h2 className="mt-8 text-xl font-semibold text-foreground">{member.name}</h2>
              <p className="text-sm text-muted-foreground">{member.title}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                View profile
                <svg
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-20 space-y-12">
          {LEADERSHIP_TEAM.map((member) => (
            <article
              key={member.slug}
              id={member.slug}
              className="scroll-mt-24 rounded-3xl border border-border bg-card/70 p-6 shadow-sm lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr]">
                <div className="rounded-3xl border border-border bg-card/80 p-6 text-center shadow-sm">
                  <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border border-border bg-muted sm:h-56 sm:w-56">
                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 1024px) 60vw, 280px" className="object-cover" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                  {member.location ? (
                    <p className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{member.location}</span>
                    </p>
                  ) : null}
                  {member.socials?.length ? (
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                      {member.socials.map((social) => (
                        <Link
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        >
                          <Linkedin className="h-4 w-4" />
                          {social.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">{member.summary}</p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {member.focusAreas.map((focus) => (
                      <span
                        key={focus.label}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {(() => {
                          switch (focus.icon) {
                            case "cpu":
                              return <Cpu className="h-3.5 w-3.5" />
                            case "cloud":
                              return <Cloud className="h-3.5 w-3.5" />
                            case "lock":
                              return <Lock className="h-3.5 w-3.5" />
                            case "aperture":
                              return <Aperture className="h-3.5 w-3.5" />
                            case "compass":
                              return <Compass className="h-3.5 w-3.5" />
                            case "network":
                              return <Network className="h-3.5 w-3.5" />
                            case "layers":
                              return <Layers className="h-3.5 w-3.5" />
                            case "handshake":
                              return <Handshake className="h-3.5 w-3.5" />
                            case "target":
                              return <Target className="h-3.5 w-3.5" />
                            case "rocket":
                              return <Rocket className="h-3.5 w-3.5" />
                            default:
                              return <Star className="h-3.5 w-3.5" />
                          }
                        })()}
                        {focus.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="rounded-3xl border border-border bg-background/60 p-6">
                    <h4 className="text-lg font-semibold text-foreground">Profile</h4>
                    <div className="mt-3 space-y-4 text-sm leading-7 text-muted-foreground">
                      {member.bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-card/80 p-5">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <h5 className="text-base font-semibold text-foreground">Areas of Focus</h5>
                      </div>
                      <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                        {member.focusAreas.map((focus) => {
                          let Icon = Star
                          switch (focus.icon) {
                            case "cpu":
                              Icon = Cpu
                              break
                            case "cloud":
                              Icon = Cloud
                              break
                            case "lock":
                              Icon = Lock
                              break
                            case "aperture":
                              Icon = Aperture
                              break
                            case "compass":
                              Icon = Compass
                              break
                            case "network":
                              Icon = Network
                              break
                            case "layers":
                              Icon = Layers
                              break
                            case "handshake":
                              Icon = Handshake
                              break
                            case "target":
                              Icon = Target
                              break
                            case "rocket":
                              Icon = Rocket
                              break
                          }
                          return (
                            <li key={focus.label} className="flex items-start gap-2">
                              <Icon className="mt-0.5 h-4 w-4 flex-none text-primary" />
                              <span>{focus.label}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-border bg-card/80 p-5">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <h5 className="text-base font-semibold text-foreground">Career Highlights</h5>
                      </div>
                      <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                        {member.highlights.map((highlight) => (
                          <li key={highlight.description} className="flex gap-3">
                            {(() => {
                              switch (highlight.icon) {
                                case "target":
                                  return <Target className="mt-0.5 h-4 w-4 flex-none text-primary" />
                                case "rocket":
                                  return <Rocket className="mt-0.5 h-4 w-4 flex-none text-primary" />
                                case "workflow":
                                  return <Workflow className="mt-0.5 h-4 w-4 flex-none text-primary" />
                                case "building":
                                  return <Building2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                                default:
                                  return <Star className="mt-0.5 h-4 w-4 flex-none text-primary" />
                              }
                            })()}
                            <span>{highlight.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {member.education?.length ? (
                    <div className="rounded-2xl border border-border bg-card/80 p-5">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <h5 className="text-base font-semibold text-foreground">Education</h5>
                      </div>
                      <ul className="mt-3 space-y-4 text-sm text-muted-foreground">
                        {member.education.map((edu) => (
                          <li
                            key={`${edu.institution}-${edu.program}`}
                            className="rounded-xl border border-border/60 bg-background/50 p-4"
                          >
                            <p className="text-sm font-semibold text-foreground">{edu.institution}</p>
                            <p className="text-xs text-muted-foreground">{edu.program}</p>
                            {edu.timeframe ? <p className="mt-1 text-xs text-muted-foreground">{edu.timeframe}</p> : null}
                            {edu.details?.length ? (
                              <ul className="mt-2 space-y-2 text-xs leading-5 text-muted-foreground">
                                {edu.details.map((detail) => (
                                  <li key={detail} className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary/60" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
