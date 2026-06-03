import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { PolicyNav } from "@/components/legal/policy-nav"
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site-config"
import { editorialLastUpdatedLabel } from "@/lib/editorial-dates"

interface PolicyDocumentFrameProps {
  title: string
  subtitle?: string
  children: ReactNode
  lastUpdated?: string
}

export function PolicyDocumentFrame({
  title,
  subtitle,
  children,
  lastUpdated,
}: PolicyDocumentFrameProps) {
  const formattedDate = lastUpdated ?? editorialLastUpdatedLabel()

  return (
    <div className="legal-page-shell border-y border-slate-200/90 bg-slate-100/95">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 font-body text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-1.5 list-none m-0 p-0">
            <li>
              <Link href="/" className="hover:text-pitch-navy transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-slate-400">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-pitch-navy font-medium" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        <div className="lg:hidden mb-6">
          <PolicyNav variant="bar" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 xl:gap-12">
          <aside className="hidden lg:block">
            <PolicyNav variant="sidebar" />
            <p className="mt-6 text-[11px] leading-relaxed text-slate-500 font-body border-t border-slate-200 pt-4">
              {SITE_NAME} is an independent UK comparison publisher on irishtopbetsites.com. We do not operate gambling services.
            </p>
          </aside>

          <div className="min-w-0">
            <header className="bg-white border border-slate-200 rounded-sm px-5 py-6 sm:px-8 sm:py-7 mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 font-body mb-2">
                {SITE_DOMAIN}
              </p>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-pitch-navy tracking-tight leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-3 text-base text-slate-600 leading-relaxed font-body max-w-2xl">{subtitle}</p>
              )}
              <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500 font-body border-t border-slate-100 pt-4">
                <div>
                  <dt className="inline font-semibold text-slate-700">Last updated: </dt>
                  <dd className="inline">{formattedDate}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-slate-700">Audience: </dt>
                  <dd className="inline">UK residents, 18+</dd>
                </div>
              </dl>
            </header>

            <article className="legal-prose bg-white border border-slate-200 rounded-sm px-5 py-6 sm:px-8 sm:py-8">
              {children}
            </article>

            <footer className="mt-6 border border-slate-200 bg-white rounded-sm px-4 py-3 text-center sm:text-left">
              <p className="text-xs leading-relaxed text-slate-500 font-body m-0">
                <span className="font-semibold text-crimson">18+</span> · UK residents only · Gambling can be addictive ·
                When the fun stops, stop · BeGambleAware.org
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
