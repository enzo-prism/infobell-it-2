import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--navy)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-safe:transform-gpu",
  {
    variants: {
      variant: {
        primary:
          "border border-[color:rgba(10,31,68,0.18)] bg-white text-[color:var(--navy)] shadow-[0_10px_25px_-20px_rgba(10,31,68,0.45)] hover:-translate-y-0.5 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-white hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.92),0_18px_45px_-30px_rgba(10,31,68,0.85)] active:translate-y-0 active:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75),0_10px_25px_-20px_rgba(10,31,68,0.7)]",
        outline:
          "border border-[color:rgba(10,31,68,0.18)] bg-white text-[color:var(--navy)] shadow-[0_10px_25px_-20px_rgba(10,31,68,0.45)] hover:-translate-y-0.5 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-white hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.92),0_18px_45px_-30px_rgba(10,31,68,0.85)] active:translate-y-0 active:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75),0_10px_25px_-20px_rgba(10,31,68,0.7)]",
        neutral:
          "border border-[color:rgba(10,31,68,0.18)] bg-white text-[color:var(--navy)] shadow-[0_10px_25px_-20px_rgba(10,31,68,0.45)] hover:-translate-y-0.5 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-white hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.92),0_18px_45px_-30px_rgba(10,31,68,0.85)] active:translate-y-0 active:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75),0_10px_25px_-20px_rgba(10,31,68,0.7)]",
        cta:
          "border border-[color:rgba(10,31,68,0.18)] bg-white text-[color:var(--navy)] shadow-[0_10px_25px_-20px_rgba(10,31,68,0.45)] hover:-translate-y-0.5 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-white hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.92),0_18px_45px_-30px_rgba(10,31,68,0.85)] active:translate-y-0 active:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75),0_10px_25px_-20px_rgba(10,31,68,0.7)]",
        ghost:
          "border border-[color:rgba(10,31,68,0.18)] bg-white text-[color:var(--navy)] shadow-[0_10px_25px_-20px_rgba(10,31,68,0.45)] hover:-translate-y-0.5 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-white hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.92),0_18px_45px_-30px_rgba(10,31,68,0.85)] active:translate-y-0 active:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75),0_10px_25px_-20px_rgba(10,31,68,0.7)]",
        icon:
          "border border-[color:rgba(10,31,68,0.18)] bg-white text-[color:var(--navy)] shadow-sm hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-white hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.92),0_14px_35px_-26px_rgba(10,31,68,0.8)] active:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75),0_10px_25px_-22px_rgba(10,31,68,0.65)]",
      },
      size: {
        sm: "h-10 px-6 text-sm",
        md: "h-11 px-8 text-sm",
        lg: "h-12 px-10 text-base",
        icon: "h-11 w-14 p-0",
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
