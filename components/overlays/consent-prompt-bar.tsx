"use client"

import { useState, useEffect } from "react"
import { Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site-config"

const STORAGE_KEY = "itbs_cookie_consent_v1"

export function ConsentPromptBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setIsVisible(true)
  }, [])

  const save = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:max-w-lg z-50 border-2 border-trophy-gold bg-pitch-deep text-white overflow-hidden"
    >
      <div className="sport-rule-bar" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 border-2 border-trophy-gold/50 bg-trophy-gold/10 flex items-center justify-center shrink-0">
              <Cookie className="w-4 h-4 text-trophy-gold" aria-hidden />
            </div>
            <p id="cookie-consent-title" className="text-sm font-bold text-white font-display uppercase tracking-wide">
              Cookie control
            </p>
          </div>
          <button
            type="button"
            onClick={() => save("declined")}
            className="text-slate-400 hover:text-white p-1 transition-colors"
            aria-label="Dismiss cookie banner (essential cookies only)"
          >
            <X className="w-4 h-4" aria-hidden />
          </button>
        </div>
        <p id="cookie-consent-desc" className="text-xs text-slate-300 leading-relaxed mb-4 font-body">
          {SITE_NAME} on {SITE_DOMAIN} runs essential cookies for security and consent memory. With your permission we
          add aggregated analytics — never sold to third parties.
          <Link href="/privacy-policy" className="text-trophy-gold hover:text-white underline ml-1">
            Privacy
          </Link>
          <span className="text-slate-600"> · </span>
          <Link href="/cookie-policy" className="text-trophy-gold hover:text-white underline">
            Cookie policy
          </Link>
        </p>
        <div className="flex flex-col xs:flex-row gap-2">
          <Button
            onClick={() => save("declined")}
            variant="outline"
            className="brand-cta-outline flex-1 text-xs h-9 font-body rounded-none"
            aria-label="Accept essential cookies only"
          >
            Essential only
          </Button>
          <Button
            onClick={() => save("accepted")}
            className="brand-cta flex-1 text-xs h-9 font-body rounded-none"
            aria-label="Accept all cookies"
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  )
}
