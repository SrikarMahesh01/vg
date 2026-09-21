# Insights & Resources — Contributor README

## What this hub is
Thought-leadership and content hub — blog, case studies catalog, whitepapers, analyst recognition.

## Routes you own
- `/insights/blog`
- `/insights/case-studies`
- `/insights/whitepapers`
- `/insights/analyst-recognition`

## Already built for you — DO NOT MODIFY
Global shell + all shared primitives.

## What you need to build
No dedicated wireframe exists yet. These are content-listing pages — build each as: StatementHero → CardGrid (article/case-study/whitepaper teaser cards, columns=3) → CTABand. `analyst-recognition` is more of a logo/badge showcase — LogoStrip + CardGrid works well there. Since there's no CMS, list items are just entries in the page's content file for now (a fixed array of teaser objects) — this is the hub most likely to get a real CMS first, so keep the data shape clean.

## Rules / Before opening a PR
Same as template above.
