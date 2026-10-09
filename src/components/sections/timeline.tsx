"use client";

import * as React from "react";
import { TIMELINE } from "@/lib/content";
import { CalendarDays, CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function TimelineSection() {
  return (
    <section className="py-20 md:py-28 relative" id="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <span>Winter Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Official Program Timeline
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Key milestones for the Winter 2026 cohort. Mark these dates in your calendar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {TIMELINE.map((item, index) => {
            const isCompleted = item.status === "completed";
            const isCurrent = item.status === "current";

            return (
              <div
                key={item.title}
                className={cn(
                  "relative rounded-2xl border p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                  isCurrent
                    ? "border-primary/60 bg-primary/[0.06] shadow-lg shadow-sky-500/10"
                    : isCompleted
                    ? "border-emerald-500/30 bg-card/60"
                    : "border-border/70 bg-card/70"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                      isCurrent
                        ? "bg-primary text-primary-foreground animate-pulse"
                        : isCompleted
                        ? "bg-emerald-500/15 text-emerald-500 border border-emerald-500/25"
                        : "bg-secondary text-muted-foreground border border-border/50"
                    )}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : isCurrent ? (
                      <Clock className="w-5 h-5" />
                    ) : (
                      <CalendarDays className="w-5 h-5" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20">
                        {item.date}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-semibold">
                          Active Now
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="sm:self-center shrink-0">
                  <span
                    className={cn(
                      "text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border",
                      isCurrent
                        ? "border-primary/40 text-primary bg-primary/10 font-bold"
                        : isCompleted
                        ? "border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5"
                        : "border-border/60 text-muted-foreground bg-secondary/50"
                    )}
                  >
                    {isCurrent ? "In Progress" : isCompleted ? "Completed" : "Scheduled"}
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
