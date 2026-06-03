import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
    priority: number
  }> = [
    { path: "/", changeFrequency: "daily", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/responsible-gaming", changeFrequency: "monthly", priority: 0.6 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4 },
    { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.4 },
  ]

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
