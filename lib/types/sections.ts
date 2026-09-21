export interface StatBandProps {
  stats: { value: string; label: string }[];
}

export interface CardGridProps {
  columns: 2 | 3 | 4;
  cards: { title: string; body: string; icon?: string; image?: string }[];
}

export interface CTABandProps {
  heading: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface SplitHeroProps {
  heading: string;
  body: string;
  imageAlt?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface StatementHeroProps {
  heading: string;
  body: string;
}

export interface ChartPanelProps {
  chartType: "line" | "bar";
  narrativeHeading: string;
  narrativeBody: string;
  data: { label: string; value: number }[];
}

export interface TabbedPanelProps {
  tabs: { label: string; heading: string; body: string }[];
}

export interface LogoStripProps {
  heading?: string;
  logos: { name: string }[];
}

export interface DataTableProps {
  columns: string[];
  rows: string[][];
}

export interface FAQAccordionProps {
  items: { question: string; answer: string }[];
}

export interface QuoteBlockProps {
  quote: string;
  name: string;
  title: string;
}

export interface PhotoGridProps {
  columns: 3 | 4 | 6;
  people: { name: string; title: string; linkedin?: string }[];
}

export interface SignupCardProps {
  heading: string;
  body: string;
  submitLabel: string;
}
