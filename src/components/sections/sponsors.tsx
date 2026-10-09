"use client";

import { SPONSORS } from "@/lib/content";
import { ExternalLink, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import * as React from "react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

const SPONSOR_ICONS = [Trophy, Sparkles, ShieldCheck];

export function SponsorsSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  useScrollReveal(sectionRef);
  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative bg-secondary/30" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <span>Partners & Sponsors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Backed by builders & industry leaders
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Organizations and communities that believe in open source and invest in the developers who build it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SPONSORS.map((sponsor, idx) => {
            const Icon = SPONSOR_ICONS[idx % SPONSOR_ICONS.length];

            return (
              <div
                key={sponsor.name}
                className={`group relative card-shine rounded-2xl border border-border/80 bg-card/80 backdrop-blur-xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 reveal-hidden reveal-delay-${idx + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/40">
                      {sponsor.tier}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-1">
                    {sponsor.category}
                  </span>

                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span>{sponsor.name}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {sponsor.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <a
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Visit Partner Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
