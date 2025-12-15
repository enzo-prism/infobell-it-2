import Image from "next/image"

import type { TechStackItem } from "@/lib/content/home"
import { cn } from "@/lib/utils"

type TechStackGridProps = {
  items: TechStackItem[]
  className?: string
}

export function TechStackGrid({ items, className }: TechStackGridProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", className)}>
      {items.map((tech) => (
        <a
          key={tech.label}
          href={tech.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${tech.label}`}
          className="group flex min-h-20 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300/60 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:min-h-24 sm:p-5"
        >
          <div className="relative h-12 w-full max-w-[10rem] sm:h-14 sm:max-w-[12rem] md:h-16">
            <Image
              src={tech.logo}
              alt={`${tech.label} logo`}
              fill
              sizes="(max-width: 640px) 40vw, (max-width: 768px) 25vw, 12rem"
              className="object-contain grayscale transition duration-300 group-hover:grayscale-0 group-focus-visible:grayscale-0 group-active:grayscale-0"
            />
          </div>
        </a>
      ))}
    </div>
  )
}

