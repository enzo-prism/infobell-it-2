"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import type { ContactField } from "@/lib/content/contact"
import { APPLY_EMAIL } from "@/lib/content/careers"
import { Button } from "@/components/ui/button"

type ContactFormProps = {
  fields: ContactField[]
}

export function ContactForm({ fields }: ContactFormProps) {
  const searchParams = useSearchParams()
  const preselectedSubject = searchParams.get("subject")
  const [submitted, setSubmitted] = useState(false)

  const initialValues = useMemo(
    () =>
      fields.reduce<Record<string, string>>((acc, field) => {
        acc[field.name] = field.name === "subject" && preselectedSubject ? preselectedSubject : ""
        return acc
      }, {}),
    [fields, preselectedSubject],
  )

  const [formData, setFormData] = useState(initialValues)

  useEffect(() => {
    setFormData(initialValues)
  }, [initialValues])

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { name, email, phone = "", subject, description } = formData

    const mailSubject = subject ? `[Infobell Inquiry] ${subject}` : "Infobell Inquiry"
    const bodyLines = [
      `Name: ${name ?? ""}`,
      `Email: ${email ?? ""}`,
      `Phone: ${phone ?? ""}`,
      "",
      "Message:",
      description ?? "",
    ]

    const mailtoUrl = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(bodyLines.join(
      "\n",
    ))}`

    window.location.href = mailtoUrl
    setSubmitted(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm sm:p-8"
      aria-describedby={submitted ? "contact-success" : undefined}
    >
      <h2 className="text-2xl font-semibold text-foreground">Send us a message</h2>
      <div className="mt-8 space-y-6">
        {fields.map((field) => {
          const value = formData[field.name] ?? ""
          const commonProps = {
            id: field.name,
            name: field.name,
            value,
            required: field.required,
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
              handleChange(field.name, event.target.value),
            className:
              "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          }

          if (field.type === "textarea") {
            return (
              <div key={field.name}>
                <label htmlFor={field.name} className="text-sm font-medium text-foreground">
                  {field.label}
                </label>
                <textarea {...commonProps} rows={6} placeholder="Tell us about your project or requirements" />
              </div>
            )
          }

          return (
            <div key={field.name}>
              <label htmlFor={field.name} className="text-sm font-medium text-foreground">
                {field.label}
              </label>
              <input
                {...commonProps}
                type={field.type}
                placeholder={field.label}
                aria-required={field.required}
              />
            </div>
          )
        })}
      </div>
      <Button type="submit" size="lg" className="mt-8">
        Send message
      </Button>
      {submitted ? (
        <p id="contact-success" className="mt-4 text-sm text-primary">
          Opening your email client… if it did not open, email us directly at{" "}
          <a href={`mailto:${APPLY_EMAIL}`} className="underline">
            {APPLY_EMAIL}
          </a>
          .
        </p>
      ) : null}
    </form>
  )
}
