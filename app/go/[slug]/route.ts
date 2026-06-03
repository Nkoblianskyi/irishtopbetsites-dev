import { NextResponse, type NextRequest } from "next/server"
import { operatorDirectLinks } from "../../../data/mock-data"
import { USE_AFFILIATE_LINKS, resolveOperatorUrl } from "@/lib/operator-links"

// GET /go/<slug> → 302 to direct or affiliate URL depending on USE_AFFILIATE_LINKS.
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug: rawSlug } = await params
  const slug = rawSlug?.toLowerCase()
  const directUrl = slug ? operatorDirectLinks[slug] : undefined

  if (!directUrl || !slug) {
    return NextResponse.redirect(new URL("/", req.url), { status: 302 })
  }

  const target = resolveOperatorUrl({ slug, link: directUrl })
  if (target === "#") {
    return NextResponse.redirect(new URL("/", req.url), { status: 302 })
  }

  return NextResponse.redirect(target, {
    status: 302,
    headers: USE_AFFILIATE_LINKS ? { "Referrer-Policy": "no-referrer" } : undefined,
  })
}
