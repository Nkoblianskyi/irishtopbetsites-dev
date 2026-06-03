/**
 * Outbound bookmaker URLs — direct operator sites only (no affiliate / tracker redirects).
 */
export const USE_AFFILIATE_LINKS = false

/** rel for direct operator links (referrer allowed; no sponsored/affiliate flags). */
export const OPERATOR_OUTBOUND_REL = "noopener"

export function resolveOperatorUrl(directUrl: string): string {
  if (!directUrl?.trim()) return "#"
  return directUrl.trim()
}
