"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Snowflake, Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useUiStore } from "@/store/ui";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Process", href: "#process" },
  { label: "Timeline", href: "#timeline" },
  { label: "Rewards", href: "#rewards" },
  { label: "Partners", href: "#partners" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const snowEnabled = useUiStore((state) => state.snowEnabled);
  const toggleSnow = useUiStore((state) => state.toggleSnow);
  const mobileMenuOpen = useUiStore((state) => state.mobileMenuOpen);
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen);

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-nav py-3 shadow-sm"
          : "bg-background/40 backdrop-blur-md py-4 border-b border-border/20"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-border/60 bg-card p-1 shadow-xs transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo_light.png"
                alt="Nexus Spring of Code Logo"
                fill
                sizes="36px"
                className="object-contain dark:hidden"
                priority
              />
              <Image
                src="/logo_dark.png"
                alt="Nexus Spring of Code Logo"
                fill
                sizes="36px"
                className="object-contain hidden dark:block"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base sm:text-lg tracking-tight text-foreground">
                  NSoC
                </span>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  Winter &apos;26
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground font-mono hidden sm:inline-block">
                Nexus Spring of Code
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-foreground/75 hover:text-foreground transition-colors duration-200 rounded-md hover:bg-card/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons (Snow toggle, Theme toggle, CTA) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Snowfall Toggle */}
            <button
              type="button"
              onClick={toggleSnow}
              className={cn(
                "relative flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs cursor-pointer",
                snowEnabled
                  ? "border-sky-400/40 bg-sky-400/15 text-sky-500 dark:text-sky-300"
                  : "border-border bg-card/60 text-muted-foreground hover:text-foreground"
              )}
              aria-pressed={snowEnabled}
              title={snowEnabled ? "Pause snowfall" : "Enable snowfall"}
              aria-label={snowEnabled ? "Disable snowfall effect" : "Enable snowfall effect"}
            >
              <Snowflake
                className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  snowEnabled && "rotate-45"
                )}
              />
              <span className="sr-only">Toggle Snowfall</span>
            </button>

            {/* Dark / Light Theme Toggle */}
            <ThemeToggle />

            {/* Primary CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-xs hover:shadow-sky-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>Join Winter &apos;26</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card/60 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-card/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border/40 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm shadow-xs"
              >
                <span>Join Winter &apos;26</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
