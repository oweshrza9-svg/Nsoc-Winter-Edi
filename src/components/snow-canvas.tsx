"use client";

import * as React from "react";
import { useUiStore } from "@/store/ui";

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  density: number;
  alpha: number;
  vx: number;
  vy: number;
}

export function SnowCanvas() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const snowEnabled = useUiStore((state) => state.snowEnabled);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || !snowEnabled) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let snowflakes: Snowflake[] = [];

    const initCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Scale snowflake count based on viewport area
      const count = Math.min(Math.floor((width * height) / 14000), 75);
      snowflakes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        density: Math.random() * 1,
        alpha: Math.random() * 0.6 + 0.25,
        vx: Math.random() * 0.8 - 0.4,
        vy: Math.random() * 1.2 + 0.6,
      }));
    };

    initCanvas();

    const handleResize = () => {
      initCanvas();
    };

    let isVisible = !document.hidden;
    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isVisible || !snowEnabled) return;

      const delta = Math.min((time - lastTime) / 16.67, 2);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(220, 240, 255, 0.85)";

      for (let i = 0; i < snowflakes.length; i++) {
        const flake = snowflakes[i];
        flake.y += flake.vy * delta;
        flake.x += (flake.vx + Math.sin(flake.y * 0.02) * 0.3) * delta;

        if (flake.y > height + 5) {
          flake.y = -5;
          flake.x = Math.random() * width;
        }
        if (flake.x > width + 5) flake.x = -5;
        if (flake.x < -5) flake.x = width + 5;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(186, 230, 253, ${flake.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, [snowEnabled]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full"
      aria-hidden="true"
    />
  );
}
