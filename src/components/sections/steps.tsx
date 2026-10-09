"use client";

import * as React from "react";
import { STEPS } from "@/lib/content";
import { UserPlus, Compass, GitMerge, Trophy } from "lucide-react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

const STEP_ICONS = [UserPlus, Compass, GitMerge, Trophy];

export function StepsSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <span>The Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            How it works from Day 1 to Production
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A clear, structured 4-step sequence engineered to turn first-time contributors into confident open source developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-[3.75rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {STEPS.map((step, index) => {
            const Icon = STEP_ICONS[index % STEP_ICONS.length];
            const delay = `reveal-delay-${index + 1}` as const;

            return (
              <div
                key={step.number}
                className={`group relative card-shine rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-sky-500/8 hover:-translate-y-1.5 reveal-hidden ${delay}`}
              >
                {/* Top edge glow */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-primary/35 group-hover:text-primary/70 transition-colors duration-300">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-sky-500/18 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-400 group-hover:bg-sky-300 transition-colors" />
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                    Phase {step.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
