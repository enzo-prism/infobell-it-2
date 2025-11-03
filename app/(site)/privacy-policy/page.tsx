import type { Metadata } from "next"
import { PRIVACY_SECTIONS } from "@/lib/content/privacy"

export const metadata: Metadata = {
  title: "Privacy Policy | Infobell IT Solutions",
  description:
    "Learn how Infobell IT Solutions collects, uses, and safeguards personal information across its digital experiences and services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-full max-w-4xl px-4">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            We are committed to protecting personally identifiable information and ensuring transparent practices
            around data collection, usage, and retention.
          </p>
        </header>

        <div className="mt-16 space-y-12">
          {PRIVACY_SECTIONS.map((section) => (
            <section key={section.heading} className="rounded-3xl border border-border bg-card/70 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-sm leading-6 text-muted-foreground">
                {section.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.tail
                  ? section.tail.map((paragraph, index) => <p key={`tail-${index}`}>{paragraph}</p>)
                  : null}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
