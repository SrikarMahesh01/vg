# Contact & Global Operations — Contributor README

## What this hub is
Conversion hub — sales inquiries, office locations, legal pages.

## Routes you own
- `/contact/sales-inquiries` — UI only, form stubbed (future: `leads.py`)
- `/contact/global-offices`
- `/contact/legal-privacy`

## Already built for you — DO NOT MODIFY
Global shell + all shared primitives.

## What you need to build
No dedicated wireframe exists yet. `sales-inquiries`: build the lead form UI fully, but stub the submit handler exactly like `careers/jobs` — document the field shape in `lib/types/forms.ts`. `global-offices`: CardGrid or DataTable listing office locations. `legal-privacy`: plain long-form text page — this one doesn't need most section primitives, a simple prose layout with the global Header/Footer is enough.

## Rules / Before opening a PR
Same as template above, plus: since almost every other hub's CTA band links here (`/contact/sales-inquiries`), get this page working early — other hub owners are depending on this route existing, not just placeholder text.
