# Home — Contributor README

## What this hub is
The landing hub — first impression, core value proposition, and a "greatest hits" pull from every other hub (partnerships, case studies, insights).

## Routes you own
- `/` — Main Landing
- `/partnerships` — Strategic Partnerships & Ecosystems
- `/transformations` — Featured Transformations (ROI Case Studies)
- `/insights-preview` — Latest Insights & Thinking

## Already built for you — DO NOT MODIFY
- Global shell: Header, Footer, Breadcrumb, SubNavTabs, CTABand (`/components/layout`)
- Shared primitives: StatBand, CardGrid, SplitHero, StatementHero, ChartPanel,
  TabbedPanel, LogoStrip, DataTable, FAQAccordion, QuoteBlock, PhotoGrid, SignupCard
  (`/components/sections`)
- Type contracts (`/lib/types/sections.ts`, `/lib/types/page.ts`)

If a primitive doesn't support what your page needs, do NOT fork a one-off version —
raise it with the team first so the shared component gets extended once, correctly.

## What you need to build
No dedicated wireframe was produced for Home — build using the same primitives and page skeleton as the other hubs:
- Main Landing: SplitHero → LogoStrip (partners) → CardGrid (value props) → StatBand → CTABand
- Partnerships: StatementHero → LogoStrip → CardGrid
- Transformations: StatementHero → CardGrid (3-col case study cards) → StatBand
- Insights preview: StatementHero → CardGrid (article teaser cards) → CTABand

## Rules / Before opening a PR
Same as template above. Note: since you're the first hub in, your PR likely also includes the global shell + primitives themselves — call that out explicitly in the PR description so reviewers know it's foundational, not just Home content.
