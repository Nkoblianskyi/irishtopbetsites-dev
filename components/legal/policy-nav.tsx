"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FOOTER_NAV } from "@/lib/site-config"

type PolicyNavProps = {
  variant?: "sidebar" | "bar"
}

export function PolicyNav({ variant = "sidebar" }: PolicyNavProps) {
  const pathname = usePathname()
  const isBar = variant === "bar"

  return (
    <nav aria-label="Legal and information pages">
      <p
        className={`font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 ${
          isBar ? "mb-2 px-1" : "mb-3"
        }`}
      >
        Information
      </p>
      <ul
        className={
          isBar
            ? "flex gap-1 overflow-x-auto pb-1 scrollbar-thin list-none m-0 p-0"
            : "flex flex-col gap-0 list-none m-0 p-0 border border-slate-200 rounded-sm bg-white divide-y divide-slate-200"
        }
      >
        {FOOTER_NAV.map((item) => {
          const active = pathname === item.href
          return (
            <li key={item.href} className={isBar ? "shrink-0" : undefined}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  isBar
                    ? `inline-block whitespace-nowrap px-3 py-2 text-sm font-medium font-body border rounded-sm transition-colors ${
                        active
                          ? "border-pitch-navy bg-pitch-navy text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`
                    : `block px-4 py-2.5 text-sm font-medium font-body transition-colors ${
                        active
                          ? "bg-slate-50 text-pitch-navy border-l-2 border-l-pitch-navy -ml-px pl-[calc(1rem-1px)]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-pitch-navy"
                      }`
                }
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
