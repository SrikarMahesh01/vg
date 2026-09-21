# About Us — Contributor README

## What this hub is
Governance, financial, and cultural credibility hub — aimed at investors, procurement/RFP teams, partners, and prospective employees.

## Routes you own
- `/about/our-story` — Vision & Mission
- `/about/leadership` — Leadership & Board Directory
- `/about/sustainability` — Sustainability & CSR
- `/about/investor-relations` — Investor Relations & Financials
- `/about/innovation-ecosystem` — Innovation Ecosystem & Partnerships
- `/about/alumni` — Alumni Network

## Already built for you — DO NOT MODIFY
Global shell + all shared primitives.

## What you need to build (wireframes exist for all 6 — follow them exactly)
- Our Story: StatementHero ("Engineering trust into every enterprise we touch") → 2-col Vision/Mission split (CardGrid, columns=2) → horizontal timeline (CardGrid, columns=4, as milestone cards) → Values grid (CardGrid, columns=4) → QuoteBlock (CEO) → CTABand → Leadership
- Leadership & Board: StatementHero → PhotoGrid columns=4 (Executive Leadership) → PhotoGrid columns=6 (Board of Directors) → StatBand (governance stats) → QuoteBlock (philosophy) → CTABand → Investor Relations
- Sustainability & CSR: SplitHero → CardGrid columns=3 (ESG Pillars: Environment/Social/Governance) → StatBand (impact stats) → ChartPanel (emissions trend) → CardGrid columns=3 (Community Programs) → a report-download band (reuse CTABand with a secondary "download" style, or flag to team if a variant is needed) → CTABand → Contact
- Investor Relations: SplitHero (with stock/valuation card) → StatBand (financial metrics) → ChartPanel (revenue growth) → DataTable (reports & filings) → CardGrid columns=3 (events/earnings calendar) → CTABand → email IR
- Innovation Ecosystem: StatementHero → LogoStrip (GCP/AWS/Azure/Celonis/NVIDIA) → CardGrid columns=3 (R&D labs) → SplitHero-style section for Startup/Academic program (or CardGrid columns=2) → StatBand (patents/publications) → CTABand → partnership application
- Alumni Network: StatementHero ("Once Virtue, Always Virtue") → SignupCard (Network Sign-Up) → PhotoGrid columns=3 (Alumni Spotlight) → CardGrid columns=4 (Perks/Benefits) → a simple list section for Upcoming Events (reuse DataTable or CardGrid columns=1 — your call, keep it consistent) → CTABand → boomerang roles

Each subsection's `layout.tsx` tab bar order must match: `Our Story | Leadership & Board | Sustainability & CSR | Investor Relations | Innovation Ecosystem | Alumni Network`.

## Rules / Before opening a PR
Same as template above.
