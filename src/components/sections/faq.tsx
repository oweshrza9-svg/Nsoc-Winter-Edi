"use client";

import { FAQS } from "@/lib/content";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import * as React from "react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export function FaqSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  useScrollReveal(sectionRef);
  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about the upcoming NSoC Winter Edition 2026.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {FAQS.map((faq, index) => (
            <Accordion.Item
              key={faq.question}
              value={`item-${index}`}
              className={`rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl overflow-hidden transition-all duration-200 hover:border-primary/40 data-[state=open]:border-primary/60 data-[state=open]:shadow-md data-[state=open]:shadow-sky-500/5 reveal-hidden reveal-delay-${index % 4 + 1}`}
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between p-5 sm:p-6 text-left font-semibold text-foreground hover:text-primary transition-all duration-200 cursor-pointer group">
                  <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="pt-2 border-t border-border/40">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
