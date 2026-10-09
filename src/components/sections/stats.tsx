"use client";

import * as React from "react";
import { STATS } from "@/lib/content";
import { CountUp } from "@/components/count-up";
import { Users, Calendar, GitPullRequest, Globe2 } from "lucide-react";

const STAT_ICONS = [Users, Calendar, GitPullRequest, Globe2];

export function StatsSection() {
  return (
    <section className="relative py-12 md:py-16 -mt-8 sm:-mt-12 z-20" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <div
                key={stat.label}
                className="group relative rounded-2xl border border-border/80 bg-card/80 backdrop-blur-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Verified Stat
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-1">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-sm font-semibold text-foreground/90 mb-1">
                  {stat.label}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
