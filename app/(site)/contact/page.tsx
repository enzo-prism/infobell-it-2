import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { CORPORATE_OFFICE } from "@/lib/content/site"
import { CONTACT_COPY, CONTACT_FIELDS } from "@/lib/content/contact"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Infobell IT Solutions",
  description:
    "Speak with Infobell IT Solutions about enterprise AI, performance engineering, cloud-native development, and sustainability initiatives.",
}

export default function ContactPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{CONTACT_COPY.title}</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{CONTACT_COPY.intro}</p>
        </header>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <Suspense fallback={<div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm">Loading…</div>}>
            <ContactForm fields={CONTACT_FIELDS} />
          </Suspense>
          <aside className="space-y-10 rounded-3xl border border-border bg-muted/30 p-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground">Our Office</h2>
              <p className="mt-3 text-sm text-muted-foreground">{CONTACT_COPY.officeDescription}</p>
              <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-3">
                <Image
                  src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1762617079/infobellitbuilding_eawzmk.webp"
                  alt="Infobell headquarters exterior"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-6 space-y-3 text-sm leading-6 text-foreground">
                <p className="font-medium">{CORPORATE_OFFICE.heading}</p>
                <p>{CORPORATE_OFFICE.addressLine}</p>
                <Link href={`mailto:${CORPORATE_OFFICE.email}`} className="text-primary transition hover:underline">
                  {CORPORATE_OFFICE.email}
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-6">
              <h3 className="text-xl font-semibold text-foreground">{CONTACT_COPY.banner}</h3>
              <Link
                href={CONTACT_COPY.bannerCta.href}
                className="mt-6 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                {CONTACT_COPY.bannerCta.label}
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
