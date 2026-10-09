"use client";

import * as React from "react";
import { PROGRAM_PILLARS, SITE_DATA } from "@/lib/content";
import { FolderGit2, Compass, Award, Users2, CheckCircle2 } from "lucide-react";

const PILLAR_ICONS = [FolderGit2, Compass, Award, Users2];

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <span>About NSoC 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Built for developers who want to ship, not just spectate.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {SITE_DATA.mission}
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROGRAM_PILLARS.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index % PILLAR_ICONS.length];
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/40">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Production standard workflow</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
