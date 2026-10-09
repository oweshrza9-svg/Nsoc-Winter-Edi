"use client";

import * as React from "react";

/**
 * Lightweight IntersectionObserver-based scroll reveal hook.
 * Adds "revealed" class to elements with reveal-hidden / reveal-left / reveal-right.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal(containerRef: React.RefObject<Element | null>) {
  React.useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return; // CSS fallback handles it

    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>(
      ".reveal-hidden, .reveal-left, .reveal-right"
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef]);
}
