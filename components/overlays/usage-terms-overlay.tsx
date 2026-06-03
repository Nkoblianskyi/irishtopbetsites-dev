"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_NAME, SITE_DOMAIN } from "@/lib/site-config"

interface UsageTermsOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function UsageTermsOverlay({ isOpen, onClose }: UsageTermsOverlayProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-pitch-deep/90 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="usage-terms-title"
    >
      <div className="bg-white max-w-2xl w-full max-h-[90vh] flex flex-col border-2 border-pitch-green overflow-hidden">
        <div className="brand-flat-hero text-white p-5 flex-shrink-0 border-b-2 border-[hsl(var(--pitch-green))]">
          <div className="flex justify-between items-center">
            <h2 id="usage-terms-title" className="font-display text-xl font-bold uppercase tracking-wide">
              Site terms (summary)
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              aria-label="Close terms summary"
              className="text-white hover:bg-white/15 rounded-none"
            >
              <X className="w-5 h-5" aria-hidden />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-sm text-slate-700 font-body">
          <p>
            By browsing {SITE_DOMAIN} you accept these basics. Full legal wording is on our{" "}
            <a href="/terms" className="text-pitch-green font-semibold underline">
              terms page
            </a>
            .
          </p>
          <section>
            <h3 className="font-display font-bold text-pitch-navy mb-1 uppercase tracking-wide text-sm">Age & location</h3>
            <p>{SITE_NAME} is for UK residents aged 18+. Leave immediately if you are underage.</p>
          </section>
          <section>
            <h3 className="font-display font-bold text-pitch-navy mb-1 uppercase tracking-wide text-sm">Information only</h3>
            <p>
              We publish league tables and explainers. We are not a bookmaker and do not accept stakes or hold player balances.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-pitch-navy mb-1 uppercase tracking-wide text-sm">Offers move</h3>
            <p>Bonuses, odds, and rules can change without notice. Always confirm details on the operator&apos;s site.</p>
          </section>
          <section>
            <h3 className="font-display font-bold text-pitch-navy mb-1 uppercase tracking-wide text-sm">Safer gambling</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Set deposit and time limits before you bet</li>
              <li>Never chase losses</li>
              <li>Contact GambleAware or GamCare if betting harms you</li>
            </ul>
          </section>
        </div>

        <div className="bg-red-50 border-t-2 border-crimson/30 p-4 flex-shrink-0">
          <p className="text-crimson font-semibold text-center text-sm font-body">18+ · T&Cs apply · Play responsibly</p>
        </div>
      </div>
    </div>
  )
}
