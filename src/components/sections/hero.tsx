"use client";

import * as React from "react";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import gsap from "gsap";
import { Countdown } from "@/components/countdown";
import { SITE_DATA } from "@/lib/content";

const TERMINAL_COMMAND = "npx nsoc-cli join --edition=winter-2026";

export function Hero() {
  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const auroraRef1 = React.useRef<HTMLDivElement | null>(null);
  const auroraRef2 = React.useRef<HTMLDivElement | null>(null);
  const auroraRef3 = React.useRef<HTMLDivElement | null>(null);
  const [typedCommand, setTypedCommand] = React.useState("");

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setTypedCommand(TERMINAL_COMMAND);
      return;
    }

    let index = 0;
    let timer: ReturnType<typeof setTimeout>;
    const typeNext = () => {
      index += 1;
      setTypedCommand(TERMINAL_COMMAND.slice(0, index));
      if (index < TERMINAL_COMMAND.length) timer = setTimeout(typeNext, 42);
    };
    timer = setTimeout(typeNext, 650);
    return () => clearTimeout(timer);
  }, []);

  // Cursor parallax (desktop only, respects reduced-motion)
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    if (window.innerWidth < 1024) return; // skip on mobile

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;

      if (auroraRef1.current) {
        gsap.to(auroraRef1.current, {
          x: dx * 28,
          y: dy * 18,
          duration: 2.2,
          ease: "power1.out",
          overwrite: "auto",
        });
      }
      if (auroraRef2.current) {
        gsap.to(auroraRef2.current, {
          x: dx * -22,
          y: dy * -14,
          duration: 2.8,
          ease: "power1.out",
          overwrite: "auto",
        });
      }
      if (auroraRef3.current) {
        gsap.to(auroraRef3.current, {
          x: dx * 16,
          y: dy * 22,
          duration: 3.5,
          ease: "power1.out",
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cinematic entrance timeline
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Badge slides down
      tl.from(".hero-badge", { opacity: 0, y: -18, duration: 0.7 })
        // Headline words stagger up with slight clip feel
        .from(
          ".hero-word",
          { opacity: 0, y: 32, skewY: 2, stagger: 0.07, duration: 0.75 },
          "-=0.3"
        )
        // Description fades in
        .from(
          ".hero-desc",
          { opacity: 0, y: 20, duration: 0.7 },
          "-=0.5"
        )
        // CTA buttons enter with slight scale
        .from(
          ".hero-cta-primary",
          { opacity: 0, y: 14, scale: 0.95, duration: 0.6 },
          "-=0.4"
        )
        .from(
          ".hero-cta-secondary",
          { opacity: 0, y: 14, duration: 0.55 },
          "-=0.45"
        )
        // Countdown
        .from(
          ".hero-countdown",
          { opacity: 0, scale: 0.96, duration: 0.6 },
          "-=0.35"
        )
        // Terminal card slides in from right
        .from(
          ".hero-terminal",
          { x: 40, duration: 0.9, ease: "power2.out" },
          "-=0.7"
        )
        // Mountain layers rise from bottom
        .from(
          ".mountain-layer",
          {
            opacity: 0,
            y: 50,
            stagger: 0.18,
            duration: 1.4,
            ease: "power2.out",
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headline = ["Open source,", "the way it was", "meant to be."];

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-start lg:justify-between"
      id="home"
    >
      {/* Deep layered aurora atmosphere */}
      {/* Primary – large cyan orb top-left */}
      <div
        ref={auroraRef1}
        className="aurora-glow aurora-animated w-[480px] sm:w-[700px] h-[480px] sm:h-[700px] -top-40 -left-28"
        style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.22) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Secondary – indigo orb top-right */}
      <div
        ref={auroraRef2}
        className="aurora-glow aurora-animated-2 w-[360px] sm:w-[560px] h-[360px] sm:h-[560px] top-10 -right-24"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Tertiary – teal ribbon mid-center for depth */}
      <div
        ref={auroraRef3}
        className="aurora-glow aurora-animated-3 w-[280px] sm:w-[420px] h-[180px] sm:h-[260px] top-1/3 left-1/2 -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(20,184,166,0.14) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="hero-snow" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-y-6 gap-x-10 lg:gap-y-10 items-center">
          {/* Main Hero Copy */}
          <div className="min-w-0 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pill Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-700 dark:text-sky-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Winter Cohort 2026 · 45-Day Open Source Sprint</span>
            </div>

            {/* Main Headline — split into words for stagger */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12] mb-5">
              {headline.map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  {line.split(" ").map((word, wi) => (
                    <span
                      key={wi}
                      className="hero-word inline-block mr-[0.28em]"
                      style={
                        li === 1 && wi === 0
                          ? {
                              background:
                                "linear-gradient(90deg, #0ea5e9, #38bdf8, #818cf8)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }
                          : li === 1 && wi === 1
                          ? {
                              background:
                                "linear-gradient(90deg, #38bdf8, #818cf8, #a78bfa)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }
                          : li === 1 && wi === 2
                          ? {
                              background:
                                "linear-gradient(90deg, #818cf8, #a78bfa)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }
                          : {}
                      }
                    >
                      {word}
                    </span>
                  ))}
                </span>
              ))}
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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-10 w-full">
              <a
                href="#tracks"
                className="hero-cta-primary btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-sky-500/30 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Explore Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#process"
                className="hero-cta-secondary inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border bg-card/70 hover:bg-card text-foreground font-medium text-sm sm:text-base transition-all duration-200 backdrop-blur-md hover:border-primary/40 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Code2 className="w-4 h-4 text-sky-500" />
                <span>How It Works</span>
              </a>
            </div>

            {/* Live Countdown */}
            <div className="hero-countdown min-w-0 w-full flex justify-center lg:justify-start">
              <Countdown />
            </div>
          </div>

          {/* Terminal column: beside the copy on desktop, stacked after it on mobile. */}
          <div className="min-w-0 lg:col-span-5 flex w-full justify-center lg:items-center">
            <div className="hero-terminal min-w-0 w-full max-w-md rounded-2xl border border-border/80 bg-card/80 backdrop-blur-xl shadow-2xl shadow-sky-500/10 overflow-hidden p-4 sm:p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-sky-500/15">
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
                <p className="min-w-0 text-muted-foreground flex items-start gap-2">
                  <span className="text-emerald-500">$</span>
                  <span className="terminal-typing min-w-0 flex-1 break-words" aria-label={TERMINAL_COMMAND}>{typedCommand}<span className="terminal-cursor" aria-hidden="true">▍</span></span>
                </p>
                <p className="text-sky-600 dark:text-sky-400">
                  ✔ Verifying applicant eligibility...
                </p>
                <p className="min-w-0 break-words text-foreground/80 pl-2 border-l border-sky-400/30">
                  &gt; Cohort: Winter Edition (Oct 15 - Dec 30)
                  <br />
                  &gt; Status: 3,500+ Alums · Production Repos
                  <br />
                  &gt; Rewards: Swag, Certificate, LOR, Leaderboard
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-xs bg-sky-500/10 dark:bg-sky-500/15 p-2 rounded-lg border border-sky-500/20">
                  <span className="min-w-0 text-sky-700 dark:text-sky-300 font-medium">Ready to contribute?</span>
                  <a href="#contact" className="shrink-0 whitespace-nowrap text-accent font-semibold hover:underline">
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
          {/* Distant Mountain Peak Layer */}
          <path
            className="mountain-layer fill-sky-200/40 dark:fill-sky-950/40 transition-colors duration-300"
            d="M0 280L0 120L180 50L360 140L540 30L720 120L920 40L1120 130L1280 60L1440 110L1440 280Z"
          />
          {/* Midground Mountain Layer */}
          <path
            className="mountain-layer fill-sky-300/35 dark:fill-[#081830] transition-colors duration-300"
            d="M0 280L0 160L220 90L420 170L640 80L840 180L1060 100L1260 170L1440 130L1440 280Z"
          />
          {/* Foreground Snowy Ridge */}
          <path
            className="mountain-layer fill-background/90 transition-colors duration-300"
            d="M0 280L0 200L140 160L320 220L520 160L740 230L960 170L1180 220L1340 180L1440 210L1440 280Z"
          />
        </svg>
      </div>
    </section>
  );
}
