# Services — Contributor README

## What this hub is
The technical credibility hub — one flagship deep-dive template reused across all 8 service lines (the wireframes explicitly note the Cloud Services page is "reused by all service lines").

## Routes you own
- `/services/cloud-services` — Cloud Services (GCP Architecture & Hosting)
- `/services/cloud-migration`
- `/services/ai-generative` — AI & Generative AI (Gemini Models)
- `/services/data-analytics-mlops`
- `/services/digital-product-engineering`
- `/services/enterprise-cybersecurity`
- `/services/application-modernization`
- `/services/enterprise-automation` — RPA & Celonis

## Already built for you — DO NOT MODIFY
Global shell + all shared primitives.

## What you need to build
Wireframes exist for Cloud Services and Cloud Migration — use these two as the literal template for the other 6 service pages (same section order, same primitives, different copy/stats):

Standard service-page skeleton (confirmed from both wireframes):
`SplitHero (with sticky in-page sub-nav: Overview/Architecture/Case Studies/FAQ) → StatBand (outcome stats) → CardGrid columns=4 (capability/process steps) → TabbedPanel (capability deep-dives) → LogoStrip (partner/tech badges) → CardGrid columns=3 (related case studies) → FAQAccordion → LogoStrip-style "related services" cross-link chips → CTABand → Mega Footer`

Cloud Migration additionally has an interactive ROI Calculator — this is the one section without an existing primitive. Build it as a new client component under `components/sections/ROICalculator.tsx` (not a fork of an existing primitive), and flag it to the team since AI & Generative AI or other service lines may want to reuse it later.

For the 6 service lines without a dedicated wireframe, apply the same skeleton above — this is intentional, it's meant to be a single reusable template across the hub.

## Rules / Before opening a PR
Same as template above, plus: if you build `ROICalculator`, add its prop contract to `lib/types/sections.ts` in its own PR commit so the team can review it like any other shared primitive.
