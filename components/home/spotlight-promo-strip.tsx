"use client"

import Image from "next/image"
import type { HorizontalBanner as HorizontalBannerType } from "@/types"
import Link from "next/link"
import { OPERATOR_OUTBOUND_REL, resolveOperatorUrl } from "@/lib/operator-links"

interface SpotlightPromoStripProps {
  banner: HorizontalBannerType
}

const SPOTLIGHT_LABEL = "Special Offer"

export function SpotlightPromoStrip({ banner }: SpotlightPromoStripProps) {
  return (
    <Link
      href={resolveOperatorUrl(banner.link)}
      target="_blank"
      rel={OPERATOR_OUTBOUND_REL}
      className="group block transition-all duration-300"
    >
      {/* Mobile layout */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-trophy-gold/85 shadow-[0_12px_28px_rgba(0,0,0,0.45)] min-h-[300px] w-full cursor-pointer transition-all duration-300 group-hover:shadow-[0_18px_34px_rgba(0,0,0,0.52)] group-hover:-translate-y-0.5 md:hidden">
        <Image
          src={banner.mobileBackgroundImage || banner.backgroundImage || "/placeholder.svg"}
          alt="Banner"
          fill
          className="object-cover"
          style={{ objectPosition: "center", transform: "scaleX(-1) scale(1.03)" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-black/85" />
        <div
          className="absolute inset-0 opacity-55"
          style={{ background: "radial-gradient(circle at 50% 44%, rgba(255,255,255,0.22), rgba(255,255,255,0) 58%)" }}
        />
        <div className="relative z-10 flex h-full flex-col">
          <div className="h-[44px] bg-slate-900/90 border-b border-trophy-gold/70 flex items-center justify-center">
            <span className="text-white font-black tracking-[0.06em] text-[16px]">{SPOTLIGHT_LABEL}</span>
          </div>

          <div className="px-6 pt-2">
            <div className="border-t-2 border-dashed border-trophy-gold/70" />
          </div>

          <div className="flex-1 flex items-center justify-center px-3 py-3">
            <div className="w-full h-full flex flex-col justify-center items-center gap-3">
              <div className="flex items-center justify-center">
                <img
                  src={banner.logo || "/placeholder.svg"}
                  alt={banner.name}
                  className="h-[54px] w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex items-center justify-center">
                <div className="text-center w-full">
                  {banner.bonus && (
                    <div
                      className="text-white text-[21px] font-black leading-[1.08] whitespace-nowrap"
                      style={{
                        textShadow: "0 4px 14px rgba(0, 0, 0, 0.85)",
                        fontFamily: "Ubuntu, sans-serif",
                      }}
                    >
                      {banner.bonus}
                    </div>
                  )}
                  <div
                    className={`${banner.bonus ? "mt-1" : ""} text-white/95 text-[17px] font-bold leading-[1.12] whitespace-nowrap`}
                    style={{
                      textShadow: "0 3px 10px rgba(0, 0, 0, 0.75)",
                      fontFamily: "Ubuntu, sans-serif",
                    }}
                  >
                    {banner.welcomeOffer}
                  </div>
                </div>
              </div>

              <div className="mt-1 flex items-center justify-center">
                <button className="bg-gradient-to-b from-yellow-300 to-yellow-500 hover:from-yellow-200 hover:to-yellow-400 text-black font-extrabold px-8 py-2.5 rounded-md text-[14px] transition-colors shadow-[0_8px_18px_rgba(0,0,0,0.45)] whitespace-nowrap min-w-[170px] border border-yellow-100/80">
                  CLAIM BONUS
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 pb-1">
            <div className="border-t-2 border-dashed border-trophy-gold/70" />
          </div>

          <div className="bg-black/72 border-t border-trophy-gold/55 px-3 py-2.5">
            <p className="text-[10px] text-white leading-snug text-center break-words">{banner.terms || ""}</p>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="relative overflow-hidden shadow-lg h-[145px] sm:h-[195px] md:h-[225px] lg:h-[205px] xl:h-[255px] w-full cursor-pointer hover:shadow-2xl transition-all duration-300">
          <Image
            src={banner.backgroundImage || "/placeholder.svg"}
            alt="Banner"
            fill
            className="object-cover"
            style={{ objectPosition: "center", transform: "scaleX(-1)" }}
          />

          <div className="absolute inset-0 bg-gray-600/10" />

          <div className="relative z-10 h-full flex">
            <div
              className="h-full flex items-center justify-center w-5 sm:w-5 md:w-6 lg:w-8 xl:w-10 relative flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #183596 0%, #4488f7 100%)",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <svg
                className="absolute inset-0.8"
                style={{
                  width: "calc(100% - 6px)",
                  height: "calc(100% - 6px)",
                  borderRadius: "0 6px 6px 0",
                }}
              >
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="1" strokeDasharray="8 4" />
                <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="8 4" />
                <line x1="100%" y1="100%" x2="0" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="8 4" />
              </svg>

              <div
                className="text-white font-black text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] tracking-wide relative z-10 px-0.5"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  letterSpacing: "0.05em",
                  transform: "rotate(180deg)",
                  lineHeight: "1",
                  fontFamily: "Ubuntu, sans-serif",
                }}
              >
                {SPOTLIGHT_LABEL}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center px-1 sm:px-2 md:px-3 lg:px-4 xl:px-6 pb-[30px] sm:pb-[34px] md:pb-[38px]">
              <div className="w-full h-full flex flex-col justify-center items-center py-1 sm:py-2 lg:py-3 gap-0.5 sm:gap-1 lg:gap-2">
                <div className="flex items-center justify-center">
                  <img
                    src={banner.logo || "/placeholder.svg"}
                    alt={banner.name}
                    className="h-[28px] sm:h-[48px] md:h-[50px] lg:h-[56px] xl:h-[50px] w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className="text-white text-center leading-tight"
                    style={{
                      fontFamily: "Ubuntu, sans-serif",
                    }}
                  >
                    <div
                      className="text-[13px] sm:text-[21px] md:text-[25px] lg:text-[26px] xl:text-[32px] font-black"
                      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.55)" }}
                    >
                      {banner.bonus}
                    </div>
                    <div
                      className="text-[11px] sm:text-[16px] md:text-[19px] lg:text-[20px] xl:text-[24px] font-bold mt-0.5"
                      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    >
                      {banner.welcomeOffer}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-3 py-1 sm:px-[24px] md:px-[32px] lg:px-[36px] xl:px-[44px] sm:py-[6px] md:py-[8px] lg:py-[10px] xl:py-[12px] rounded-sm text-[8px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] transition-colors shadow-lg whitespace-nowrap min-w-[70px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[140px] xl:min-w-[160px]">
                    CLAIM BONUS
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-0 right-0 bottom-0 bg-slate-900/92 border-t border-trophy-gold/60 px-3 sm:px-4 md:px-5 py-2">
            <p className="text-[10px] sm:text-[11px] md:text-[12px] text-white/95 leading-snug text-center break-words">
              {banner.terms || ""}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
