"use client"

import { CalendarDays } from "lucide-react"
import Image from "next/image"
import { editorialLastUpdatedLabel } from "@/lib/editorial-dates"

const HERO_MOBILE_BG = "/bg.webp"

interface PitchIntroBannerProps {
  onAffiliateNoticeOpen: () => void
  onUsageTermsOpen: () => void
}

const HERO_DESCRIPTION =
  "Sharp, side-by-side tables for Irish-licensed firms — GAA coupons, racing cards, and in-play speed scored without the gloss."

function TrustIndicators({ mobile }: { mobile?: boolean }) {
  const lastUpdated = editorialLastUpdatedLabel()
  const isoDate = new Date().toISOString().slice(0, 10)

  return (
    <div
      className={`flex flex-wrap items-center justify-center ${mobile ? "gap-2" : "gap-2 sm:gap-3"}`}
      role="list"
      aria-label="Editorial trust indicators"
    >
      <div
        className={`inline-flex items-center gap-2 border-2 border-white/40 ${
          mobile ? "bg-pitch-deep/80 px-2.5 py-1" : "bg-white/5 px-3 py-1.5"
        }`}
        role="listitem"
      >
        <CalendarDays className="w-3.5 h-3.5 text-trophy-gold shrink-0" aria-hidden />
        <span className={`${mobile ? "text-[11px]" : "text-xs sm:text-sm"} text-white font-body`}>
          Table refreshed{" "}
          <time dateTime={isoDate} className="font-semibold text-trophy-gold">
            {lastUpdated}
          </time>
        </span>
      </div>
      <div
        className={`inline-flex items-center gap-2 border-2 border-crimson ${
          mobile ? "bg-pitch-deep/80 px-2.5 py-1" : "bg-crimson/20 px-3 py-1.5"
        }`}
        role="listitem"
      >
        <span
          className="w-6 h-6 bg-white border-2 border-crimson flex items-center justify-center text-[10px] font-black text-crimson leading-none"
          aria-hidden
        >
          18+
        </span>
        <span className={`${mobile ? "text-[11px]" : "text-xs sm:text-sm"} font-semibold text-white font-body`}>
          Irish adults only
        </span>
      </div>
    </div>
  )
}

function HeroDisclaimer({ onAffiliateNoticeOpen, onUsageTermsOpen, mobile }: PitchIntroBannerProps & { mobile?: boolean }) {
  return (
    <p
      className={`font-body m-0 text-center ${
        mobile
          ? "text-[10px] leading-relaxed text-slate-100"
          : "text-[11px] sm:text-xs leading-relaxed text-slate-300 max-w-3xl mx-auto"
      }`}
    >
      <span className="text-crimson font-bold">18+</span> Rankings are editorial, not financial advice. Offers move fast —
      confirm rules on the operator site.{" "}
      <button
        type="button"
        onClick={onAffiliateNoticeOpen}
        className="underline hover:text-trophy-gold transition-colors"
        aria-label="Open affiliate funding disclosure"
      >
        Funding disclosure
      </button>
      <span aria-hidden> · </span>
      <button
        type="button"
        onClick={onUsageTermsOpen}
        className="underline hover:text-trophy-gold transition-colors"
        aria-label="Open site terms summary"
      >
        T&Cs
      </button>
      <span aria-hidden> · </span>
      GamblingCare.ie
    </p>
  )
}

export function PitchIntroBanner({ onAffiliateNoticeOpen, onUsageTermsOpen }: PitchIntroBannerProps) {
  const disclaimerProps = { onAffiliateNoticeOpen, onUsageTermsOpen }

  return (
    <section aria-labelledby="pitch-intro-heading" className="mb-4">
      <div className="hidden md:block brand-flat-hero text-white">
        <div className="sport-rule-bar" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="px-6 sm:px-10 lg:px-12 py-7 sm:py-8 lg:py-9 border-b-2 border-[hsl(var(--pitch-green))]">
          <div className="flex flex-col text-center items-center gap-3 sm:gap-4">
            <h1
              id="pitch-intro-heading"
              className="font-display text-2xl sm:text-3xl lg:text-[2.15rem] font-bold leading-tight text-white max-w-3xl normal-case tracking-wide"
            >
              Best Irish <span className="text-trophy-gold">Bookmaker Sites</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-body leading-relaxed max-w-2xl normal-case tracking-normal">
              {HERO_DESCRIPTION}
            </p>
            <TrustIndicators />
            <HeroDisclaimer {...disclaimerProps} />
          </div>
        </div>
      </div>

      <div className="md:hidden relative isolate overflow-hidden brand-flat-hero max-h-[240px] border-2 border-[hsl(var(--pitch-green))]">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_MOBILE_BG}
            alt=""
            fill
            className="object-cover object-center opacity-30"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-pitch-deep/90" aria-hidden />

        <div className="relative z-[2] flex flex-col items-center text-center px-4 py-5 gap-3">
          <h1
            className="font-display text-xl sm:text-2xl leading-tight font-bold text-white max-w-[340px] normal-case tracking-wide"
          >
            Best Irish <span className="text-trophy-gold">Bookmaker Sites</span>
          </h1>
          <p className="text-[10px] leading-relaxed text-slate-200 font-body max-w-[340px] normal-case tracking-normal">
            {HERO_DESCRIPTION}
          </p>
          <TrustIndicators mobile />
          <div className="w-full mt-1 border-2 border-white/20 bg-pitch-deep/90 px-3 py-2.5">
            <HeroDisclaimer {...disclaimerProps} mobile />
          </div>
        </div>
      </div>
    </section>
  )
}
