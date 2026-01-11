"use client"

import * as React from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ThemeOption = "light" | "dark" | "system"

const THEME_ORDER: ThemeOption[] = ["light", "dark", "system"]
const THEME_LABELS: Record<ThemeOption, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
}
const THEME_ICONS: Record<ThemeOption, React.ComponentType<{ className?: string }>> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = (theme ?? "system") as ThemeOption
  const resolvedTheme = mounted ? currentTheme : "system"
  const Icon = THEME_ICONS[resolvedTheme]

  const handleToggle = () => {
    const currentIndex = THEME_ORDER.indexOf(currentTheme)
    const nextTheme = THEME_ORDER[(currentIndex + 1) % THEME_ORDER.length]
    setTheme(nextTheme)
  }

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="outline"
        size="sm"
        className={cn("gap-2", className)}
        aria-label="Theme"
        title="Theme"
      >
        <Monitor className="h-4 w-4" />
        <span className="hidden sm:inline">Theme</span>
      </Button>
    )
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleToggle}
      className={cn("gap-2", className)}
      aria-label="Cycle theme"
      title={`Theme: ${THEME_LABELS[currentTheme]}`}
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{THEME_LABELS[currentTheme]}</span>
    </Button>
  )
}
