import type { Metadata } from "next"
import { PolicyDocumentFrame } from "@/components/legal/policy-document-frame"
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, stores, and protects personal data under Irish and EU data protection law.`,
}

export default function PrivacyPolicyPage() {
  return (
    <PolicyDocumentFrame
      title="Privacy Policy"
      subtitle={`Your privacy on ${SITE_DOMAIN} — what we process when you browse our Irish bookmaker league tables.`}
    >
      <section>
        <h2>1. Who runs this site</h2>
        <p>
          {SITE_NAME} operates {SITE_DOMAIN} as an informational comparison service. Controller contact details for your
          deployment should be published in your corporate or hosting configuration. For privacy questions, use the contact
          route listed on this site.
        </p>
      </section>

      <section>
        <h2>2. Data we may process</h2>
        <p>Depending on how you use the website, we may process:</p>
        <ul>
          <li>Technical identifiers — IP address, browser type, device model, and referral URL</li>
          <li>Usage signals — pages viewed, scroll depth, and clicks on outbound bookmaker links</li>
          <li>Communications — details you voluntarily send via email for support or press enquiries</li>
          <li>Cookie data — as described in our Cookie Policy and your consent choices</li>
        </ul>
      </section>

      <section>
        <h2>3. Why we process it</h2>
        <ul>
          <li>Deliver, secure, and maintain the comparison website</li>
          <li>Measure audience trends and improve flat editorial layouts</li>
          <li>Attribute affiliate referrals to licensed operators you choose to visit</li>
          <li>Meet legal obligations and respond to lawful requests from regulators or courts</li>
        </ul>
      </section>

      <section>
        <h2>4. Legal bases under GDPR</h2>
        <p>
          We rely on legitimate interests to operate essential site functions and limited analytics where permitted, on
          consent for non-essential cookies, and on contractual necessity where we must retain records to demonstrate
          compliance with advertising or gambling regulations.
        </p>
      </section>

      <section>
        <h2>5. Sharing and processors</h2>
        <p>
          We do not sell your personal data. We may share limited information with hosting providers, analytics vendors, and
          bookmakers when you follow outbound links (so they can attribute your visit). Each third party processes data under
          its own privacy policy and contractual safeguards.
        </p>
      </section>

      <section>
        <h2>6. Retention</h2>
        <p>
          Server logs and analytics are kept only as long as needed to operate the service, defend legal claims, and meet
          regulatory expectations, then deleted or anonymised according to our internal schedule.
        </p>
      </section>

      <section>
        <h2>7. Your rights</h2>
        <p>Under Irish and EU data protection law you may have the right to:</p>
        <ul>
          <li>Access, rectify, or erase personal data we hold about you</li>
          <li>Restrict or object to certain processing activities</li>
          <li>Withdraw cookie consent via browser settings or our consent banner</li>
          <li>Lodge a complaint with the Data Protection Commission (dataprotection.ie)</li>
        </ul>
      </section>

      <section>
        <h2>8. International transfers</h2>
        <p>
          Some suppliers may process data outside the European Economic Area. Where that occurs, we use appropriate safeguards
          such as Standard Contractual Clauses or equivalent mechanisms approved at the time of transfer.
        </p>
      </section>

      <section className="legal-callout border-l-4 border-l-trophy-gold bg-amber-50/80">
        <h2 className="font-display text-lg text-pitch-navy mb-2">9. Policy updates</h2>
        <p className="text-amber-900 m-0">
          We may revise this policy when we adopt new tools or when law changes. Material updates will be posted here with a
          revised &quot;last updated&quot; date.
        </p>
      </section>
    </PolicyDocumentFrame>
  )
}
