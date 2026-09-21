import Link from "next/link";
import type { SplitHeroProps } from "@/lib/types/sections";

export function SplitHero({
  heading,
  body,
  imageAlt,
  primaryCta,
  secondaryCta,
}: SplitHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 md:text-6xl">{heading}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-(--color-text-muted)">{body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="rounded bg-black px-6 py-3 text-sm font-semibold text-white"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded border border-black/10 px-6 py-3 text-sm font-semibold text-zinc-900"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-black/10 bg-zinc-100 p-8">
          <div className="flex min-h-70 items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-white text-sm text-zinc-500">
            {imageAlt || "Placeholder hero visual"}
          </div>
        </div>
      </div>
    </section>
  );
}
