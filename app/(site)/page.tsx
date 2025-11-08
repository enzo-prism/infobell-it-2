import Link from "next/link"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Brain, Cloud, Cpu, Gauge, Leaf, ShieldCheck } from "lucide-react"
import { HERO_CONTENT, CORE_EXPERTISE, SERVICE_PRODUCTS, TECH_STACK, IFX_HIGHLIGHT } from "@/lib/content/home"
import { LEADERSHIP_TEAM, TEAM_INTRO } from "@/lib/content/team"
import { CLIENT_LOGOS, AFFILIATION_LOGOS } from "@/lib/content/company"

const expertiseIconMap: Record<(typeof CORE_EXPERTISE)[number]["icon"], LucideIcon> = {
  brain: Brain,
  cpu: Cpu,
  leaf: Leaf,
  gauge: Gauge,
  cloud: Cloud,
  shield: ShieldCheck,
}

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <CoreExpertiseSection />
      <IfxHighlight />
      <ProductSection />
      <TeamSection />
      <ClientsSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-background via-background to-muted/40">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-24 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Infobell IT Solutions
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {HERO_CONTENT.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{HERO_CONTENT.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium">
            <Link
              href={HERO_CONTENT.pressAnnouncement.href}
              className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              {HERO_CONTENT.pressAnnouncement.label}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-primary transition hover:bg-primary/5"
            >
              Connect with us
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-lg">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-primary/10" />
            <video
              src={HERO_CONTENT.video.src}
              title={HERO_CONTENT.video.title}
              controls
              preload="metadata"
              className="h-auto w-full rounded-2xl"
            />
            <p className="mt-3 text-sm text-muted-foreground">{HERO_CONTENT.video.caption}</p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-background to-background p-6 shadow-lg">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                Powered by AMD
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-foreground">
                  400+ Engineers
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-foreground">
                  50+ Data Scientists
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-foreground">
                  Global Delivery
                </span>
              </div>
              <h3 className="text-3xl font-semibold text-foreground">Building the Future of AI</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Infobell is a global product engineering and solutions company accelerating innovation across AI, cloud, and
                high-performance computing. Our full-stack squads deliver AI programs designed for speed, scale, and business
                impact.
              </p>
              <div className="rounded-2xl border border-border/60 bg-card/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">AMD + Infobell</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  From enterprise chatbots and co-pilots to agentic and physical AI systems, every Infobell innovation runs on
                  AMD MI-Series GPUs and EPYC CPUs. Proprietary tools like Echo Swift and Convo Genie push performance boundaries
                  for LLM optimization, inference acceleration, and real-time multimodal experiences.
                </p>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                We deliver end-to-end AI engineering — from use-case definition and PoCs to deployment, optimization, and
                go-to-market acceleration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CoreExpertiseSection() {
  return (
    <section id="expertise" className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Our Core Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Strategic engineering capabilities that unlock scalable AI, resilient infrastructure, and sustainable cloud
            modernization.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CORE_EXPERTISE.map((item) => {
            const Icon = expertiseIconMap[item.icon]
            const points = item.description
              .split(";")
              .map((point) => point.trim())
              .filter(Boolean)
              .map((point) => {
                const normalized = point.replace(/\.+$/, "")
                return normalized.charAt(0).toUpperCase() + normalized.slice(1)
              })
            return (
              <div
                key={item.title}
                className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent text-primary shadow-inner shadow-primary/20 ring-1 ring-primary/15">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Capability</p>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {points.map((point) => (
                      <li key={point} className="flex gap-3 rounded-xl border border-border/40 bg-card/60 p-3 text-left shadow-sm">
                        <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function IfxHighlight() {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-background to-primary/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-16 rounded-3xl md:flex-row md:items-center">
        <Image src={IFX_HIGHLIGHT.image} alt={IFX_HIGHLIGHT.title} width={200} height={120} className="h-32 w-auto" />
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">Introducing Infobell IFX</p>
          <h3 className="text-2xl font-semibold text-foreground">{IFX_HIGHLIGHT.title}</h3>
          <p className="max-w-3xl text-base text-muted-foreground">{IFX_HIGHLIGHT.description}</p>
          <Link
            href={IFX_HIGHLIGHT.href}
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductSection() {
  return (
    <section id="products" className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Our Service Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Productized accelerators for AI transformation, performance engineering, and sustainable cloud operations.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICE_PRODUCTS.map((product) => (
            <article
              key={product.title}
              className="flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl border border-border bg-muted">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{product.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.description}</p>
              {product.cta ? (
                <Link
                  href={product.cta.href}
                  target={product.cta.external ? "_blank" : undefined}
                  rel={product.cta.external ? "noreferrer" : undefined}
                  className="mt-4 inline-flex w-fit items-center rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
                >
                  {product.cta.label}
                </Link>
              ) : (
                <Link
                  href={`/contact?subject=${encodeURIComponent(product.title)}`}
                  className="mt-4 inline-flex w-fit items-center rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
                >
                  Contact us
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8">
          <h3 className="text-xl font-semibold text-foreground">Our Tech Stacks</h3>
          <p className="mt-2 text-sm text-muted-foreground">Modern tools for next-gen IT solutions</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.label}
                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card/90 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                tabIndex={0}
                aria-label={tech.label}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/40">
                  <Image
                    src={tech.logo}
                    alt={`${tech.label} logo`}
                    width={40}
                    height={40}
                    className="h-8 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0 group-focus-visible:grayscale-0 group-active:grayscale-0"
                  />
                </div>
                <span className="text-sm font-semibold text-foreground">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section id="team" className="bg-muted/20 py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card/80 p-8 shadow-sm lg:flex-row">
          <div className="lg:w-1/3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Leadership</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Meet the Team</h2>
            <p className="mt-4 text-base text-muted-foreground">{TEAM_INTRO}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/careers"
                className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Join our team
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Meet the leadership
              </Link>
            </div>
          </div>
          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            {LEADERSHIP_TEAM.map((member) => (
              <article
                key={member.name}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4 shadow-sm"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-border bg-muted">
                  <Image src={member.image} alt={member.name} fill sizes="80px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ClientsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Our Clients</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Trusted by global brands, performance leaders, and industry innovators.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.image}
              className="group flex h-20 items-center justify-center rounded-xl border border-border bg-card/60 p-4 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={logo.image}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-12 w-auto object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground">Our Affiliations</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {AFFILIATION_LOGOS.map((logo) => (
              <div
                key={logo.image}
                className="group flex h-20 w-44 items-center justify-center rounded-lg border border-border bg-card/80 p-3 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="h-full w-auto object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
