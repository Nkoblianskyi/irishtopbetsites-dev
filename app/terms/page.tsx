import type { Metadata } from "next"
import { PolicyDocumentFrame } from "@/components/legal/policy-document-frame"
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Legal terms for accessing ${SITE_DOMAIN} and using ${SITE_NAME} comparison content and outbound links.`,
}

export default function TermsPage() {
  return (
    <PolicyDocumentFrame
      title="Terms of Use"
      subtitle={`Rules for using ${SITE_DOMAIN} and relying on our Irish bookmaker league tables and guides.`}
    >
      <section>
        <h2>1. Acceptance</h2>
        <p>
          By accessing {SITE_NAME} at {SITE_DOMAIN}, you agree to these terms. If you do not agree, stop using the website
          immediately.
        </p>
      </section>

      <section>
        <h2>2. Nature of the service</h2>
        <p>
          We provide editorial league tables, guides, and links to third-party bookmakers licensed for the Republic of Ireland.
          We do not operate gambling products, hold customer funds, settle bets, or provide betting advice tailored to your
          finances.
        </p>
      </section>

      <section>
        <h2>3. Eligibility</h2>
        <p>
          Content is intended for Irish residents aged 18 or over. You are responsible for confirming your own eligibility with
          each operator before registering, verifying identity, or depositing.
        </p>
      </section>

      <section>
        <h2>4. Accuracy and reliance</h2>
        <p>
          We work to keep bonuses, feature lists, and regulatory references current, but operators change offers without notice.
          Our summaries are not a contract — always read the bookmaker&apos;s official terms before you stake money.
        </p>
      </section>

      <section>
        <h2>5. Third-party websites</h2>
        <p>
          Outbound links are provided for convenience. We are not responsible for third-party sites, their security practices,
          or any losses arising from your relationship with them.
        </p>
      </section>

      <section>
        <h2>6. Affiliate relationships</h2>
        <p>
          We may earn referral fees when you register with an operator via our links. Fees do not buy favourable reviews. See
          our About page for how editorial scores stay independent.
        </p>
      </section>

      <section>
        <h2>7. Intellectual property</h2>
        <p>
          Text, graphics, logos, and layout on {SITE_DOMAIN} belong to {SITE_NAME} or our licensors unless stated otherwise. You
          may not scrape, copy, or redistribute content without written permission.
        </p>
      </section>

      <section>
        <h2>8. Limitation of liability</h2>
        <p>
          The site is provided &quot;as is&quot;. To the fullest extent permitted by law, we exclude liability for indirect,
          incidental, or consequential losses arising from your use of the site or reliance on our content.
        </p>
      </section>

      <section>
        <h2>9. Safer gambling</h2>
        <p>
          Gambling can cause harm. Use operator limits, take breaks, and seek help from Gambling Care Ireland (1800 936 725) if
          needed. Visit our Safer Gambling page for additional Irish resources.
        </p>
      </section>

      <section>
        <h2>10. Governing law</h2>
        <p>
          These terms are governed by the laws of Ireland. Irish courts have exclusive jurisdiction, subject to mandatory
          consumer protections in your home nation where applicable.
        </p>
      </section>

      <section>
        <h2>11. Changes</h2>
        <p>
          We may update these terms at any time. Continued use after posting constitutes acceptance of the revised terms where
          permitted by law.
        </p>
      </section>
    </PolicyDocumentFrame>
  )
}
