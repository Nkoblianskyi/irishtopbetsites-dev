"use client"

import { OperatorRankingTile } from "./operator-ranking-tile"
import { SpotlightPromoStrip } from "./spotlight-promo-strip"
import { bettingSites, horizontalBanners } from "@/data/mock-data"
import type { BettingSite } from "@/types"

export function RankedOperatorsFeed() {
  return (
    <section aria-label="Ranked UK bookmaker listings" className="space-y-3 w-full">
      {bettingSites.map((site: BettingSite, index: number) => (
        <div key={site.id} className="w-full">
          <OperatorRankingTile site={site} rank={index + 1} />
          {/* {index === 2 && horizontalBanners[0] && (
            <div className="my-3 w-full">
              <SpotlightPromoStrip banner={horizontalBanners[0]} />
            </div>
          )} */}
        </div>
      ))}
    </section>
  )
}
