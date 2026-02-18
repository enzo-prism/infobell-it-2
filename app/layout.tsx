import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_URL } from "@/lib/content/site"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Infobell IT",
    template: "%s | Infobell IT",
  },
  description:
    "Infobell IT delivers enterprise AI, cloud modernization, and performance engineering services that move teams from pilot to production faster.",
  openGraph: {
    title: "Infobell IT",
    description:
      "Infobell IT delivers enterprise AI, cloud modernization, and performance engineering services that move teams from pilot to production faster.",
    url: "/",
    siteName: "Infobell IT",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Infobell IT Advanced Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infobell IT",
    description:
      "Infobell IT delivers enterprise AI, cloud modernization, and performance engineering services that move teams from pilot to production faster.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon-light-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-dark-48x48.png", sizes: "48x48", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background font-sans text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
