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
  const Icon = THEME_ICONS[currentTheme]

  const handleToggle = () => {
    const currentIndex = THEME_ORDER.indexOf(currentTheme)
    const nextTheme = THEME_ORDER[(currentIndex + 1) % THEME_ORDER.length]
    setTheme(nextTheme)
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleToggle}
      className={cn("gap-2", className)}
      aria-label="Cycle theme"
      title={mounted ? `Theme: ${THEME_LABELS[currentTheme]}` : "Theme"}
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{mounted ? THEME_LABELS[currentTheme] : "Theme"}</span>
    </Button>
  )
}
