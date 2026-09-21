"use client";

import { useState } from "react";
import type { FAQAccordionProps } from "@/lib/types/sections";

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      {items.map((item, i) => (
        <div key={item.question} className="border-b border-black/10 py-4">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left font-medium text-zinc-900"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.question}</span>
            <span>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="mt-2 text-sm leading-6 text-(--color-text-muted)">{item.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
}
