"use client";

import * as React from "react";
import { TRACKS } from "@/lib/content";
import { Code, GitPullRequest, ArrowRight, Check } from "lucide-react";

export function TracksSection() {
  return (
    <section className="py-20 md:py-28 relative bg-secondary/30" id="tracks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <span>Two Distinct Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Choose your journey in NSoC &apos;26
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether you are writing code to build your portfolio or bringing an active repository to scale, NSoC has a dedicated track for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {TRACKS.map((track, idx) => {
            const isContributor = track.id === "contributors";
            const Icon = isContributor ? Code : GitPullRequest;

            return (
              <div
                key={track.id}
                className="relative rounded-3xl border border-border/80 bg-card/80 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-sky-500/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {track.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {track.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-8">
                    {track.tagline}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {track.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-foreground/85 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <a
                    href={track.ctaHref}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-sm"
                  >
                    <span>{track.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
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
