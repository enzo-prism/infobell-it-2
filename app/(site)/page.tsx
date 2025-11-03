import Link from "next/link"
import Image from "next/image"
import { HERO_CONTENT, CORE_EXPERTISE, SERVICE_PRODUCTS, TECH_STACK, IFX_HIGHLIGHT } from "@/lib/content/home"
import { LEADERSHIP_TEAM, TEAM_INTRO } from "@/lib/content/team"
import { CLIENT_LOGOS, AFFILIATION_LOGOS } from "@/lib/content/company"

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
          {CORE_EXPERTISE.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
          ))}
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
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-muted-foreground"
              >
                {tech}
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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Meet the Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">{TEAM_INTRO}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP_TEAM.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center rounded-2xl border border-border bg-card/80 p-6 text-center shadow-sm"
            >
              <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.title}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/careers"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Join our team
          </Link>
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
              className="flex h-20 items-center justify-center rounded-xl border border-border bg-card/60 p-4"
            >
              <Image src={logo.image} alt={logo.alt} width={120} height={60} className="h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground">Our Affiliations</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {AFFILIATION_LOGOS.map((logo) => (
              <div
                key={logo.image}
                className="flex h-20 w-44 items-center justify-center rounded-lg border border-border bg-card/80 p-3"
              >
                <Image src={logo.image} alt={logo.alt} width={160} height={80} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
