# Careers — Contributor README

## What this hub is
Recruiting hub — culture, hiring process, and two form-driven pages that will eventually connect to a FastAPI backend.

## Routes you own
- `/careers/why-work-with-us`
- `/careers/students-graduates`
- `/careers/diversity-inclusion`
- `/careers/jobs` — UI only, form/search stubbed (future: `jobs.py`)
- `/careers/hiring-process`
- `/careers/talent-community` — UI only, form stubbed (future: `talent.py`)

## Already built for you — DO NOT MODIFY
Global shell + all shared primitives, including `SignupCard` (useful for `talent-community`).

## What you need to build
No dedicated wireframe exists yet. Standard content pages (`why-work-with-us`, `students-graduates`, `diversity-inclusion`, `hiring-process`): StatementHero → CardGrid → QuoteBlock (employee testimonial) → CTABand.

For `jobs` and `talent-community`: build the full UI (search/filter inputs, job listing cards, signup form) but wire `onSubmit`/search handlers to a stub function only — do not call any real endpoint. Document the expected request/response shape in `lib/types/forms.ts` so backend integration is a drop-in later, not a redesign.

## Rules / Before opening a PR
Same as template above, plus: any stub form must show a visible (fake) success/confirmation state so the prototype still feels complete in a click-through demo.
