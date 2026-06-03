import type { Metadata } from "next"
import { PolicyDocumentFrame } from "@/components/legal/policy-document-frame"
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn how ${SITE_NAME} builds flat Irish bookmaker league tables, funds independent research, and keeps scores separate from commercial pressure.`,
}

export default function AboutPage() {
  return (
    <PolicyDocumentFrame
      title={`About ${SITE_NAME}`}
      subtitle="An Irish comparison publisher with a straight-line editorial style — we analyse licensed bookmakers, never take your stakes."
    >
      <section>
        <h2>Why we exist</h2>
        <p>
          {SITE_NAME} ({SITE_DOMAIN}) shortens the search for a trustworthy Irish bookmaker. We publish flat league tables,
          explainers, and safer-gambling pointers for adults in the Republic of Ireland who bet on GAA, football, racing,
          and live markets. We are not a gambling operator: you cannot wager, deposit, or withdraw through this website.
        </p>
      </section>

      <section>
        <h2>How the table is built</h2>
        <p>
          Researchers follow a fixed checklist — licensing, market depth, in-play latency, payment routes, mobile apps,
          support response times, promotional clarity, and player-protection tooling. Where practical we open real accounts,
          place test stakes, and re-score brands when products change in a meaningful way.
        </p>
        <div className="legal-callout">
          <h3>Checklist highlights</h3>
          <ul>
            <li>Active Irish remote betting licence with visible safer-gambling controls</li>
            <li>Price quality on GAA, Premier League, domestic cups, and Irish racing cards</li>
            <li>Cash-out behaviour, bet builders, and streaming where advertised</li>
            <li>Welcome offers described without misleading headline claims</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Publisher, not operator</h2>
        <p>
          Think of us as the fixture list, not the pitch. Every balance, bet, and payout sits with the licensed brand you
          register with. Our job is to spell out trade-offs so you choose with realistic expectations.
        </p>
      </section>

      <section>
        <h2>Revenue and referrals</h2>
        <p>
          Like many Irish comparison publishers, we may earn referral fees when you join a bookmaker via outbound links. That
          keeps {SITE_NAME} free to read. Fees influence whether we can link to a brand — they do not buy a higher editorial
          score. Any sponsored placement is labelled and held to Irish advertising standards.
        </p>
        <ul>
          <li>
            <strong>Revenue share</strong> — a share of net revenue from referred players while accounts remain active.
          </li>
          <li>
            <strong>CPA</strong> — a fixed fee when a referred user registers and meets qualifying deposit rules.
          </li>
          <li>
            <strong>Hybrid deals</strong> — blends agreed per operator and recorded internally.
          </li>
        </ul>
      </section>

      <section>
        <h2>Editorial firewall</h2>
        <p>
          Commercial teams do not approve reviews. We have paused partnerships where operators requested softer copy, and we
          downgrade brands with slow payouts, opaque terms, or weak safer-gambling tools — regardless of referral income.
        </p>
      </section>

      <section>
        <h2>Safer gambling stance</h2>
        <p>
          Betting should remain optional entertainment. We only list operators that provide deposit limits, timeouts,
          self-exclusion, and visible links to Irish support charities. If gambling harms you or someone close, contact
          Gambling Care Ireland on 1800 936 725.
        </p>
      </section>

      <section className="legal-callout legal-callout--alert">
        <h3>Please remember</h3>
        <p>
          Never stake more than you can afford to lose. Offers change without notice — verify every promotion on the
          operator&apos;s own site before you deposit. 18+ · Irish residents only.
        </p>
      </section>
    </PolicyDocumentFrame>
  )
}
