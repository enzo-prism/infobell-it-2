import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import type { ProductDetail } from "@/lib/content/products"
import { Button } from "@/components/ui/button"

export function ProductDetailCard({ product }: { product: ProductDetail }) {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Service Product</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">{product.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{product.description}</p>
            <div className="mt-6">
              <PrimaryCTA href={product.cta.href} external={product.cta.external}>
                {product.cta.label}
              </PrimaryCTA>
            </div>
          </div>
          <div className="card-glow flex w-full items-center justify-center rounded-3xl border border-border bg-muted p-4 sm:p-6">
            {product.heroGradient ? (
              <div className="relative h-72 w-full overflow-hidden rounded-2xl motion-safe:animate-float">
                <div className={clsx("absolute inset-0 bg-gradient-to-br", product.heroGradient)} />
                <div className="pointer-events-none absolute -right-10 top-6 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
                <div className="pointer-events-none absolute -left-8 bottom-0 h-48 w-48 rounded-full bg-sky-200/70 blur-2xl" />
                <div className="pointer-events-none absolute right-12 bottom-10 h-24 w-24 rounded-full border border-white/40 bg-white/10" />
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center space-y-4 text-center text-slate-800">
                  <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-600">{product.title}</p>
                  <p className="max-w-md text-lg font-medium leading-7 text-slate-800">{product.tagline}</p>
                </div>
              </div>
            ) : (
              <Image
                src={product.image}
                alt={product.title}
                width={640}
                height={400}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-auto w-full max-w-full object-contain transition-transform duration-500 ease-out"
              />
            )}
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-heading">What you'll get</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="rounded-2xl border border-border bg-card/80 p-4 text-sm leading-6 text-muted-foreground"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-primary/30 bg-primary/10 p-6 text-center sm:p-8">
          <h2 className="text-2xl font-semibold text-heading">Ready to explore {product.title}?</h2>
          <p className="mt-3 text-base text-foreground">
            Our product specialists can walk you through live demos, pricing, and integration options tailored to your teams.
          </p>
          <div className="mt-6">
            <PrimaryCTA href={product.cta.href} external={product.cta.external}>
              {product.cta.label}
            </PrimaryCTA>
          </div>
        </section>
      </div>
    </div>
  )
}

function PrimaryCTA({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <Button asChild size="lg">
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      </Button>
    )
  }
  return (
    <Button asChild size="lg">
      <Link href={href}>{children}</Link>
    </Button>
  )
}
