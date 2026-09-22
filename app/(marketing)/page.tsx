import { homeLandingContent } from "@/lib/content/home/landing";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { KeyOfferings } from "@/components/sections/home/KeyOfferings";
import { WhatWeOffer } from "@/components/sections/home/WhatWeOffer";
import { FeaturedIndustries } from "@/components/sections/home/FeaturedIndustries";
import { ImpactSection } from "@/components/sections/home/ImpactSection";
import { CareersCTAStrip } from "@/components/sections/home/CareersCTAStrip";

export default function MarketingHomePage() {
  const content = homeLandingContent;

  return (
    <main>
      <HeroSection content={content.hero} />
      <KeyOfferings items={content.keyOfferings} />
      <WhatWeOffer content={content.whatWeOffer} />
      <FeaturedIndustries items={content.featuredIndustries} />
      <ImpactSection content={content.impact} />
      <CareersCTAStrip content={content.careersCta} />
    </main>
  );
}
