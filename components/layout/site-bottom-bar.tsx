import Link from "next/link"
import Image from "next/image"
import { FOOTER_NAV, SITE_DOMAIN, SITE_NAME } from "@/lib/site-config"
import { editorialLastUpdatedLabel } from "@/lib/editorial-dates"

const SUPPORT_ORGS = [
  { href: "https://www.gamblingcare.ie/", src: "/gamble.webp", label: "Gambling Care Ireland — free gambling support" },
  { href: "https://www.exclusionregister.ie/", src: "/gamstop.svg", label: "National Exclusion Register — Irish self-exclusion" },
  { href: "https://www.gamblersanonymous.ie/", src: "/anonymos.avif", label: "Gamblers Anonymous Ireland" },
  { href: "https://www.rutlandcentre.ie/", src: "/gordon.png", label: "Rutland Centre — addiction treatment" },
] as const

function BrandWordmark() {
  return (
    <span className="font-display text-base sm:text-lg font-bold tracking-[0.1em] uppercase">
      <span className="text-trophy-gold">Irish</span>
      <span className="text-white"> Top</span>
      <span className="text-white"> Bet</span>
      <span className="text-trophy-gold"> Sites</span>
    </span>
  )
}

function AgeBadgeLarge() {
  return (
    <div
      role="img"
      aria-label="Adults only — you must be 18 or over"
      className="w-14 h-14 sm:w-16 sm:h-16 bg-white border-[3px] border-crimson flex items-center justify-center shrink-0"
    >
      <span className="text-crimson font-black text-lg sm:text-xl leading-none">18+</span>
    </div>
  )
}

export function SiteBottomBar() {
  const lastUpdated = editorialLastUpdatedLabel()

  return (
    <footer className="relative bg-pitch-deep text-white mt-14 border-t-4 border-trophy-gold" role="contentinfo">
      <div className="sport-rule-bar" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <div className="bg-crimson/20 border-b-2 border-crimson/40">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <AgeBadgeLarge />
          <p className="text-center sm:text-left text-sm font-semibold text-white font-body max-w-xl">
            This website is for Irish residents aged <span className="text-trophy-gold">18 and over</span> only. Gambling
            can be addictive — please play responsibly.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:gap-10 items-start">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link
              href="/"
              className="group flex items-center gap-3 hover:opacity-95 transition-opacity"
              aria-label={`${SITE_NAME} — return to homepage`}
            >
              <div className="w-11 h-11 flex items-center justify-center border-2 border-trophy-gold bg-white/5 group-hover:bg-white/10 transition-colors">
                <Image src="/logo.png" alt="" width={32} height={32} aria-hidden />
              </div>
              <BrandWordmark />
            </Link>
            <p className="mt-3 text-xs text-slate-400 max-w-xs font-body leading-relaxed">
              Flat editorial tables for Irish-licensed bookmakers — we publish comparisons, not betting services.
            </p>
            <p className="mt-3 text-[11px] text-slate-500 font-body">
              Rankings last reviewed{" "}
              <time dateTime={new Date().toISOString().slice(0, 10)} className="text-slate-300 font-medium">
                {lastUpdated}
              </time>
            </p>
          </div>

          <nav aria-label="Legal and information pages" className="text-center lg:text-left">
            <h2 className="font-display text-sm font-bold text-trophy-gold mb-3 uppercase tracking-widest">Information</h2>
            <ul className="space-y-2 text-sm list-none p-0 m-0">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-trophy-gold font-medium transition-colors font-body"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-2 border-white/15 bg-white/[0.04] px-4 py-4">
            <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-400 font-body">
              <span className="inline-flex items-center gap-1.5 text-crimson font-bold text-xs mb-1.5">
                <span className="w-5 h-5 bg-white border border-crimson inline-flex items-center justify-center text-[8px]">
                  18+
                </span>
                Important
              </span>
              <span className="block mt-1">
                Content on {SITE_DOMAIN} is intended for Irish residents aged 18+. Offers may change without notice; always
                read each operator&apos;s full terms before registering. We compare Irish-licensed bookmakers only and do
                not accept wagers. Outbound links may earn a referral commission. When the fun stops, stop.
              </span>
            </p>
          </div>
        </div>

        <section aria-labelledby="footer-safer-gambling-heading" className="mt-10 pt-8 border-t-2 border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
            <div className="text-center sm:text-left">
              <h2 id="footer-safer-gambling-heading" className="font-display text-base font-bold text-trophy-gold uppercase tracking-wide">
                Safer gambling support
              </h2>
              <p className="text-xs text-slate-500 mt-1 max-w-md font-body leading-relaxed">
                Free, confidential help from Irish charities — available if betting stops feeling like entertainment.
              </p>
            </div>
          </div>
          <nav
            aria-label="Safer gambling organisation links"
            className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4"
          >
            {SUPPORT_ORGS.map((org) => (
              <Link
                key={org.href}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity bg-white px-2.5 py-1.5 border-2 border-white/20 hover:border-trophy-gold/50"
                aria-label={org.label}
              >
                <img src={org.src} alt="" className="h-7 sm:h-8 w-auto object-contain" />
              </Link>
            ))}
          </nav>
        </section>

        <div className="mt-8 pt-6 border-t-2 border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center sm:text-left">
          <p className="text-slate-500 text-xs sm:text-sm font-body">
            © {new Date().getFullYear()} {SITE_DOMAIN}. All rights reserved.
          </p>
          <p className="text-crimson font-bold text-xs sm:text-sm tracking-wide font-body">
            18+ · Republic of Ireland only · GamblingCare.ie
          </p>
        </div>
      </div>
    </footer>
  )
}
