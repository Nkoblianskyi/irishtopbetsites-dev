import type { MetadataRoute } from "next"
import { SITE_METADATA, SITE_NAME, SITE_URL } from "@/lib/site-config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_METADATA.title,
    short_name: SITE_NAME,
    description: SITE_METADATA.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0d1f18",
    theme_color: "#d97706",
    lang: "en-GB",
    dir: "ltr",
    categories: ["sports", "entertainment"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
    scope: SITE_URL,
  }
}
