import type { Metadata } from "next"
import { PolicyDocumentFrame } from "@/components/legal/policy-document-frame"
import { SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Safer Gambling",
  description: `Safer gambling guidance, warning signs, and Irish support contacts recommended by ${SITE_NAME}.`,
}

export default function ResponsibleGamingPage() {
  return (
    <PolicyDocumentFrame
      title="Safer Gambling"
      subtitle="Betting should stay optional. If it stops feeling that way, free confidential help is available across Ireland."
    >
      <section className="legal-callout legal-callout--alert">
        <h2>Need help now?</h2>
        <p>
          Gambling Care Ireland: <strong>1800 936 725</strong> (free, confidential). When the fun stops, stop.
        </p>
      </section>

      <section>
        <h2>Staying in control</h2>
        <p>
          Safer gambling means treating betting as paid entertainment — not a way to fix money problems. Set time and loss
          limits before the first whistle and treat them as fixed.
        </p>
        <div className="legal-card-grid">
          {[
            { title: "Time caps", text: "Use session reminders and log off when the alarm sounds — even during a winning spell." },
            { title: "Money caps", text: "Only stake what you can lose without touching rent, bills, or savings goals." },
            { title: "Planned breaks", text: "Step away after a bad run. The next fixture will still be there tomorrow." },
            { title: "No chasing", text: "Losses are the cost of entertainment, not a debt you must recover tonight." },
          ].map((tip) => (
            <div key={tip.title} className="legal-card">
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Warning signs</h2>
        <ul>
          <li>Spending more time or money than you planned</li>
          <li>Hiding activity from family, friends, or colleagues</li>
          <li>Borrowing to fund bets or neglecting work and relationships</li>
          <li>Feeling anxious, irritable, or unable to cut down</li>
          <li>Needing bigger stakes for the same level of excitement</li>
        </ul>
      </section>

      <section>
        <h2>Tools on licensed sites</h2>
        <p>Irish-licensed operators must offer:</p>
        <ul>
          <li>Deposit, loss, and session limits you can lower instantly</li>
          <li>Reality checks and cooling-off timeouts</li>
          <li>Self-exclusion — including multi-operator schemes such as the National Exclusion Register</li>
        </ul>
      </section>

      <section>
        <h2>Irish support organisations</h2>
        <div className="legal-card-grid">
          <div className="legal-card">
            <h3>Gambling Care Ireland</h3>
            <p>gamblingcare.ie · 1800 936 725</p>
          </div>
          <div className="legal-card">
            <h3>National Exclusion Register</h3>
            <p>exclusionregister.ie · Multi-operator self-exclusion</p>
          </div>
          <div className="legal-card">
            <h3>Gamblers Anonymous Ireland</h3>
            <p>gamblersanonymous.ie · Peer support meetings</p>
          </div>
          <div className="legal-card">
            <h3>Rutland Centre</h3>
            <p>rutlandcentre.ie · Addiction treatment and counselling</p>
          </div>
        </div>
      </section>

      <section>
        <h2>For friends and family</h2>
        <p>
          You cannot force someone to stop, but you can encourage professional help and avoid paying their gambling debts.
          Gambling Care Ireland also supports people affected by another person&apos;s gambling.
        </p>
      </section>

      <section>
        <h2>Our pledge at {SITE_NAME}</h2>
        <p>
          We only feature operators with visible safer-gambling tools and clear Irish licensing. We remove brands that repeatedly
          fail on player protection — regardless of commercial relationships.
        </p>
      </section>
    </PolicyDocumentFrame>
  )
}
