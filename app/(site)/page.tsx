import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import { HERO_CONTENT, SERVICE_PRODUCTS, TECH_STACK, IFX_HIGHLIGHT } from "@/lib/content/home"
import { LEADERSHIP_TEAM, TEAM_INTRO } from "@/lib/content/team"
import { CLIENT_LOGOS, AFFILIATION_LOGOS } from "@/lib/content/company"
import type { LogoEntry } from "@/lib/content/company"
import { CoreExpertiseCarousel } from "@/components/core-expertise-carousel"

export const metadata: Metadata = {
  title: "Infobell IT Solutions | Enterprise AI & Performance Engineering",
  description:
    "Infobell IT Solutions partners with global innovators to deliver AI, HPC, and cloud-native programs through benchmarking, IFX accelerators, and expert engineering teams.",
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
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {HERO_CONTENT.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{HERO_CONTENT.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium">
            <Link
              href={HERO_CONTENT.pressAnnouncement.href}
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-primary via-primary/90 to-sky-500 px-5 py-2.5 text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-18px_rgba(14,165,233,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/70"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="relative inline-flex items-center gap-1">
                {HERO_CONTENT.pressAnnouncement.label}
                <span aria-hidden="true" className="translate-x-0 text-base transition group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group relative inline-flex items-center rounded-full border border-transparent bg-gradient-to-r from-primary/70 to-sky-400/70 p-[1px] text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50"
            >
              <span className="inline-flex w-full items-center gap-1 rounded-full bg-background/90 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:bg-primary/5 group-hover:text-primary/90 group-hover:shadow-[inset_0_0_0_1px_rgba(14,165,233,0.4)]">
                Connect with us
                <span aria-hidden="true" className="translate-x-0 text-base transition group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-lg motion-safe:animate-float">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-primary/10" />
            <video
              src={HERO_CONTENT.video.src}
              title={HERO_CONTENT.video.title}
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-background to-background p-6 shadow-lg">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                Powered by AMD
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-foreground motion-safe:animate-slide-up"
                  style={{ animationDelay: "100ms" }}
                >
                  400+ Engineers
                </span>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-foreground motion-safe:animate-slide-up"
                  style={{ animationDelay: "200ms" }}
                >
                  50+ Data Scientists
                </span>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-foreground motion-safe:animate-slide-up"
                  style={{ animationDelay: "300ms" }}
                >
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
        <CoreExpertiseCarousel />
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
            <Link
              key={product.title}
              href={`/${product.slug}`}
              className="card-glow group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-2xl"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl border border-border bg-muted transition-all duration-500 ease-out group-hover:shadow-xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{product.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.description}</p>
              <span className="mt-4 inline-flex w-fit items-center text-sm font-semibold text-primary underline-offset-4 transition-all duration-300 group-hover:translate-x-1 group-hover:underline">
                Learn more
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8">
          <h3 className="text-xl font-semibold text-foreground">Our Tech Stacks</h3>
          <p className="mt-2 text-sm text-muted-foreground">Modern tools for next-gen IT solutions</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TECH_STACK.map((tech) => (
              <a
                key={tech.label}
                href={tech.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card/90 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-label={`Visit ${tech.label}`}
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section id="team" className="bg-muted/20 py-16">
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="rounded-3xl border border-border bg-card/80 p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Leadership</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Meet the Team</h2>
          <p className="mt-4 text-base text-muted-foreground">{TEAM_INTRO}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
            <LogoTile
              key={logo.image}
              logo={logo}
              className="card-glow flex h-20 items-center justify-center rounded-xl border border-border bg-card/60 p-4 transition hover:-translate-y-1 hover:shadow-lg"
              baseWidth={120}
              baseHeight={60}
              heightRem={3}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground">Our Affiliations</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {AFFILIATION_LOGOS.map((logo) => (
              <LogoTile
                key={logo.image}
                logo={logo}
                className="card-glow flex h-20 w-44 items-center justify-center rounded-lg border border-border bg-card/80 p-3 transition hover:-translate-y-1 hover:shadow-lg"
                baseWidth={160}
                baseHeight={80}
                heightRem={5}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type LogoTileProps = {
  logo: LogoEntry
  className: string
  baseWidth: number
  baseHeight: number
  heightRem: number
}

function LogoTile({ logo, className, baseWidth, baseHeight, heightRem }: LogoTileProps) {
  const multiplier = logo.multiplier ?? 1
  const sharedClasses = clsx(
    "group overflow-hidden",
    className,
    logo.href
      ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
      : "cursor-default"
  )

  const image = (
    <Image
      src={logo.image}
      alt={logo.alt}
      width={baseWidth * multiplier}
      height={baseHeight * multiplier}
      className="w-auto object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
      style={{ height: `${heightRem * multiplier}rem` }}
    />
  )

  if (logo.href) {
    return (
      <a href={logo.href} target="_blank" rel="noreferrer" aria-label={`Visit ${logo.alt}`} className={sharedClasses}>
        {image}
      </a>
    )
  }

  return (
    <div className={sharedClasses} role="img" aria-label={logo.alt}>
      {image}
    </div>
  )
}
