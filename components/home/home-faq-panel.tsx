"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SITE_DOMAIN } from "@/lib/site-config"

const faqItems = [
  {
    q: "Is Irish Top Bet Sites a bookmaker?",
    a: "No. We publish ranked tables and guides for UK adults. You cannot wager, deposit, or withdraw through irishtopbetsites.com — every balance lives with the licensed operator you register with.",
  },
  {
    q: "How often is the league table updated?",
    a: "Analysts refresh scores when products shift materially: new apps, payment routes, promotional wording, or safer-gambling tooling. Minor marketing swaps alone do not move a position.",
  },
  {
    q: "Do operators pay for a higher rank?",
    a: "Referral fees may fund our research, but they cannot purchase editorial favour. Brands that fail on licensing, payouts, or player protection are removed regardless of commercial impact.",
  },
  {
    q: "Why do welcome offers look different on the operator site?",
    a: "Headline banners change quickly. Our summaries are a starting point — minimum odds, wallet exclusions, time limits, and stake-return rules on the operator site always override our copy.",
  },
  {
    q: "Which sports matter most in your scoring?",
    a: "We weight football coupons, Saturday racing, and in-play stability because those drive most UK volume. Niche markets still matter if you bet them weekly — match the bookie to your fixture list.",
  },
  {
    q: "Where can I get help if betting feels out of control?",
    a: "Contact GambleAware on 0808 8020 133 or GamCare for free UK support. Licensed sites must offer deposit limits, timeouts, and routes to GAMSTOP multi-operator self-exclusion.",
  },
] as const

export function HomeFaqPanel() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mt-12 sm:mt-14" aria-labelledby="faq-heading">
      <div className="flat-section overflow-hidden">
        <div className="sport-rule-bar h-1" aria-hidden>
          <span />
          <span />
          <span />
        </div>

        <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <header className="max-w-xl mb-8 sm:mb-10">
            <p className="editorial-kicker text-pitch-green mb-2">FAQ</p>
            <h2
              id="faq-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-pitch-navy leading-tight normal-case tracking-wide"
            >
              Straight answers
            </h2>
            <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed normal-case tracking-normal">
              Quick clarifications about how {SITE_DOMAIN} works — before you follow an outbound link.
            </p>
          </header>

          <div className="border-2 border-slate-300 divide-y-2 divide-slate-300">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index
              const panelId = `faq-panel-${index}`
              const buttonId = `faq-button-${index}`

              return (
                <div key={item.q} className="bg-white">
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left hover:bg-[hsl(var(--parchment))] transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-pitch-navy normal-case tracking-wide pr-2">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-pitch-green transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  {isOpen && (
                    <div id={panelId} role="region" aria-labelledby={buttonId} className="px-4 sm:px-5 pb-4 -mt-1">
                      <p className="text-sm text-muted-foreground leading-relaxed font-body normal-case">{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <footer className="mt-8 pt-6 border-t-2 border-slate-300 text-center text-[10px] text-muted-foreground tracking-wide leading-relaxed font-body normal-case">
            <p className="mb-1">
              © {new Date().getFullYear()} {SITE_DOMAIN} ·{" "}
              <span className="text-crimson font-semibold">UK residents 18+ only</span>
            </p>
            <p>Offers subject to operator terms, eligibility, and location checks</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
