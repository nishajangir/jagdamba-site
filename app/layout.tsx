import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jagdamba Engg. Works - Crusher Manufacturing & Repair Experts Since 1990",
  description:
    "Crusher machines & parts repairing, new crusher manufacturing, lathe & welding works – Jagdamba Engg. Works, Patan (Neem Ka Thana) & Jaipur. Call +91-97840640136.",
  keywords:
    "crusher manufacturing Rajasthan, crusher repair Neem Ka Thana, jaw crusher repairing, cone crusher mantle repair, lathe machining Jaipur, mining crusher service",
  generator: "v0.app",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
