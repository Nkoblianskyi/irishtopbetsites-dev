import type { Metadata } from "next"
import { PolicyDocumentFrame } from "@/components/legal/policy-document-frame"
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie categories used on ${SITE_DOMAIN} and how to manage your preferences on ${SITE_NAME}.`,
}

export default function CookiePolicyPage() {
  return (
    <PolicyDocumentFrame
      title="Cookie Policy"
      subtitle={`How ${SITE_NAME} uses cookies and similar technologies on ${SITE_DOMAIN}.`}
    >
      <section>
        <h2>What cookies are</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help pages load securely,
          remember preferences, and — with your consent — let us measure traffic in aggregate.
        </p>
      </section>

      <section>
        <h2>Categories we use</h2>
        <ul>
          <li>
            <strong>Strictly necessary</strong> — security, load balancing, and storing your cookie consent choice
          </li>
          <li>
            <strong>Performance</strong> — aggregated analytics to see which league-table pages help readers most
          </li>
          <li>
            <strong>Functional</strong> — remembering UI choices where applicable
          </li>
          <li>
            <strong>Affiliate attribution</strong> — identifying outbound clicks so licensed operators can credit referrals
          </li>
        </ul>
      </section>

      <section>
        <h2>Session vs persistent</h2>
        <p>
          Session cookies expire when you close the browser. Persistent cookies remain for a defined period or until you delete
          them — commonly used for analytics and affiliate tracking with your consent.
        </p>
      </section>

      <section>
        <h2>Third-party cookies</h2>
        <p>Partners that may set cookies when you use our site include:</p>
        <ul>
          <li>Analytics platforms measuring aggregated traffic</li>
          <li>Affiliate networks linked to UK bookmakers you choose to visit</li>
          <li>Embedded media providers if we host video or interactive widgets</li>
        </ul>
      </section>

      <section>
        <h2>Managing preferences</h2>
        <p>You can control cookies by:</p>
        <ul>
          <li>Using the consent panel on your first visit (Accept all / Essential only)</li>
          <li>Adjusting browser settings to block or delete stored cookies</li>
          <li>Opting out of certain analytics tools via industry opt-out pages where available</li>
        </ul>
        <p>Blocking all cookies may limit site functionality.</p>
      </section>

      <section className="legal-callout border-l-4 border-l-trophy-gold bg-amber-50/80">
        <h2 className="font-display text-lg text-pitch-navy mb-2">Updates</h2>
        <p className="text-amber-900 m-0">
          We will revise this policy when we add new measurement tools. Continued browsing after changes constitutes acceptance
          where permitted by law and subject to your consent choices.
        </p>
      </section>
    </PolicyDocumentFrame>
  )
}
