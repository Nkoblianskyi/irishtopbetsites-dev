import type { BettingSite, HorizontalBanner } from "../types"

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "BetVictor",
    logo: "/betvictor.webp",
    rating: 9.7,
    bonus: "Get £30 in Free Bets",
    description: "Popular UK bookmaker",
    features: ["Competitive Odds", "Cash Out", "Bet Builder"],
    welcomeOffer: "Bet £10",
    terms:
      "18+ New customers only. Opt in, bet £10 or more on any football market at minimum 1/1 odds within 7 days of registration. No cash out. Get £30 in Free Football Bets, selected markets. Free Bets expire in 7 days. T&Cs apply. BeGambleAware.org",
    userRating: 9.7,
    votes: 8847,
    link: "https://www.betvictor.com/",
    backgroundImage: "/banner-hor.jpg",
  },
  {
    id: 2,
    name: "BoyleSports",
    logo: "/boylesports.webp",
    rating: 9.5,
    bonus: "Get £40 in Free Bets",
    description: "Retail heritage, UK online",
    features: ["Football & Racing", "Request-a-Bet", "Cash Out"],
    welcomeOffer: "Bet £10",
    terms:
      "18+ New UK customers (Excluding NI) only. Min Deposit £10. Min stake £10. Min odds Evs. Free bet applied on 1st settlement of any qualifying bet. 30 days to qualify. Free bets expire in 7 days. Cashed out/Free Bets won't apply. Account & Payment method restrictions apply. 1 Free Bet offer per customer, household & IP Address only. T&Cs apply. BeGambleAware.org",
    userRating: 9.5,
    votes: 9149,
    link: "https://www.boylesports.com/",
    backgroundImage: "/banner-hor.jpg",
  },
    {
    id: 3,
    name: "LiveScore Bet",
    logo: "/livescorebet.png",
    rating: 9.4,
    bonus: "Get £30 in Free Bets",
    description: "Sportsbook from a familiar scores brand",
    features: ["Live Betting", "Price Boosts", "Cash Out"],
    welcomeOffer: "Bet £10",
    terms:
      "18+ New members only. £10+ bet on sportsbook (ex. virtuals) at 1.5 min odds, settled within 14 days. Free Bets: accept in 7 days, valid 7 days on sportsbook only. 2 x £5 Free Bets for Bet Builder only. Stake not returned. T&Cs + deposit exclusions apply. BeGambleAware.org",
    userRating: 9.4,
    votes: 8617,
    link: "https://www.livescorebet.com/",
    backgroundImage: "/banner-hor.jpg",
  },
  {
    id: 4,
    name: "BetFred",
    logo: "/betfred.webp",
    rating: 9.3,
    bonus: "Get £50 in Free Bets",
    description: "Established UK bookmaker",
    features: ["Best Odds Guaranteed", "Extra Places", "Acca Insurance"],
    welcomeOffer: "Bet £10",
    terms:
      "18+ New customers only. Register, deposit with Debit Card, and place first bet £10+ at Evens (2.0)+ on Sports within 7 days to get 3 x £10 in Sports Free Bets & 2 x £10 in Acca Free Bets within 10 hours of settlement. 7-day expiry. Eligibility & payment exclusions apply. Full T&Cs apply. BeGambleAware.org",
    userRating: 9.3,
    votes: 9035,
    link: "https://www.betfred.com/",
    backgroundImage: "/banner-hor.jpg",
  },

  {
    id: 5,
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    rating: 9.2,
    bonus: "Get £30 in Free Bets",
    description: "High-street name, full online service",
    features: ["Football & Racing", "Boosts", "Cash Out"],
    welcomeOffer: "Bet £5",
    terms:
      "18+ New UK+ROI Customers only. Certain deposit methods & bet types excluded. Min first £5 bet within 14 days of account registration at min odds 1/2 to get 6 x £5 free bets (selected sportsbook markets only, valid 7 days, stake not returned). Restrictions + T&Cs apply. BeGambleAware.org",
    userRating: 9.2,
    votes: 9671,
    link: "https://www.ladbrokes.com/",
    backgroundImage: "/banner-hor.jpg",
  },
  {
    id: 6,
    name: "Spreadex Sports",
    logo: "/spreadex.webp",
    rating: 9.1,
    bonus: "Get £60 in Free Bets",
    description: "Fixed odds and spread betting",
    features: ["Live Streaming", "In-Play", "Cash Out"],
    welcomeOffer: "Bet £10",
    terms:
      "18+ New customers only. Place a £10 fixed odds single or £10 each-way bet at minimum odds of 1/2 to get 3 x £10 free fixed odds bets, 3 x £5 Total Goals football spread bets, 3 x £5 Winning Favourites spread bets and a £1 racing Race Index spread bet. Free bets valid for 28 days. Spread betting losses can exceed deposit. GambleAware.org",
    userRating: 9.1,
    votes: 7584,
    link: "https://www.spreadex.com/",
    backgroundImage: "/banner-hor.jpg",
  },
]

export const horizontalBanners: HorizontalBanner[] = [
  {
    id: 1,
    name: "BetVictor",
    logo: "/betvictor.png",
    bonus: "Get £30 in Free Bets",
    welcomeOffer: "Bet £10",
    link: "https://www.betvictor.com/",
    backgroundImage: "/banner.webp",
    mobileBackgroundImage: "/banner-mobile.webp",
    terms:
      "18+ New customers only. Opt in, bet £10 or more on any football market at minimum 1/1 odds within 7 days of registration. No cash out. Get £30 in Free Football Bets, selected markets. Free Bets expire in 7 days. T&Cs apply. BeGambleAware.org",
  },
  {
    id: 2,
    name: "BetVictor",
    logo: "/betvictor.png",
    bonus: "Get £30 in Free Bets",
    welcomeOffer: "Bet £10",
    link: "https://www.betvictor.com/",
    backgroundImage: "/banner.webp",
    mobileBackgroundImage: "/banner-mobile.webp",
    terms:
      "18+ New customers only. Opt in, bet £10 or more on any football market at minimum 1/1 odds within 7 days of registration. No cash out. Get £30 in Free Football Bets, selected markets. Free Bets expire in 7 days. T&Cs apply. BeGambleAware.org",
  },
]

/** Direct operator homepages for /go/[slug] fallback only — no affiliate trackers. */
export const operatorDirectLinks: Record<string, string> = {
  betvictor: "https://www.betvictor.com/",
  boylesports: "https://www.boylesports.com/",
  betfred: "https://www.betfred.com/",
  livescorebet: "https://www.livescorebet.com/uk/",
  "live-score-bet": "https://www.livescorebet.com/uk/",
  ladbrokes: "https://www.ladbrokes.com/",
  spreadex: "https://www.spreadex.com/",
  "spreadex-sports": "https://www.spreadex.com/",
}
