import type {
  StatBandProps,
  CardGridProps,
  CTABandProps,
  SplitHeroProps,
  StatementHeroProps,
  ChartPanelProps,
  TabbedPanelProps,
  LogoStripProps,
  DataTableProps,
  FAQAccordionProps,
  QuoteBlockProps,
  PhotoGridProps,
  SignupCardProps,
} from "./sections";

type Section =
  | ({ type: "statBand" } & StatBandProps)
  | ({ type: "cardGrid" } & CardGridProps)
  | ({ type: "chartPanel" } & ChartPanelProps)
  | ({ type: "tabbedPanel" } & TabbedPanelProps)
  | ({ type: "logoStrip" } & LogoStripProps)
  | ({ type: "dataTable" } & DataTableProps)
  | ({ type: "faqAccordion" } & FAQAccordionProps)
  | ({ type: "quoteBlock" } & QuoteBlockProps)
  | ({ type: "photoGrid" } & PhotoGridProps)
  | ({ type: "signupCard" } & SignupCardProps);

export interface PageContent {
  hero:
    | ({ variant: "split" } & SplitHeroProps)
    | ({ variant: "statement" } & StatementHeroProps);
  sections: Section[];
  cta: CTABandProps;
}
