import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-safe:transform-gpu",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md active:translate-y-0 active:shadow-sm",
        outline:
          "border border-primary/40 bg-background text-primary shadow-sm hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:shadow-md active:translate-y-0 active:shadow-sm",
        neutral:
          "border border-border bg-background text-foreground shadow-sm hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-md active:translate-y-0 active:shadow-sm",
        cta:
          "group relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-sky-500 text-primary-foreground shadow-lg hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-18px_rgba(14,165,233,0.9)] active:translate-y-0 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-white/10 before:opacity-0 before:transition before:duration-300 hover:before:opacity-100",
        ghost: "text-foreground hover:bg-muted",
        icon:
          "rounded-md border border-border bg-background text-foreground shadow-sm hover:border-primary/50 hover:text-primary",
      },
      size: {
        sm: "px-4 py-2",
        md: "px-5 py-2.5",
        lg: "px-6 py-3",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"
