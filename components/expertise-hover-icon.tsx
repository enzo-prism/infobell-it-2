import type { ComponentType, CSSProperties } from "react"
import { Brain, Cloud, Cpu, Gauge, Leaf, ShieldCheck } from "@phosphor-icons/react"
import type { IconProps } from "@phosphor-icons/react"
import type { ExpertiseIcon } from "@/lib/content/capabilities"
import { cn } from "@/lib/utils"

const ICON_MAP: Record<ExpertiseIcon, ComponentType<IconProps>> = {
  brain: Brain,
  cpu: Cpu,
  leaf: Leaf,
  gauge: Gauge,
  cloud: Cloud,
  shield: ShieldCheck,
}

const ACCENT_MAP: Record<ExpertiseIcon, string> = {
  brain: "rgb(56 189 248)",
  gauge: "rgb(251 146 60)",
  cpu: "rgb(167 139 250)",
  cloud: "rgb(96 165 250)",
  shield: "rgb(56 189 248)",
  leaf: "rgb(163 230 53)",
}

export type ExpertiseHoverIconProps = {
  icon: ExpertiseIcon
  className?: string
}

export function ExpertiseHoverIcon({ icon, className }: ExpertiseHoverIconProps) {
  const Icon = ICON_MAP[icon]
  const accent = ACCENT_MAP[icon]

  return (
    <span
      className={cn("relative inline-flex h-full w-full", className)}
      style={{ "--expertise-accent": accent } as CSSProperties}
      aria-hidden="true"
    >
      <span className="pointer-events-none absolute inset-0 scale-75 rounded-full bg-[radial-gradient(circle_at_center,var(--expertise-accent)_0%,transparent_65%)] opacity-0 blur-lg transition duration-300 group-hover:opacity-100 group-hover:scale-110" />
      <Icon
        weight="fill"
        className="absolute inset-0 h-full w-full opacity-100 transition duration-300 ease-out group-hover:scale-95 group-hover:opacity-0"
      />
      <Icon
        weight="duotone"
        className="absolute inset-0 h-full w-full scale-95 text-[color:var(--expertise-accent)] opacity-0 transition duration-300 ease-out group-hover:scale-110 group-hover:opacity-100"
      />
    </span>
  )
}
