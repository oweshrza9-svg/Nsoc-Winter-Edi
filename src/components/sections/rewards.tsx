"use client";

import * as React from "react";
import { REWARDS } from "@/lib/content";
import { Gift, FileBadge, Scroll, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

const REWARD_ICONS = [Gift, FileBadge, Scroll, Sparkles];

export function RewardsSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  useScrollReveal(sectionRef);
  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative bg-secondary/20" id="rewards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <span>Recognition & Perks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Rewards for your merged work
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Contributors earn recognition for their merged work, and top performers receive verified perks and honors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REWARDS.map((reward, index) => {
            const Icon = REWARD_ICONS[index % REWARD_ICONS.length];
            return (
              <div
                key={reward.title}
                className={`group relative card-shine rounded-2xl border border-border/80 bg-card/80 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 reveal-hidden reveal-delay-${index + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/50">
                      {reward.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-1">
                    {reward.category}
                  </span>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {reward.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {reward.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-1.5 text-xs text-primary font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>Official Benefit</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
