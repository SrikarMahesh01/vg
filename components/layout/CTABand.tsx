import Link from "next/link";
import type { CTABandProps } from "@/lib/types/sections";

export function CTABand({ heading, body, ctaLabel, ctaHref }: CTABandProps) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-12 md:flex-row md:items-center">
        <div>
          <h3 className="text-xl font-bold">{heading}</h3>
          {body && <p className="mt-2 text-white/70">{body}</p>}
        </div>
        <Link
          href={ctaHref}
          className="whitespace-nowrap rounded bg-white px-6 py-3 text-sm font-semibold text-black"
        >
          {ctaLabel} →
        </Link>
      </div>
    </section>
  );
}
