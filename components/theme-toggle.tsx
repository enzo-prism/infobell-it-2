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
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-transparent"
        aria-hidden="true"
      >
        <Moon className="h-5 w-5 text-muted-foreground" />
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
