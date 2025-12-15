"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <span
        className="inline-flex h-11 w-14 items-center justify-center rounded-full border border-[color:rgba(10,31,68,0.18)] bg-white text-[color:var(--navy)] shadow-sm"
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
