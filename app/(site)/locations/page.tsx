import type { Metadata } from "next"
import Image from "next/image"
import { CORPORATE_LOCATIONS } from "@/lib/content/company"
import { GLOBAL_PRESENCE } from "@/lib/content/site"

export const metadata: Metadata = {
  title: "Our Locations | Infobell IT Solutions",
  description:
    "Infobell IT Solutions operates globally with headquarters in Bengaluru and teams supporting customers across North America, Europe, and the Middle East.",
}

export default function LocationsPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-4xl px-4">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Our Locations</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">
            Infobell IT Solutions partners with enterprises worldwide. Explore our headquarters and regional presence.
          </p>
        </header>

        <section className="mt-16 space-y-10">
          {CORPORATE_LOCATIONS.map((location) => (
            <article key={location.title} className="rounded-2xl border border-border bg-card/70 p-8 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">{location.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground whitespace-pre-line">
                    {location.description}
                  </p>
                  <p className="mt-2 text-sm font-medium text-primary">{location.contact}</p>
                </div>
                <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-muted">
                  <Image
                    src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1762617079/infobellitbuilding_eawzmk.webp"
                    alt="Infobell corporate headquarters exterior"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-border bg-muted/20 p-8">
          <h2 className="text-2xl font-semibold text-foreground">Global Presence</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Our engineering and delivery teams collaborate with clients across key technology hubs.
          </p>
          <ul className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-foreground">
            {GLOBAL_PRESENCE.map((region) => (
              <li key={region} className="rounded-full border border-border bg-card px-4 py-2">
                {region}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
