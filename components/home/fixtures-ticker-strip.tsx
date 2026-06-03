"use client"

import { useEffect, useState } from "react"

interface FixtureItem {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  time: string
  league: string
}

const FALLBACK_FIXTURES: FixtureItem[] = [
  { id: "1", homeTeam: "Arsenal", awayTeam: "Chelsea", date: "Sat 15", time: "17:30", league: "Premier League" },
  { id: "2", homeTeam: "Liverpool", awayTeam: "Man City", date: "Sun 16", time: "16:30", league: "Premier League" },
  { id: "3", homeTeam: "Newcastle", awayTeam: "Tottenham", date: "Mon 17", time: "20:00", league: "Premier League" },
  { id: "4", homeTeam: "Celtic", awayTeam: "Rangers", date: "Sun 16", time: "12:00", league: "Scottish Prem" },
  { id: "5", homeTeam: "Galopin Des Champs", awayTeam: "Field", date: "Sat 15", time: "15:30", league: "Cheltenham" },
]

export function FixturesTickerStrip() {
  const [fixtures, setFixtures] = useState<FixtureItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://www.scorebat.com/video-api/v3/")
        const data = await res.json()
        if (!data.response) throw new Error("No data")
        const mapped = data.response.slice(0, 12).map((match: { title: string; date: string; competition?: string }, i: number) => {
          const [homeTeam, awayTeam] = match.title.split(" - ")
          const dateObj = new Date(match.date)
          return {
            id: `fx-${i}`,
            homeTeam: homeTeam?.trim() || "TBD",
            awayTeam: awayTeam?.trim() || "TBD",
            date: dateObj.toLocaleDateString("en-GB", { weekday: "short", day: "numeric" }),
            time: dateObj.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false }),
            league: match.competition || "Match",
          }
        })
        setFixtures(mapped)
      } catch {
        setFixtures(FALLBACK_FIXTURES)
      } finally {
        setLoading(false)
      }
    }
    load()
    const interval = setInterval(load, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div
        className="h-10 mb-2 rounded-lg bg-slate-200 text-pitch-navy text-xs flex items-center justify-center font-medium"
        role="status"
        aria-live="polite"
      >
        Loading match ticker…
      </div>
    )
  }

  if (fixtures.length === 0) return null

  const track = [...fixtures, ...fixtures, ...fixtures]

  return (
    <div
      className="relative overflow-hidden h-10 mb-2 rounded-lg border border-pitch-navy/20"
      role="region"
      aria-label="Upcoming football fixtures ticker"
    >
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center bg-pitch-navy text-trophy-gold font-bold px-3 text-[10px] rounded-r-md border-r-2 border-crimson">
        <span className="leading-tight text-center">
          Match
          <br />
          board
        </span>
      </div>
      <div className="absolute inset-0 left-0 bg-slate-100 overflow-hidden">
        <div className="flex h-full items-center pl-24 animate-ticker-marquee hover:[animation-play-state:paused] w-max">
          {track.map((fx, index) => (
            <div
              key={`${fx.id}-${index}`}
              className="flex-shrink-0 px-5 border-l border-slate-300 min-w-[240px] text-center"
            >
              <div className="font-semibold text-xs text-pitch-navy">
                {fx.homeTeam} v {fx.awayTeam}
              </div>
              <div className="text-[10px] text-slate-600 mt-0.5">
                {fx.date} · {fx.time} · {fx.league}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
