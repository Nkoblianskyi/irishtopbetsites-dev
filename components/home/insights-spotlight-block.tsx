"use client"

const facts = [
  {
    tag: "Odds",
    title: "Closing lines tell the truth",
    body: "We snapshot prices an hour before kick-off on top-flight fixtures and handicap races. A brand that looks generous at lunch often trims liability by tea-time — we record that drift so you see it before opening an account.",
  },
  {
    tag: "Live",
    title: "Latency beats animations",
    body: "In-play slips should confirm in under two seconds and cash-out should not vanish when exposure shifts. Our mobile pass checks bet-builder stability, biometric login, and whether price alerts land before full time.",
  },
  {
    tag: "Cash",
    title: "Withdrawals without theatre",
    body: "Debit reversals, e-wallet holds, and first KYC checks are where trust is won. We log typical payout windows and flag operators that split winnings across methods without a clear warning in the cashier.",
  },
] as const

export function InsightsSpotlightBlock() {
  return (
    <section className="mt-12 sm:mt-14" aria-labelledby="insights-heading">
      <div className="flat-section overflow-hidden">
        <div className="h-1 bg-pitch-green" aria-hidden />

        <div className="pl-5 sm:pl-7 pr-5 py-8 sm:py-10 sm:pr-8">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <p className="editorial-kicker text-pitch-green mb-2">Did you know?</p>
            <h2
              id="insights-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-pitch-navy leading-tight mb-3 normal-case tracking-wide"
            >
              Three facts behind every row
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed normal-case tracking-normal">
              Our league table is not a popularity poll. Each refresh weighs how a brand behaves for everyday UK punters —
              not influencer posts or one-week PR bursts.
            </p>
          </div>

          <div className="grid gap-0 lg:grid-cols-12">
            <article className="lg:col-span-5 lg:pr-8 lg:border-r-2 lg:border-slate-300 pb-8 lg:pb-0 mb-8 lg:mb-0 border-b-2 lg:border-b-0 border-slate-300">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-white bg-pitch-navy px-2 py-0.5 mb-4 font-body border-2 border-pitch-green">
                {facts[0].tag}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-pitch-navy mb-3 leading-snug normal-case">
                {facts[0].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body normal-case">{facts[0].body}</p>
            </article>

            <div className="lg:col-span-7 lg:pl-8 flex flex-col gap-8 sm:gap-10">
              {facts.slice(1).map((item) => (
                <article key={item.title} className="relative pl-4 border-l-4 border-trophy-gold">
                  <span className="editorial-kicker text-slate-500 mb-2 block">{item.tag}</span>
                  <h3 className="font-display text-lg font-bold text-pitch-navy mb-2 normal-case">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body normal-case">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
