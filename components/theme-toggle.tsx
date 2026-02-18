"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <span
        className="inline-flex h-11 w-14 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] text-[color:var(--text)] shadow-sm"
        aria-hidden="true"
      >
        <Moon className="h-5 w-5" />
      </span>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      type="button"
      size="icon"
      variant="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
