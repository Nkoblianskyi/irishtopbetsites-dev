"use client"

import Link from "next/link"
import { SITE_NAME } from "@/lib/site-config"

const pillars = [
  {
    index: "01",
    title: "Licence on the line",
    text: "No UKGC number on the footer means no row in our table. We drop operators that hide commission status or stall on deposit-limit tooling.",
  },
  {
    index: "02",
    title: "Readers never pay",
    text: "Browsing stays free. Referral income from licensed brands funds the desk — there are no subscriptions, paywalls, or boosted listings for cash.",
  },
  {
    index: "03",
    title: "Scores are walled off",
    text: "Commercial teams cannot sign off reviews. Sponsored tiles, when they appear, carry a label and are judged on the same checklist as everything else.",
  },
] as const

export function TrustStripPanel() {
  return (
    <aside className="mt-10 sm:mt-12" aria-labelledby="trust-strip-heading">
      <div className="flat-section-dark overflow-hidden">
        <div className="sport-rule-bar" aria-hidden>
          <span />
          <span />
          <span />
        </div>

        <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 lg:items-start">
            <div>
              <p className="editorial-kicker text-trophy-gold mb-3">About the desk</p>
              <div className="editorial-rule-gold mb-4" aria-hidden />
              <h2
                id="trust-strip-heading"
                className="font-display text-2xl sm:text-[1.75rem] font-bold text-white leading-[1.15] mb-4 normal-case tracking-wide"
              >
                {SITE_NAME} — <span className="text-trophy-gold">flat</span> UK betting intelligence
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body max-w-md normal-case tracking-normal">
                We test bookmakers the way match-day punters do: early prices on domestic football, handicap cards at the
                weekend, half-time markets that do not freeze, and whether welcome copy matches the rules in the footer.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-trophy-gold hover:text-white transition-colors font-body group normal-case"
              >
                <span className="border-b-2 border-trophy-gold/60 group-hover:border-white pb-0.5">Read the full story</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <ol className="space-y-0 list-none p-0 m-0 border-t-2 border-white/15 lg:border-t-0 lg:border-l-2 lg:border-white/15 lg:pl-8">
              {pillars.map((p, i) => (
                <li
                  key={p.index}
                  className={`grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 sm:gap-4 py-5 ${
                    i < pillars.length - 1 ? "border-b-2 border-white/10" : ""
                  }`}
                >
                  <span className="editorial-index text-3xl sm:text-4xl pt-0.5" aria-hidden>
                    {p.index}
                  </span>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white mb-1.5 leading-snug normal-case">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body normal-case">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </aside>
  )
}
