import { NextResponse, type NextRequest } from "next/server"
import { operatorDirectLinks } from "../../../data/mock-data"

// GET /go/<slug> → 302 to the operator's direct homepage (no affiliate network).
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug: rawSlug } = await params
  const slug = rawSlug?.toLowerCase()
  const target = slug ? operatorDirectLinks[slug] : undefined

  if (!target) {
    return NextResponse.redirect(new URL("/", req.url), { status: 302 })
  }

  return NextResponse.redirect(target, { status: 302 })
}
