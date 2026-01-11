"use client"

import type React from "react"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
// <CHANGE> Added Google Fonts for industrial typography
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import "./globals.css"

// <CHANGE> Configure Montserrat for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

// <CHANGE> Configure Open Sans for body text
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const searchParams = useSearchParams()

  return (
    <body
      className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable} ${openSans.variable}`}
    >
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      <Analytics />
    </body>
  )
}
