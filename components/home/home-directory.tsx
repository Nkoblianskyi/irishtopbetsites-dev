"use client"

import { useState } from "react"
import { PageWidthFrame } from "@/components/layout/page-width-frame"
import { PitchIntroBanner } from "./pitch-intro-banner"
import { RankedOperatorsFeed } from "./ranked-operators-feed"
import { TrustStripPanel } from "./trust-strip-panel"
import { InsightsSpotlightBlock } from "./insights-spotlight-block"
import { SecurityAssurancePanel } from "./security-assurance-panel"
import { HomeFaqPanel } from "./home-faq-panel"
import { FeaturedOperatorsOverlay } from "@/components/overlays/featured-operators-overlay"
import { ConsentPromptBar } from "@/components/overlays/consent-prompt-bar"
import { AffiliateNoticeOverlay } from "@/components/overlays/affiliate-notice-overlay"
import { UsageTermsOverlay } from "@/components/overlays/usage-terms-overlay"
import { bettingSites } from "@/data/mock-data"

export default function HomeDirectory() {
  const [affiliateNoticeOpen, setAffiliateNoticeOpen] = useState(false)
  const [usageTermsOpen, setUsageTermsOpen] = useState(false)

  return (
    <>
      <PageWidthFrame>
        <div className="max-w-7xl mx-auto">
          <PitchIntroBanner
            onAffiliateNoticeOpen={() => setAffiliateNoticeOpen(true)}
            onUsageTermsOpen={() => setUsageTermsOpen(true)}
          />
          <RankedOperatorsFeed />
          <TrustStripPanel />
          <InsightsSpotlightBlock />
          <SecurityAssurancePanel />
          <HomeFaqPanel />
        </div>
      </PageWidthFrame>

      <FeaturedOperatorsOverlay bettingSites={bettingSites} />
      <ConsentPromptBar />
      <AffiliateNoticeOverlay isOpen={affiliateNoticeOpen} onClose={() => setAffiliateNoticeOpen(false)} />
      <UsageTermsOverlay isOpen={usageTermsOpen} onClose={() => setUsageTermsOpen(false)} />
    </>
  )
}
