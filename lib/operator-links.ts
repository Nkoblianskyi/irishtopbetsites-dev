import type { BettingSite } from "@/types"
import { operatorAffiliateLinks } from "@/data/mock-data"

/**
 * Flip to `true` when affiliate tracker URLs are ready in mock-data.
 * `false` → outbound clicks use each site's direct `link`.
 */
export const USE_AFFILIATE_LINKS = false

export const OPERATOR_OUTBOUND_REL = USE_AFFILIATE_LINKS
  ? "noopener noreferrer sponsored"
  : "noopener"

type OperatorLinkInput = string | Pick<BettingSite, "link" | "slug" | "affiliateLink">

function pickAffiliateUrl(site: Pick<BettingSite, "link" | "slug" | "affiliateLink">): string | undefined {
  const fromSite = site.affiliateLink?.trim()
  if (fromSite) return fromSite

  const fromMap = site.slug ? operatorAffiliateLinks[site.slug]?.trim() : undefined
  if (fromMap) return fromMap

  return undefined
}

export function resolveOperatorUrl(input: OperatorLinkInput): string {
  if (typeof input === "string") {
    const url = input.trim()
    return url || "#"
  }

  if (USE_AFFILIATE_LINKS) {
    const affiliate = pickAffiliateUrl(input)
    if (affiliate) return affiliate
  }

  return input.link?.trim() || "#"
}
