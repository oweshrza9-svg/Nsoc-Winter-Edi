"use client";

import * as React from "react";
import { SITE_DATA } from "@/lib/content";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft | null>(null);

  React.useEffect(() => {
    const target = new Date(SITE_DATA.dates.startDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isPast: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex items-center gap-3 py-2 px-4 rounded-xl border border-border/40 bg-card/40 backdrop-blur-md">
        <span className="text-xs font-mono text-muted-foreground animate-pulse">Calculating countdown...</span>
      </div>
    );
  }

  if (timeLeft.isPast) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-sky-400/30 bg-sky-500/10 text-primary backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-mono font-medium tracking-wide">Coding Sprint Live in Progress</span>
      </div>
    );
  }

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center sm:items-start gap-2">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
        </span>
        <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          Winter Edition Kickoff Countdown
        </span>
      </div>
      <div className="grid w-full max-w-[280px] grid-cols-4 gap-1.5 sm:w-fit sm:max-w-none sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex min-w-0 flex-col items-center justify-center p-2 sm:px-3 sm:py-2 rounded-lg border border-border/60 bg-card/60 backdrop-blur-md sm:min-w-[64px]"
          >
            <span className="font-mono text-lg sm:text-2xl font-bold tracking-tight text-foreground">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-muted-foreground">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
