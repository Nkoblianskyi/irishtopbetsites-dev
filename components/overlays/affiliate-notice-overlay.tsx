"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_NAME } from "@/lib/site-config"

interface AffiliateNoticeOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function AffiliateNoticeOverlay({ isOpen, onClose }: AffiliateNoticeOverlayProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-pitch-deep/90 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="affiliate-notice-title"
    >
      <div className="bg-white max-w-2xl w-full max-h-[90vh] flex flex-col border-2 border-pitch-green overflow-hidden">
        <div className="brand-flat-hero text-white p-5 flex-shrink-0 border-b-2 border-[hsl(var(--pitch-green))]">
          <div className="flex justify-between items-center">
            <h2 id="affiliate-notice-title" className="font-display text-xl font-bold uppercase tracking-wide">
              How {SITE_NAME} is funded
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              aria-label="Close funding disclosure"
              className="text-white hover:bg-white/15 rounded-none"
            >
              <X className="w-5 h-5" aria-hidden />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-sm text-slate-700 font-body">
          <p>
            {SITE_NAME} stays free because licensed Irish bookmakers may pay a referral fee when you register through our
            outbound links. You never pay us directly, and fees cannot move a brand up the league table.
          </p>
          <section>
            <h3 className="font-display font-bold text-pitch-navy mb-1 uppercase tracking-wide text-sm">What we score</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Irish remote betting licensing and visible safer-gambling controls</li>
              <li>Odds depth on GAA, football, and handicap racing</li>
              <li>Payout speed, support quality, and mobile stability</li>
              <li>Whether welcome offers match the rules in the footer</li>
            </ul>
          </section>
          <section>
            <h3 className="font-display font-bold text-pitch-navy mb-1 uppercase tracking-wide text-sm">Editorial wall</h3>
            <p>
              Rankings are decided by the research desk. Operators cannot buy softer copy, and we remove brands that fall
              below our standards regardless of referral income.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-pitch-navy mb-1 uppercase tracking-wide text-sm">Your move</h3>
            <p>Verify every promotion on the bookmaker&apos;s site before depositing and stake only what you can afford to lose.</p>
          </section>
        </div>

        <div className="bg-red-50 border-t-2 border-crimson/30 p-4 flex-shrink-0">
          <p className="text-crimson font-semibold text-center text-sm font-body">18+ · Republic of Ireland only · Affiliate links may apply</p>
        </div>
      </div>
    </div>
  )
}
