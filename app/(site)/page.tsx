import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import { HERO_CONTENT, SERVICE_PRODUCTS, TECH_STACK, IFX_HIGHLIGHT } from "@/lib/content/home"
import { LEADERSHIP_TEAM, TEAM_INTRO } from "@/lib/content/team"
import { CLIENT_LOGOS, AFFILIATION_LOGOS } from "@/lib/content/company"
import type { LogoEntry } from "@/lib/content/company"
import { CoreExpertiseCarousel } from "@/components/core-expertise-carousel"
import { ServiceProductsSlider } from "@/components/service-products-slider"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Infobell IT Solutions | Enterprise AI & Performance Engineering",
  description:
    "Infobell IT Solutions partners with global innovators to deliver AI, HPC, and cloud-native programs through benchmarking, IFX accelerators, and expert engineering teams.",
}

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <EnterpriseAiMediaSection />
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
      <div className="mx-auto w-full max-w-6xl px-4 py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {HERO_CONTENT.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{HERO_CONTENT.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium">
            <Button asChild variant="cta">
              <Link href={HERO_CONTENT.pressAnnouncement.href}>
                <span className="relative inline-flex items-center gap-1">
                  {HERO_CONTENT.pressAnnouncement.label}
                  <span aria-hidden="true" className="translate-x-0 text-base transition group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="group">
              <Link href="/contact">
                <span className="inline-flex items-center gap-1">
                  Connect with us
                  <span aria-hidden="true" className="translate-x-0 text-base transition group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Service Products</p>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground">
            Explore our product accelerators for AI transformation, performance engineering, and sustainable cloud operations.
          </p>
          <ServiceProductsSlider />
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button asChild variant="outline">
              <a href="#products">View all service products</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function EnterpriseAiMediaSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-start">
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
            <h2 className="text-3xl font-semibold text-foreground">Building the Future of Enterprise AI</h2>
            <p className="text-sm font-semibold text-foreground">Deep AI ML Experts | Global Delivery</p>
            <p className="text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">Infobell</span> is a premier global product engineering and
              solutions firm accelerating innovation across AI, cloud, and high-performance computing. As a specialized
              Enterprise AI implementer, our full-stack squads deliver high-impact AI programs designed for speed, scale, and
              business value. We do not just build AI; we optimize it for the AI stack and infrastructure hardware that best
              fits your needs.
            </p>
            <div className="rounded-2xl border border-border/60 bg-card/60 p-4">
              <p className="text-sm font-semibold text-foreground">Multi-Architecture Expertise: NVIDIA, AMD, and Intel</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                We deliver agnostic, end-to-end engineering—from use-case definition and PoCs to deployment and
                optimization—leveraging the distinct strengths of the industry’s leading accelerators:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">NVIDIA:</span> As an NVIDIA Inception Partner, we leverage the
                  full NVIDIA stack, including <span className="font-semibold text-foreground">NVIDIA NIM microservices</span>{" "}
                  and <span className="font-semibold text-foreground">TensorRT-LLM</span>, to deliver high-throughput,
                  low-latency inference and scalable AI applications.
                </li>
                <li>
                  <span className="font-semibold text-foreground">AMD:</span> We drive enterprise-ready innovation on{" "}
                  <span className="font-semibold text-foreground">AMD Instinct™ MI-Series GPUs and EPYC™ CPUs</span>, utilizing
                  the <span className="font-semibold text-foreground">ROCm™</span> open software stack and{" "}
                  <span className="font-semibold text-foreground">AMD’s new Enterprise AI Suite</span> and{" "}
                  <span className="font-semibold text-foreground">Infobell’s IFX (Inference Framework eXpress)</span> to push
                  performance boundaries.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Intel:</span> We enable comprehensive, scalable solutions on
                  Intel platforms, supporting <span className="font-semibold text-foreground">OPEA (Open Platform for Enterprise AI)</span>{" "}
                  and Confidential Computing to ensure security and performance for critical workloads.
                </li>
              </ul>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">High-value Innovation -</span> Our AI framework use-case-based
              accelerators—including <span className="font-semibold text-foreground">ConvoGene™</span> for chatbots,{" "}
              <span className="font-semibold text-foreground">EchoSwift™</span> for LLM benchmarking, and{" "}
              <span className="font-semibold text-foreground">AgenticFlow</span> for autonomous AI agents—are architected to run
              seamlessly across these ecosystems, ensuring you get the best performance regardless of your infrastructure
              choice.
            </p>
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
          <Button asChild size="sm">
            <Link href={IFX_HIGHLIGHT.href}>Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProductSection() {
  return (
    <section id="products" className="scroll-mt-24 bg-background md:scroll-mt-28">
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
            <Button asChild>
              <Link href="/careers">Join our team</Link>
            </Button>
            <Button asChild variant="neutral">
              <Link href="/team">Meet the leadership</Link>
            </Button>
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
