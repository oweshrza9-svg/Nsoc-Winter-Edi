"use client";

import * as React from "react";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import gsap from "gsap";
import { Countdown } from "@/components/countdown";
import { SITE_DATA } from "@/lib/content";

export function Hero() {
  const heroRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: -15,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-actions",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-countdown",
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".mountain-layer",
          {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-between"
      id="home"
    >
      {/* Ambient Winter Aurora Glow */}
      <div
        className="aurora-glow w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] -top-32 -left-20 bg-sky-400/20 dark:bg-sky-500/15"
        aria-hidden="true"
      />
      <div
        className="aurora-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] top-20 -right-20 bg-indigo-400/20 dark:bg-indigo-500/15"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pill Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-700 dark:text-sky-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Winter Cohort 2026 · 45-Day Open Source Sprint</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12] mb-5">
              Open source,{" "}
              <span className="bg-gradient-to-r from-sky-600 via-sky-400 to-indigo-500 dark:from-sky-300 dark:via-sky-400 dark:to-indigo-300 bg-clip-text text-transparent">
                the way it was meant
              </span>{" "}
              to be.
            </h1>

            {/* Official Copy */}
            <p className="hero-desc text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              A 45-day open source program where project admins bring real-world
              codebases and contributors close issues, ship features, and grow.
              <span className="block mt-1 font-medium text-foreground/90">
                No toy projects. No filler tasks. Just meaningful work landing in
                production.
              </span>
            </p>

            {/* CTAs */}
            <div className="hero-actions flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-10 w-full">
              <a
                href="#tracks"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-sky-500/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Explore Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border bg-card/70 hover:bg-card text-foreground font-medium text-sm sm:text-base transition-all duration-200 backdrop-blur-md hover:border-primary/40 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Code2 className="w-4 h-4 text-sky-500" />
                <span>How It Works</span>
              </a>
            </div>

            {/* Live Countdown */}
            <div className="hero-countdown w-full flex justify-center lg:justify-start">
              <Countdown />
            </div>
          </div>

          {/* Decorative Terminal / Code Preview Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl border border-border/80 bg-card/80 backdrop-blur-xl shadow-xl overflow-hidden p-4 sm:p-5">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border/50 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                  <Terminal className="w-3 h-3 text-sky-500" />
                  <span>nsoc-winter-2026.sh</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Terminal Code Mock */}
              <div className="font-mono text-xs sm:text-sm space-y-2.5 text-foreground/90">
                <p className="text-muted-foreground flex items-center gap-2">
                  <span className="text-emerald-500">$</span>
                  <span>npx nsoc-cli join --edition=winter-2026</span>
                </p>
                <p className="text-sky-600 dark:text-sky-400">
                  ✔ Verifying applicant eligibility...
                </p>
                <p className="text-foreground/80 pl-2 border-l border-sky-400/30">
                  &gt; Cohort: Winter Edition (Oct 15 - Dec 30)
                  <br />
                  &gt; Status: 3,500+ Alums · Production Repos
                  <br />
                  &gt; Rewards: Swag, Certificate, LOR, Leaderboard
                </p>
                <div className="pt-2 flex items-center justify-between text-xs bg-sky-500/10 dark:bg-sky-500/15 p-2 rounded-lg border border-sky-500/20">
                  <span className="text-sky-700 dark:text-sky-300 font-medium">Ready to contribute?</span>
                  <a
                    href="#contact"
                    className="text-accent font-semibold hover:underline"
                  >
                    Register now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layered Snowy Mountain Vector Scenery at Bottom */}
      <div className="relative w-full mt-12 sm:mt-16 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1440 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-32 sm:h-48 md:h-64 object-cover"
          preserveAspectRatio="none"
        >
          {/* Distant Mountain Peak Layer (Soft sky blend) */}
          <path
            className="mountain-layer fill-sky-200/40 dark:fill-sky-950/40 transition-colors duration-300"
            d="M0 280L0 120L180 50L360 140L540 30L720 120L920 40L1120 130L1280 60L1440 110L1440 280Z"
          />

          {/* Midground Mountain Layer */}
          <path
            className="mountain-layer fill-sky-300/35 dark:fill-[#081830] transition-colors duration-300"
            d="M0 280L0 160L220 90L420 170L640 80L840 180L1060 100L1260 170L1440 130L1440 280Z"
          />

          {/* Foreground Snowy Ridge with Pine Silhouettes */}
          <path
            className="mountain-layer fill-background/90 transition-colors duration-300"
            d="M0 280L0 200L140 160L320 220L520 160L740 230L960 170L1180 220L1340 180L1440 210L1440 280Z"
          />
        </svg>
      </div>
    </section>
  );
}
