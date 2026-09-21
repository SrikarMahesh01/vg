import { LogoStrip } from "@/components/sections/LogoStrip";
import { CardGrid } from "@/components/sections/CardGrid";
import { StatBand } from "@/components/sections/StatBand";
import { CTABand } from "@/components/layout/CTABand";
import { homeLandingContent } from "@/lib/content/home/landing";

export default function MarketingHomePage() {
  const content = homeLandingContent;

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Virtue Group
            </p>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-zinc-950 md:text-6xl">
              {content.hero.heading}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-(--color-text-muted)">
              {content.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact/sales-inquiries"
                className="rounded bg-black px-6 py-3 text-sm font-semibold text-white"
              >
                Talk to an Architect
              </a>
              <a
                href="/services/cloud-services"
                className="rounded border border-black/10 px-6 py-3 text-sm font-semibold text-zinc-900"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-zinc-100 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="text-sm text-zinc-500">Delivery Model</div>
                <div className="mt-3 text-2xl font-bold">Hybrid</div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="text-sm text-zinc-500">Focus</div>
                <div className="mt-3 text-2xl font-bold">AI + Cloud</div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm sm:col-span-2">
                <div className="text-sm text-zinc-500">Transformation Outcomes</div>
                <div className="mt-3 text-xl font-semibold">
                  Faster product delivery, lower risk, stronger governance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoStrip heading="Trusted by enterprise leaders" logos={content.partnerLogos} />
      <CardGrid columns={3} cards={content.valueProps} />
      <StatBand stats={content.stats} />
      <CTABand {...content.cta} />
    </main>
  );
}
