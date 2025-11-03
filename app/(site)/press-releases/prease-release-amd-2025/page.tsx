import type { Metadata } from "next"
import Link from "next/link"
import { PRESS_RELEASE_AMD } from "@/lib/content/press"

export const metadata: Metadata = {
  title: `${PRESS_RELEASE_AMD.title} | Infobell IT Solutions`,
  description: PRESS_RELEASE_AMD.subtitle,
}

export default function PressReleaseAmd2025Page() {
  const { title, subtitle, dateline, sections, contacts } = PRESS_RELEASE_AMD

  return (
    <div className="bg-background py-20">
      <article className="mx-auto w-full max-w-4xl px-4">
        <header className="text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Press Release</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground">{subtitle}</p>
          <p className="mt-4 text-sm font-medium text-foreground">{dateline}</p>
        </header>

        <div className="mt-12 space-y-8 text-sm leading-7 text-muted-foreground">
          {sections.map((section, index) => (
            <section key={index} className="space-y-4">
              {section.heading ? (
                <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
              ) : null}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <footer className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contacts</h2>
          <ul className="mt-3 space-y-1">
            {contacts.map((contact) => {
              const match = contact.match(/([\\w._%+-]+@[\\w.-]+)/i)
              const email = match ? match[1] : undefined
              return (
                <li key={contact}>
                  {email ? (
                    <Link href={`mailto:${email}`} className="text-primary transition hover:underline">
                      {contact}
                    </Link>
                  ) : (
                    contact
                  )}
                </li>
              )
            })}
          </ul>
        </footer>
      </article>
    </div>
  )
}
