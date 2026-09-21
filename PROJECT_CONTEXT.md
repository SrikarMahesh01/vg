# VG Web Prototype Project Context

This repository is an internal marketing and service-site prototype for Virtue Group. The goal is to establish a reusable shell for multiple business hubs without adding CMS or backend complexity.

## Goals
- Build a static Next.js prototype that can be extended by multiple contributors.
- Provide shared layout, types, and section primitives for consistent page composition.
- Keep the app content-driven and easy to update with local TypeScript data files.

## Tech stack
- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS
- Recharts and lucide-react for future charts and icons
- Prettier and ESLint configuration for team consistency

## Structure
- app/ — route-level pages
- components/layout/ — shell components such as header, footer, and CTA blocks
- components/sections/ — reusable content sections
- lib/content/ — page content data
- lib/types/ — shared TypeScript contracts

## Working model
- Each hub branch should focus on content and route-level composition.
- Shared shell and type foundations should be treated as stable contracts.
