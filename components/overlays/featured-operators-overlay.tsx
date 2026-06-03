"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "@/types"
import { OPERATOR_OUTBOUND_REL, resolveOperatorUrl } from "@/lib/operator-links"

interface FeaturedOperatorsOverlayProps {
  bettingSites: BettingSite[]
}

type DisplaySite = {
  site: BettingSite
  rank: number
  featured: boolean
}

function buildDisplaySites(sites: BettingSite[]): DisplaySite[] {
  if (sites.length === 0) return []

  if (sites.length === 1) {
    return [{ site: sites[0], rank: 1, featured: true }]
  }

  if (sites.length === 2) {
    return [
      { site: sites[0], rank: 1, featured: true },
      { site: sites[1], rank: 2, featured: false },
    ]
  }

  return [
    { site: sites[1], rank: 2, featured: false },
    { site: sites[0], rank: 1, featured: true },
    { site: sites[2], rank: 3, featured: false },
  ]
}

function modalTitle(count: number): string {
  if (count === 1) return "Top offer"
  if (count === 2) return "Top two offers"
  return "Top three offers"
}

function gridLayoutClass(count: number): string {
  if (count === 1) return "grid grid-cols-1 max-w-xs mx-auto"
  if (count === 2) return "grid grid-cols-2 max-w-2xl mx-auto"
  return "grid grid-cols-3"
}

export function FeaturedOperatorsOverlay({ bettingSites }: FeaturedOperatorsOverlayProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedTerms, setExpandedTerms] = useState<Record<number, boolean>>({})

  const featuredSites = useMemo(() => bettingSites.slice(0, 3), [bettingSites])
  const displaySites = useMemo(() => buildDisplaySites(featuredSites), [featuredSites])
  const siteCount = displaySites.length

  useEffect(() => {
    if (siteCount === 0) return
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [siteCount])

  if (!isOpen || siteCount === 0) return null

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
      aria-label="Featured Irish bookmaker offers"
    >
      <div
        className={`relative w-full bg-white border-2 border-pitch-green ${
          siteCount === 1 ? "max-w-md" : siteCount === 2 ? "max-w-3xl" : "max-w-4xl"
        }`}
      >
        <div className="sport-rule-bar" aria-hidden>
          <span />
          <span />
          <span />
        </div>

        <div className="flex items-center justify-between border-b-2 border-slate-300 px-4 py-2 bg-pitch-navy text-white">
          <p className="font-display text-sm font-bold uppercase tracking-widest m-0">{modalTitle(siteCount)}</p>
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
          <div className={`${gridLayoutClass(siteCount)} gap-3 sm:gap-4 items-stretch`}>
            {displaySites.map(({ site, rank, featured }) => {
              const isExpanded = !!expandedTerms[site.id]
              const offerHref = resolveOperatorUrl(site)

              return (
                <article
                  key={site.id}
                  className={`flex flex-col border-2 bg-white overflow-hidden ${
                    featured ? "border-pitch-green" : "border-slate-300"
                  }`}
                >
                  <Link href={offerHref} target="_blank" rel={OPERATOR_OUTBOUND_REL} className="flex flex-col flex-1 min-h-0">
                    <div className="flex items-center justify-between gap-2 border-b-2 border-slate-300 bg-slate-50 px-3 py-2">
                      <span className="font-display text-sm font-bold text-pitch-navy tabular-nums">#{rank}</span>
                      <span className="text-[10px] font-semibold text-slate-500 font-body tabular-nums">
                        {site.rating.toFixed(1)}/5
                      </span>
                    </div>

                    <div
                      className={`flex items-center justify-center border-b-2 border-slate-200 bg-white px-2 ${
                        featured ? "h-[108px] sm:h-[118px]" : "h-[96px] sm:h-[104px]"
                      }`}
                    >
                      <img
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        className={`object-contain w-auto max-w-[92%] ${
                          featured ? "h-[4.25rem] sm:h-[4.75rem]" : "h-14 sm:h-16"
                        }`}
                      />
                    </div>

                    <div className="flex flex-col flex-1 p-3 sm:p-4 text-center min-h-[180px]">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1 font-body">Welcome offer</p>
                      <p
                        className={`font-bold text-pitch-navy leading-tight font-body ${
                          featured ? "text-lg sm:text-xl" : "text-base"
                        }`}
                      >
                        {site.bonus}
                      </p>
                      {site.welcomeOffer.trim() ? (
                        <p className={`mt-1 text-slate-600 font-body ${featured ? "text-sm" : "text-xs"}`}>
                          {site.welcomeOffer}
                        </p>
                      ) : null}

                      <div className="mt-auto pt-4">
                        <span
                          className={`brand-cta-uk inline-flex w-full items-center justify-center font-body ${
                            featured ? "h-10 text-sm" : "h-9 text-xs"
                          }`}
                        >
                          Get offer
                        </span>
                      </div>
                    </div>
                  </Link>

                  {site.terms && (
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
              <span className="font-semibold text-crimson">18+</span> · Irish residents · T&Cs apply · GamblingCare.ie ·
              Offers may change — confirm on the operator site before depositing.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
