"use client"

const sections = [
  {
    index: "01",
    title: "Match your bookie to your sport",
    body: "A firm strong on Premier League coupons may feel thin for greyhound cards or tennis outrights. List the competitions you bet weekly, then check whether prices, bet builders, and streaming actually cover that mix — not just the loudest welcome banner.",
  },
  {
    index: "02",
    title: "How positions are calculated",
    body: "Our table blends odds value on mainstream markets, in-play reliability, cash-out behaviour, payment speed, support quality, app stability, and how fairly promotions are worded. We revisit scores when products change materially — not when marketing calendars flip.",
  },
  {
    index: "03",
    title: "Decode welcome-offer fine print",
    body: "UK advertising must be clear, yet operator rules still set minimum odds, excluded wallets, time limits, and whether free-bet stakes return. Treat our summaries as a head start; the bookmaker's own terms always win if anything disagrees.",
  },
  {
    index: "04",
    title: "Confirm the licence yourself",
    body: "Brands serving Great Britain should display a Gambling Commission licence number. Verify it on the operator site before you deposit, and walk away if safer-gambling tools or licensing details look thin.",
  },
  {
    index: "05",
    title: "Tools serious punters expect",
    body: "Live betting, partial cash-out, bet builders, and racing streams are baseline now. The strongest firms pair those features with deposit caps, reality checks, timeouts, and a straightforward route to GAMSTOP.",
  },
  {
    index: "06",
    title: "Keep betting recreational",
    body: "Set time and loss limits before kick-off, never chase losses, and step away if betting stops feeling optional. GambleAware and GamCare offer free, confidential UK support whenever you need it.",
  },
] as const

export function EditorialGuidesBlock() {
  return (
    <section className="mt-12 sm:mt-14" aria-labelledby="editorial-guides-heading">
      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-[hsl(var(--cream-panel))] shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
        <div className="uk-tricolour-bar h-1" aria-hidden>
          <span />
          <span />
          <span />
        </div>

        <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <header className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <p className="editorial-kicker text-pitch-navy/60 mb-2">Reader desk</p>
            <h2
              id="editorial-guides-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-pitch-navy leading-tight"
            >
              Practical guides for UK punters
            </h2>
          </header>

          <div className="grid gap-px bg-slate-200/80 sm:grid-cols-2 rounded-lg overflow-hidden border border-slate-200/80">
            {sections.map((block) => (
              <article
                key={block.index}
                className="relative bg-white p-5 sm:p-6 hover:bg-[hsl(var(--parchment))] transition-colors group"
              >
                <span
                  className="absolute top-4 right-4 font-display text-3xl font-bold text-pitch-navy/[0.07] group-hover:text-trophy-gold/20 transition-colors tabular-nums"
                  aria-hidden
                >
                  {block.index}
                </span>
                <div className="relative pr-8">
                  <span className="editorial-kicker text-trophy-gold/90 mb-2 block">Guide {block.index}</span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-pitch-navy mb-2 leading-snug">
                    {block.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{block.body}</p>
                </div>
              </article>
            ))}
          </div>

          <footer className="mt-8 pt-6 border-t border-slate-300/60 text-center text-[10px] text-muted-foreground tracking-wide leading-relaxed font-body">
            <p className="mb-1">
              © {new Date().getFullYear()} topbettingsiteslist.co.uk ·{" "}
              <span className="text-crimson font-semibold">UK residents 18+ only</span>
            </p>
            <p>Offers subject to operator terms, eligibility, and location checks</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
