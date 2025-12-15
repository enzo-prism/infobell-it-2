"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { useEffect, useState } from "react"
import { APPLY_EMAIL } from "@/lib/content/careers"
import { Button } from "@/components/ui/button"

export type GetItNowDialogProps = {
  reportName: string
  buttonLabel?: string
  buttonClassName?: string
}

export function GetItNowDialog({
  reportName,
  buttonLabel = "Get it now",
  buttonClassName,
}: GetItNowDialogProps) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) {
      setSubmitted(false)
    }
  }, [open])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "")
    const jobTitle = String(formData.get("jobTitle") ?? "")
    const company = String(formData.get("company") ?? "")
    const email = String(formData.get("email") ?? "")
    const phone = String(formData.get("phone") ?? "")
    const country = String(formData.get("country") ?? "")

    const subject = `Blue Book Report Request: ${reportName}`
    const bodyLines = [
      `Report: ${reportName}`,
      "",
      `Name: ${name}`,
      `Job Title: ${jobTitle}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Country: ${country}`,
    ]

    const mailtoUrl = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join(
      "\n",
    ))}`

    window.location.href = mailtoUrl
    setSubmitted(true)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button size="sm" className={buttonClassName}>
          {buttonLabel}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-2xl focus:outline-none sm:p-8">
          <Dialog.Title className="text-2xl font-semibold text-heading">Get it now</Dialog.Title>
          <Dialog.Description className="mt-1 text-sm text-muted-foreground">
            Request the full report for <span className="font-medium text-primary">{reportName}</span>
          </Dialog.Description>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <FormField
              name="name"
              label="What's your name?"
              placeholder="Enter your full name"
              type="text"
              required
            />
            <FormField name="jobTitle" label="Job title" placeholder="Enter your job title" type="text" />
            <FormField name="company" label="Company" placeholder="Enter your company" type="text" />
            <FormField name="email" label="Email address" placeholder="email@example.com" type="email" required />
            <FormField name="phone" label="Phone number" placeholder="+91 1234 5678 90" type="tel" />
            <FormField name="country" label="Country" placeholder="Enter your country" type="text" />

            <div className="mt-2 flex justify-end gap-2">
              <Button type="button" onClick={() => setOpen(false)} size="sm" variant="neutral">
                Cancel
              </Button>
              <Button type="submit" size="sm">
                Submit request
              </Button>
            </div>
          </form>

          {submitted ? (
            <p className="mt-4 text-sm text-primary">
              Opening your email client… if it did not open, email us directly at{" "}
              <a href={`mailto:${APPLY_EMAIL}`} className="underline">
                {APPLY_EMAIL}
              </a>
              .
            </p>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function FormField({
  name,
  label,
  placeholder,
  type,
  required,
}: {
  name: string
  label: string
  placeholder: string
  type: string
  required?: boolean
}) {
  const id = `get-it-now-${name}`
  return (
    <label htmlFor={id} className="block text-sm font-medium text-foreground">
      {label}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      />
    </label>
  )
}
