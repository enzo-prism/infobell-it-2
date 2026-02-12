import type { Metadata } from "next"
import { withSeoMetadata } from "@/lib/metadata/seo"
import Link from "next/link"

import { HERO_CONTENT } from "@/lib/content/home"
import { PRESS_RELEASE_AMD } from "@/lib/content/press"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = withSeoMetadata({
  title: "About Infobell IT Solutions",
  description:
    "Learn about Infobell IT's mission, leadership, and engineering expertise across AI, high-performance computing, and modernization.",
  path: "/company",
})

export default function CompanyPage() {
  const aboutInfobell = PRESS_RELEASE_AMD.sections.find((section) => section.heading === "About Infobell IT")
  const aboutParagraphs = aboutInfobell?.paragraphs ?? []

  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Company</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">About Us</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{HERO_CONTENT.description}</p>
        </header>

        {aboutParagraphs.length ? (
          <section className="mx-auto mt-16 max-w-4xl space-y-4 text-sm leading-7 text-muted-foreground">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={`about-paragraph-${index}`}>{paragraph}</p>
            ))}
          </section>
        ) : null}

        <section className="mt-14 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/team">Leadership Team</Link>
          </Button>
          <Button asChild variant="neutral">
            <Link href="/careers">Careers</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/press-releases">Press Releases</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}

