import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-safe:transform-gpu",
  {
    variants: {
      variant: {
        primary:
          "border border-transparent bg-[color:var(--brand)] text-white shadow-[0_10px_25px_-20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-hover)] active:translate-y-0 active:bg-[color:var(--brand-active)]",
        outline:
          "border border-[color:var(--brand)]/55 bg-[color:var(--surface)] text-[color:var(--brand)] shadow-sm hover:-translate-y-0.5 hover:bg-[color:var(--brand)] hover:text-white active:translate-y-0 active:bg-[color:var(--brand-active)]",
        neutral:
          "border border-[color:var(--border)] bg-[color:var(--surface-2)] text-[color:var(--text)] shadow-sm hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] active:translate-y-0",
        cta: "border border-transparent bg-[color:var(--brand)] text-white shadow-[0_10px_25px_-20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-hover)] active:translate-y-0 active:bg-[color:var(--brand-active)]",
        ghost:
          "border border-transparent bg-transparent text-[color:var(--text)] hover:-translate-y-0.5 hover:bg-[color:var(--surface)] active:translate-y-0",
        icon: "h-11 w-11 p-0 border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text)] shadow-sm hover:-translate-y-0.5 hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)] active:translate-y-0",
      },
      size: {
        sm: "h-10 px-6 text-sm",
        md: "h-11 px-8 text-sm",
        lg: "h-12 px-10 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
  },
)
Button.displayName = "Button"
