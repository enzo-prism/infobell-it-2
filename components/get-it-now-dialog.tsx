"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"
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

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button size="sm" className={buttonClassName}>
          {buttonLabel}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 shadow-2xl focus:outline-none">
          <Dialog.Title className="text-2xl font-semibold text-foreground">Get it now</Dialog.Title>
          <Dialog.Description className="mt-1 text-sm text-muted-foreground">
            Request the full report for <span className="font-medium text-primary">{reportName}</span>
          </Dialog.Description>
          <form className="mt-6 grid gap-4">
            <FormField label="What's your name?" placeholder="Enter your full name" type="text" />
            <FormField label="Job Title" placeholder="Enter your Job Title" type="text" />
            <FormField label="Company" placeholder="Enter your Company" type="text" />
            <FormField label="Email address" placeholder="email@example.com" type="email" />
            <FormField label="Phone Number" placeholder="+91 1234 5678 90" type="tel" />
            <FormField label="Country" placeholder="Enter your Country" type="text" />
            <div className="mt-2 flex justify-end gap-2">
              <Button
                type="button"
                onClick={() => setOpen(false)}
                size="sm"
                variant="neutral"
              >
                Cancel
              </Button>
              <Button type="submit" size="sm">
                Submit request
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function FormField({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  return (
    <label htmlFor={id} className="block text-sm font-medium text-foreground">
      {label}
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      />
    </label>
  )
}
