import Link from "next/link"
import Image from "next/image"
import { SITE_NAME } from "@/lib/site-config"

function BrandWordmark({ compact = false }: { compact?: boolean }) {
  const size = compact ? "text-[9px]" : "text-base md:text-lg lg:text-xl"
  return (
    <span className={`${size} font-display font-bold tracking-[0.12em] leading-tight uppercase`}>
      <span className="text-trophy-gold">Irish</span>
      <span className="text-white"> Top</span>
      <span className="text-white"> Bet</span>
      <span className="text-trophy-gold"> Sites</span>
    </span>
  )
}

function AgeBadge({ compact = false }: { compact?: boolean }) {
  const size = compact ? "w-5 h-5 text-[7px]" : "w-9 h-9 lg:w-10 lg:h-10 text-xs lg:text-sm"
  return (
    <div
      role="img"
      aria-label="Adults only — you must be 18 or over to use this website"
      className={`${size} bg-white border-2 border-crimson flex items-center justify-center flex-shrink-0`}
    >
      <span className="text-crimson font-black leading-none">18+</span>
    </div>
  )
}

export function SiteTopBar() {
  return (
    <header className="sticky top-0 z-40 text-white brand-flat-hero border-b-0" role="banner">
      <div className="sport-rule-bar" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <div className="md:hidden relative flex items-center justify-center px-3 h-10 border-b-2 border-[hsl(var(--pitch-green))]">
        <Link href="/" className="flex items-center gap-1.5" aria-label={`${SITE_NAME} — home`}>
          <Image src="/logo.png" alt="" width={20} height={20} className="w-5 h-5" aria-hidden />
          <BrandWordmark compact />
        </Link>
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <AgeBadge compact />
        </div>
      </div>

      <div className="hidden md:flex container mx-auto px-4 items-center justify-center h-14 lg:h-16 relative border-b-2 border-[hsl(var(--pitch-green))]">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE_NAME} — home`}>
          <Image src="/logo.png" alt="" width={44} height={44} className="w-9 h-9 lg:w-11 lg:h-11" aria-hidden />
          <BrandWordmark />
        </Link>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <AgeBadge />
        </div>
      </div>
    </header>
  )
}
