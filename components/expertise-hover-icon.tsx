import { useId, type ComponentType, type CSSProperties } from "react"
import { Brain, Cloud, Cpu, Gauge, Leaf, ShieldCheck } from "@phosphor-icons/react/dist/ssr"
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

const HOVER_PALETTE_MAP: Record<ExpertiseIcon, { glow: string; stops: [string, string, string] }> = {
  brain: {
    glow: "rgb(56 189 248)",
    stops: ["rgb(56 189 248)", "rgb(167 139 250)", "rgb(232 121 249)"],
  },
  cpu: {
    glow: "rgb(167 139 250)",
    stops: ["rgb(167 139 250)", "rgb(99 102 241)", "rgb(34 211 238)"],
  },
  leaf: {
    glow: "rgb(163 230 53)",
    stops: ["rgb(163 230 53)", "rgb(52 211 153)", "rgb(45 212 191)"],
  },
  gauge: {
    glow: "rgb(251 146 60)",
    stops: ["rgb(251 146 60)", "rgb(253 224 71)", "rgb(34 197 94)"],
  },
  cloud: {
    glow: "rgb(96 165 250)",
    stops: ["rgb(96 165 250)", "rgb(34 211 238)", "rgb(167 139 250)"],
  },
  shield: {
    glow: "rgb(56 189 248)",
    stops: ["rgb(56 189 248)", "rgb(52 211 153)", "rgb(96 165 250)"],
  },
}

export type ExpertiseHoverIconProps = {
  icon: ExpertiseIcon
  className?: string
}

export function ExpertiseHoverIcon({ icon, className }: ExpertiseHoverIconProps) {
  const Icon = ICON_MAP[icon]
  const palette = HOVER_PALETTE_MAP[icon]
  const uniqueId = useId()
  const gradientId = `expertise-hover-gradient-${icon}-${uniqueId.replace(/:/g, "")}`

  return (
    <span
      className={cn("relative inline-flex h-full w-full", className)}
      style={
        {
          "--expertise-accent": palette.glow,
          "--expertise-accent-1": palette.stops[0],
          "--expertise-accent-2": palette.stops[1],
          "--expertise-accent-3": palette.stops[2],
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <span className="pointer-events-none absolute inset-0 scale-75 rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--expertise-accent-1)_0%,transparent_60%),radial-gradient(circle_at_70%_25%,var(--expertise-accent-2)_0%,transparent_62%),radial-gradient(circle_at_50%_75%,var(--expertise-accent-3)_0%,transparent_55%)] opacity-0 blur-lg transition duration-300 group-hover:opacity-100 group-hover:scale-110 group-focus-visible:opacity-100 group-focus-visible:scale-110 motion-reduce:transition-none" />
      <span className="pointer-events-none absolute inset-0 scale-90 rounded-full bg-[conic-gradient(from_90deg,var(--expertise-accent-1),var(--expertise-accent-2),var(--expertise-accent-3),var(--expertise-accent-1))] opacity-0 blur-xl transition duration-300 group-hover:scale-125 group-hover:opacity-55 group-focus-visible:scale-125 group-focus-visible:opacity-55 motion-safe:group-hover:animate-[spin_3s_linear_infinite] motion-safe:group-focus-visible:animate-[spin_3s_linear_infinite] motion-reduce:transition-none" />
      <Icon
        weight="fill"
        className="absolute inset-0 h-full w-full opacity-100 transition duration-300 ease-out group-hover:scale-95 group-hover:opacity-0 group-focus-visible:scale-95 group-focus-visible:opacity-0 motion-reduce:transition-none"
      />
      <Icon
        weight="duotone"
        color={`url(#${gradientId})`}
        className="absolute inset-0 h-full w-full scale-95 opacity-0 [filter:drop-shadow(0_0_10px_var(--expertise-accent-1))_drop-shadow(0_0_18px_var(--expertise-accent-3))] transition duration-300 ease-out group-hover:scale-110 group-hover:opacity-100 group-focus-visible:scale-110 group-focus-visible:opacity-100 motion-reduce:transition-none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={palette.stops[0]} />
            <stop offset="45%" stopColor={palette.stops[1]} />
            <stop offset="100%" stopColor={palette.stops[2]} />
          </linearGradient>
        </defs>
      </Icon>
    </span>
  )
}
