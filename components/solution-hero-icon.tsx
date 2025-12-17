import type { ExpertiseIcon } from "@/lib/content/capabilities"
import { ExpertiseHoverIcon } from "@/components/expertise-hover-icon"
import { cn } from "@/lib/utils"

type SolutionHeroIconProps = {
  icon: ExpertiseIcon
  className?: string
  size?: "md" | "lg"
}

const SIZE_STYLES: Record<NonNullable<SolutionHeroIconProps["size"]>, { container: string; icon: string }> = {
  md: { container: "h-14 w-14 rounded-2xl", icon: "h-7 w-7" },
  lg: { container: "h-16 w-16 rounded-3xl", icon: "h-8 w-8" },
}

export function SolutionHeroIcon({ icon, className, size = "md" }: SolutionHeroIconProps) {
  const styles = SIZE_STYLES[size]

  return (
    <div
      aria-hidden="true"
      className={cn(
        "group flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent text-primary shadow-inner shadow-primary/20 ring-1 ring-primary/15 transition-transform duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:rotate-3 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:rotate-3 motion-reduce:transition-none",
        styles.container,
        className
      )}
    >
      <ExpertiseHoverIcon icon={icon} className={styles.icon} />
    </div>
  )
}

