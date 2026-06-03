import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface LegalPageShellProps {
  eyebrow: string
  title: string
  updatedAt?: string
  children: ReactNode
}

export function LegalPageShell({ eyebrow, title, updatedAt, children }: LegalPageShellProps) {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <Link
        href="/"
        aria-label="Tilbage til forsiden"
        className="inline-flex items-center gap-2 text-white/85 hover:text-casino-gold transition-colors mb-6 text-[11px] font-black tracking-[0.14em] uppercase"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        Tilbage til forsiden
      </Link>

      <article
        className="relative max-w-4xl mx-auto rounded-sm overflow-hidden border border-casino-gold/25 border-t-2 border-t-casino-gold bg-[#0a0a0a] shadow-[0_10px_40px_rgba(0,0,0,0.55)]"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <header className="px-6 md:px-10 pt-8 md:pt-10 pb-6 border-b border-casino-gold/20">
          <div className="text-[10px] md:text-[11px] font-black tracking-[0.22em] text-casino-gold uppercase border-b border-casino-gold/60 pb-1 inline-block mb-4">
            {eyebrow}
          </div>
          <h1
            itemProp="name"
            className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3"
          >
            {title}
          </h1>
          {updatedAt && (
            <p className="text-[11px] text-gray-400 tracking-[0.08em] uppercase">
              Senest opdateret - {updatedAt}
            </p>
          )}
        </header>

        <div
          itemProp="mainContentOfPage"
          className="px-6 md:px-10 py-8 md:py-10 space-y-8 text-[14px] md:text-[15px] leading-relaxed text-gray-300"
        >
          {children}
        </div>
      </article>
    </div>
  )
}

interface LegalSectionProps {
  index: string
  eyebrow: string
  title: string
  children: ReactNode
}

export function LegalSection({ index, eyebrow, title, children }: LegalSectionProps) {
  return (
    <section className="scroll-mt-24">
      <div className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-2">
        {index} - {eyebrow}
      </div>
      <h2 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h2>
      <div className="space-y-3 text-gray-300">{children}</div>
    </section>
  )
}
