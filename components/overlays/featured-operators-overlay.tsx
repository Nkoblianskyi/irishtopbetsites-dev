"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "@/types"
import { OPERATOR_OUTBOUND_REL, resolveOperatorUrl } from "@/lib/operator-links"

interface FeaturedOperatorsOverlayProps {
  bettingSites: BettingSite[]
}

export function FeaturedOperatorsOverlay({ bettingSites }: FeaturedOperatorsOverlayProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedTerms, setExpandedTerms] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const top3Sites = bettingSites.slice(0, 3)
  const reorderedSites = [top3Sites[1], top3Sites[0], top3Sites[2]]

  const toggleTerms = (siteId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedTerms((prev) => ({ ...prev, [siteId]: !prev[siteId] }))
  }

  return (
    <div
      className="hidden md:flex fixed inset-0 bg-pitch-deep/85 z-50 items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Featured UK bookmaker offers"
    >
      <div className="relative w-full max-w-4xl bg-white border-2 border-pitch-green">
        <div className="sport-rule-bar" aria-hidden>
          <span />
          <span />
          <span />
        </div>

        <div className="flex items-center justify-between border-b-2 border-slate-300 px-4 py-2 bg-pitch-navy text-white">
          <p className="font-display text-sm font-bold uppercase tracking-widest m-0">Top three offers</p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="px-4 sm:px-6 py-5 sm:py-6">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 items-stretch">
            {reorderedSites.map((site: BettingSite, index: number) => {
              const isCenter = index === 1
              const isExpanded = !!expandedTerms[site?.id]
              const rankLabel = isCenter ? "1" : index === 0 ? "2" : "3"
              const offerHref = resolveOperatorUrl(site?.link || "#")

              return (
                <article
                  key={site?.id ?? index}
                  className={`flex flex-col border-2 bg-white overflow-hidden ${
                    isCenter ? "border-pitch-green" : "border-slate-300"
                  }`}
                >
                  <Link href={offerHref} target="_blank" rel={OPERATOR_OUTBOUND_REL} className="flex flex-col flex-1 min-h-0">
                    <div className="flex items-center justify-between gap-2 border-b-2 border-slate-300 bg-slate-50 px-3 py-2">
                      <span className="font-display text-sm font-bold text-pitch-navy tabular-nums">#{rankLabel}</span>
                      <span className="text-[10px] font-semibold text-slate-500 font-body tabular-nums">
                        {site?.rating?.toFixed(1) ?? "—"}/5
                      </span>
                    </div>

                    <div
                      className={`flex items-center justify-center border-b-2 border-slate-200 bg-white px-2 ${
                        isCenter ? "h-[108px] sm:h-[118px]" : "h-[96px] sm:h-[104px]"
                      }`}
                    >
                      <img
                        src={site?.logo || "/placeholder.svg"}
                        alt={site?.name || "Bookmaker"}
                        className={`object-contain w-auto max-w-[92%] ${
                          isCenter ? "h-[4.25rem] sm:h-[4.75rem]" : "h-14 sm:h-16"
                        }`}
                      />
                    </div>

                    <div className="flex flex-col flex-1 p-3 sm:p-4 text-center min-h-[180px]">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1 font-body">Welcome offer</p>
                      <p
                        className={`font-bold text-pitch-navy leading-tight font-body ${
                          isCenter ? "text-lg sm:text-xl" : "text-base"
                        }`}
                      >
                        {site?.bonus}
                      </p>
                      <p className={`mt-1 text-slate-600 font-body ${isCenter ? "text-sm" : "text-xs"}`}>
                        {site?.welcomeOffer}
                      </p>

                      <div className="mt-auto pt-4">
                        <span
                          className={`brand-cta-uk inline-flex w-full items-center justify-center font-body ${
                            isCenter ? "h-10 text-sm" : "h-9 text-xs"
                          }`}
                        >
                          Get offer
                        </span>
                      </div>
                    </div>
                  </Link>

                  {site?.terms && (
                    <div className="px-3 sm:px-4 pb-3 pt-0 border-t-2 border-slate-200 text-left">
                      <p
                        className={`text-[10px] text-muted-foreground leading-relaxed font-body ${
                          isExpanded ? "" : "line-clamp-2"
                        }`}
                      >
                        <span className="font-semibold text-slate-600">T&Cs: </span>
                        {site.terms}
                      </p>
                      <button
                        type="button"
                        onClick={(e) => toggleTerms(site.id, e)}
                        className="mt-1 text-[10px] font-semibold text-pitch-green hover:underline font-body"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Show less" : "Read full terms"}
                      </button>
                    </div>
                  )}
                </article>
              )
            })}
          </div>

          <footer className="mt-5 pt-4 border-t-2 border-slate-300 text-center">
            <p className="text-xs text-slate-500 leading-relaxed font-body m-0">
              <span className="font-semibold text-crimson">18+</span> · UK residents · T&Cs apply · BeGambleAware.org ·
              Offers may change — confirm on the operator site before depositing.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
