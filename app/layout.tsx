import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.infobellit.com"),
  title: {
    default: "Infobell IT Solutions",
    template: "%s | Infobell IT Solutions",
  },
  description:
    "Infobell IT Solutions delivers enterprise AI, high-performance computing, cloud modernization, and sustainability engineering for global innovators.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background font-sans text-foreground antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
