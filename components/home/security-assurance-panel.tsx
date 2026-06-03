"use client"

import Link from "next/link"

const safeguards = [
  {
    label: "UKGC",
    title: "Licence checked first",
    text: "Only operators with a current Gambling Commission licence for Great Britain appear in our grid. If regulatory status cannot be verified, the brand is removed — not demoted.",
  },
  {
    label: "TLS",
    title: "No data harvesting",
    text: "Outbound journeys use encrypted connections where operators support them. We never ask for betting passwords, card PINs, or identity documents on this domain.",
  },
  {
    label: "REF",
    title: "Referrals in the open",
    text: "Affiliate tracking may fund free comparisons — never player deposits. Read how referrals work before you click through; commercial income cannot buy a higher score.",
  },
] as const

export function SecurityAssurancePanel() {
  return (
    <section className="mt-10 sm:mt-12" aria-labelledby="security-heading">
      <div className="flat-section-dark overflow-hidden">
        <div className="px-5 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
            <div>
              <p className="editorial-kicker text-trophy-gold mb-2">Security block</p>
              <div className="editorial-rule-gold mb-4" aria-hidden />
              <h2
                id="security-heading"
                className="font-display text-2xl sm:text-[1.65rem] font-bold leading-tight mb-4 normal-case tracking-wide"
              >
                Trust you can audit
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body normal-case tracking-normal">
                Comparison sites earn confidence by being dull about risk: visible licensing, honest funding, and zero
                pressure to deposit. That is the baseline we publish against.
              </p>
              <Link
                href="/privacy-policy"
                className="inline-block mt-5 text-sm font-semibold text-trophy-gold hover:text-white transition-colors font-body underline-offset-4 hover:underline normal-case"
              >
                Privacy practices →
              </Link>
            </div>

            <ul className="space-y-3 list-none p-0 m-0">
              {safeguards.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 sm:gap-5 p-4 sm:p-5 border-2 border-white/15 bg-white/[0.03] hover:border-trophy-gold/50 transition-colors"
                >
                  <span
                    className="shrink-0 w-11 h-11 flex items-center justify-center border-2 border-trophy-gold/50 bg-trophy-gold/10 font-body text-[10px] font-bold tracking-wider text-trophy-gold"
                    aria-hidden
                  >
                    {item.label}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold text-white mb-1 normal-case">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body normal-case">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 pt-5 border-t-2 border-white/10 text-[10px] sm:text-[11px] text-slate-500 text-center font-body leading-relaxed normal-case">
            We are an information publisher, not a gambling operator. Deposits, stakes, and withdrawals always sit with the
            licensed bookmaker you choose. <span className="text-crimson font-semibold">18+</span> · UK only ·
            BeGambleAware.org
          </p>
        </div>
      </div>
    </section>
  )
}
