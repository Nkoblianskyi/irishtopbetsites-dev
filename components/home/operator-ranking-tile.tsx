"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Star, ExternalLink } from "lucide-react"
import type { BettingSite } from "@/types"
import Link from "next/link"
import { OPERATOR_OUTBOUND_REL, resolveOperatorUrl } from "@/lib/operator-links"

interface OperatorRankingTileProps {
  site: BettingSite
  rank: number
}

const SPECIAL_BADGES: Record<number, string> = {
  1: "Editor's pick",
  2: "Exclusive",
  4: "Trending",
  7: "Rising",
}

function formatVotes(votes: number) {
  return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function StarRow({ rating, size = "md" }: { rating: number; size?: "sm" | "md" }) {
  const filled = Math.floor(rating)
  const half = rating % 1 !== 0
  const cls = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"

  return (
    <div className="flex justify-center gap-0.5" aria-label={`User rating ${rating.toFixed(1)} out of 5`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${cls} ${
            i < filled || (i === filled && half) ? "fill-trophy-gold text-trophy-gold" : "text-slate-300"
          }`}
          aria-hidden
        />
      ))}
    </div>
  )
}

function RankBadge({ rank }: { rank: number }) {
  const badge = SPECIAL_BADGES[rank]

  return (
    <div className="ranking-tile__rank-strip w-[52px] min-h-full py-3 gap-1">
      <span className="font-display text-xl font-bold text-trophy-gold tabular-nums">{rank}</span>
      {badge && (
        <span className="text-[7px] font-bold uppercase tracking-wider text-center text-white/90 px-1 leading-tight">
          {badge}
        </span>
      )}
    </div>
  )
}

function MobileBonusBlock({ site }: { site: BettingSite }) {
  return (
    <div className="flex flex-col items-center justify-center text-center min-w-0 px-1">
      <p className="text-[9px] uppercase tracking-wide text-muted-foreground mb-0.5 font-body">Welcome offer</p>
      <p className="text-[40px] leading-none font-bold text-foreground font-body w-full whitespace-nowrap overflow-hidden text-ellipsis">
        {site.bonus}
      </p>
      {site.welcomeOffer.trim() ? (
        <p className="text-sm font-semibold text-foreground/85 leading-snug line-clamp-2 mt-1 font-body w-full">
          {site.welcomeOffer}
        </p>
      ) : null}
    </div>
  )
}

function DesktopOfferBlock({ site }: { site: BettingSite }) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full min-w-0 px-3 xl:px-6">
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1 font-body">Welcome offer</p>
      <p className="text-xl xl:text-2xl font-bold text-foreground leading-tight font-body max-w-md">{site.bonus}</p>
      <p className="text-sm font-semibold text-foreground/85 leading-snug line-clamp-2 mt-1 font-body max-w-md">
        {site.welcomeOffer}
      </p>
    </div>
  )
}

function TabletLogoBlock({ site }: { site: BettingSite }) {
  return (
    <div className="flex items-center gap-3 min-w-0 flex-1">
      <img
        src={site.logo || "/placeholder.svg"}
        alt={site.name}
        className="w-[96px] h-[48px] object-contain shrink-0"
      />
      <div className="min-w-0 flex-1 text-left">
        <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5 font-body">Welcome offer</p>
        <p className="text-xl font-bold text-foreground leading-tight font-body">{site.bonus}</p>
        <p className="text-xs font-semibold text-foreground/85 line-clamp-2 font-body">{site.welcomeOffer}</p>
      </div>
    </div>
  )
}

function RatingColumn({
  site,
  size = "md",
}: {
  site: BettingSite
  size?: "sm" | "md"
}) {
  const scoreClass =
    size === "sm" ? "text-2xl" : "text-3xl xl:text-4xl"

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 py-1 ${
        size === "sm" ? "px-2 min-w-[72px]" : "px-2 min-w-[96px] xl:min-w-[104px]"
      }`}
    >
      <span className={`ranking-tile__score ${scoreClass} leading-none`}>{site.rating.toFixed(1)}</span>
      <StarRow rating={site.rating} size={size} />
      <p className={`${size === "sm" ? "text-[9px]" : "text-[10px]"} text-muted-foreground font-body whitespace-nowrap`}>
        ({formatVotes(site.votes)} votes)
      </p>
    </div>
  )
}

function CtaLabel({ className = "" }: { className?: string }) {
  return (
    <span
      className={`brand-cta-uk inline-flex items-center justify-center font-body pointer-events-none ${className}`}
    >
      Get offer
    </span>
  )
}

function TermsFooter({
  terms,
  expanded,
  showReadMore,
  onToggle,
  size,
  ref,
}: {
  terms: string
  expanded: boolean
  showReadMore: boolean
  onToggle: (e: React.MouseEvent) => void
  size: "desktop" | "tablet" | "mobile"
  ref?: React.Ref<HTMLDivElement>
}) {
  const textSize = size === "mobile" ? "text-[10px]" : "text-[11px]"

  return (
    <div ref={ref} className="ranking-tile__terms">
      <p className={`${textSize} text-center text-muted-foreground leading-relaxed ${!expanded ? "line-clamp-2" : ""}`}>
        <span className="font-semibold text-slate-600">T&Cs: </span>
        {terms}
      </p>
      {showReadMore && (
        <button
          type="button"
          onClick={onToggle}
          className={`block mx-auto mt-1.5 ${textSize} font-semibold text-pitch-green hover:underline font-body`}
        >
          {expanded ? "Show less" : "Read full terms"}
        </button>
      )}
    </div>
  )
}

export function OperatorRankingTile({ site, rank }: OperatorRankingTileProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const termsContainerRef = useRef<HTMLDivElement>(null)

  const isFeatured = rank === 1
  const tileClass = `ranking-tile ${isFeatured ? "ranking-tile--featured" : ""}`

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const limit = isMobile ? 180 : 320
    setShowReadMore(site.terms.length > limit)
  }, [site.terms, isMobile])

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  const termsProps = {
    terms: site.terms,
    expanded: isTermsExpanded,
    showReadMore,
    onToggle: handleTermsClick,
  }

  return (
    <article className="block w-full">
      {/* Desktop — logo · rating · offer · CTA */}
      <div className={`hidden lg:block ${tileClass}`}>
        {isFeatured && (
          <div className="sport-rule-bar h-1" aria-hidden>
            <span />
            <span />
            <span />
          </div>
        )}
        <Link href={resolveOperatorUrl(site)} target="_blank" rel={OPERATOR_OUTBOUND_REL} className="block group">
          <div className="flex min-h-[128px] xl:min-h-[136px]">
            <RankBadge rank={rank} />
            <div className="flex-1 grid grid-cols-[minmax(148px,22%)_auto_minmax(0,1fr)_132px] gap-x-6 xl:gap-x-10 items-center px-5 xl:px-6 py-4">
              <div className="flex justify-start items-center border-r border-slate-100 pr-5 xl:pr-6 min-w-0">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[152px] xl:w-[180px] h-[72px] xl:h-[84px] max-w-full object-contain object-left"
                />
              </div>
              <div className="flex justify-center shrink-0 pl-2 pr-5 xl:pr-6 border-r border-slate-100">
                <RatingColumn site={site} />
              </div>
              <div className="flex justify-center items-center min-w-0 pr-5 xl:pr-6">
                <DesktopOfferBlock site={site} />
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 shrink-0 w-[132px] pl-2 border-l border-slate-100">
                <CtaLabel className="w-full max-w-[116px] h-10 text-xs" />
                <span className="text-[10px] text-muted-foreground flex items-center gap-0.5 font-body group-hover:text-pitch-green transition-colors">
                  Visit site
                  <ExternalLink className="w-3 h-3" aria-hidden />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <TermsFooter {...termsProps} size="desktop" ref={termsContainerRef} />
      </div>

      {/* Tablet — rating · logo+offer · CTA */}
      <div className={`hidden md:block lg:hidden ${tileClass}`}>
        <Link href={resolveOperatorUrl(site)} target="_blank" rel={OPERATOR_OUTBOUND_REL} className="block">
          <div className="flex items-stretch min-h-[112px]">
            <RankBadge rank={rank} />
            <div className="flex flex-1 items-center gap-3 px-3 py-3 min-w-0">
              <div className="shrink-0 border-r border-slate-100">
                <RatingColumn site={site} size="sm" />
              </div>
              <TabletLogoBlock site={site} />
              <CtaLabel className="shrink-0 h-9 px-4 text-xs" />
            </div>
          </div>
        </Link>
        <TermsFooter {...termsProps} size="tablet" />
      </div>

      {/* Mobile — bonus on top · logo + CTA · rating */}
      <div className={`md:hidden ${tileClass}`}>
        {isFeatured && (
          <div className="sport-rule-bar h-1" aria-hidden>
            <span />
            <span />
            <span />
          </div>
        )}
        <Link href={resolveOperatorUrl(site)} target="_blank" rel={OPERATOR_OUTBOUND_REL} className="block">
          <div className="flex flex-col min-h-[172px]">
            <div className="flex items-center justify-between gap-2 px-3 py-1.5 bg-pitch-navy text-white border-b border-trophy-gold/25 shrink-0">
              <span className="font-display text-sm font-bold tabular-nums">#{rank}</span>
              {SPECIAL_BADGES[rank] ? (
                <span className="text-[9px] font-bold uppercase tracking-wide text-trophy-gold">
                  {SPECIAL_BADGES[rank]}
                </span>
              ) : (
                <span className="flex-1" aria-hidden />
              )}
              <span className="ranking-tile__score text-lg text-trophy-gold">{site.rating.toFixed(1)}</span>
            </div>

            <div className="px-3 pt-3 pb-2 border-b border-slate-100">
              <MobileBonusBlock site={site} />
            </div>

            <div className="px-3 py-3 flex items-center gap-2.5 border-b border-slate-100">
              <div className="flex justify-start items-center min-w-0 flex-1">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="h-[5rem] w-full max-w-[168px] object-contain object-left"
                />
              </div>
              <CtaLabel className="shrink-0 h-10 px-3 text-sm min-w-[108px] max-w-[132px] flex-1" />
            </div>

            <div className="px-3 py-2.5 flex flex-col items-center justify-center">
              <StarRow rating={site.rating} size="sm" />
              <p className="text-[10px] text-muted-foreground mt-0.5 font-body whitespace-nowrap">
                ({formatVotes(site.votes)} votes)
              </p>
            </div>
          </div>
        </Link>
        <TermsFooter {...termsProps} size="mobile" />
      </div>
    </article>
  )
}
