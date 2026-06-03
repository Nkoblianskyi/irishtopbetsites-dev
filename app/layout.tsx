import type React from "react"
import type { Metadata } from "next"
import { Oswald, Barlow } from "next/font/google"
import "./globals.css"
import { SiteBottomBar } from "@/components/layout/site-bottom-bar"
import { SiteTopBar } from "@/components/layout/site-top-bar"
import { SITE_METADATA, SITE_NAME, SITE_URL } from "@/lib/site-config"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
})

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
})

export { SITE_URL }

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_METADATA.description,
  keywords: [...SITE_METADATA.keywords],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IE">
      <body className={`${barlow.variable} ${oswald.variable} font-body`}>
        <div className="min-h-screen bg-[hsl(var(--cream-panel))]">
          <SiteTopBar />
          <main id="main-content">{children}</main>
          <SiteBottomBar />
        </div>
      </body>
    </html>
  )
}
