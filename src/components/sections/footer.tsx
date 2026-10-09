"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_DATA } from "@/lib/content";
import {
  MessageSquare,
  Phone,
  Mail,
  Heart,
} from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/80 bg-card/40 backdrop-blur-xl pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border/50">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-border/60 bg-card p-1">
                <Image
                  src="/logo_light.png"
                  alt="NSoC Logo"
                  fill
                  sizes="32px"
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/logo_dark.png"
                  alt="NSoC Logo"
                  fill
                  sizes="32px"
                  className="object-contain hidden dark:block"
                />
              </div>
              <span className="font-bold text-lg text-foreground tracking-tight">
                NSoC &apos;26 · Winter Edition
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              {SITE_DATA.subMission}
            </p>

            <div className="flex items-center gap-2 pt-2 flex-wrap">
              <a
                href={SITE_DATA.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border/70 bg-card/60 hover:bg-card flex items-center justify-center text-muted-foreground hover:text-sky-500 transition-colors"
                aria-label="Discord Community"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={SITE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border/70 bg-card/60 hover:bg-card flex items-center justify-center text-muted-foreground hover:text-sky-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={SITE_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border/70 bg-card/60 hover:bg-card flex items-center justify-center text-muted-foreground hover:text-sky-500 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={SITE_DATA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border/70 bg-card/60 hover:bg-card flex items-center justify-center text-muted-foreground hover:text-sky-500 transition-colors"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>

              <a
                href={SITE_DATA.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border/70 bg-card/60 hover:bg-card flex items-center justify-center text-muted-foreground hover:text-sky-500 transition-colors"
                aria-label="WhatsApp Community"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={SITE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border/70 bg-card/60 hover:bg-card flex items-center justify-center text-muted-foreground hover:text-sky-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About NSoC
                </a>
              </li>
              <li>
                <a href="#tracks" className="text-muted-foreground hover:text-foreground transition-colors">
                  Participation Tracks
                </a>
              </li>
              <li>
                <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                  4-Step Process
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-muted-foreground hover:text-foreground transition-colors">
                  Winter Timeline
                </a>
              </li>
              <li>
                <a href="#rewards" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rewards & Swag
                </a>
              </li>
            </ul>
          </div>

          {/* Organization & Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href={SITE_DATA.officialUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Official Website
                </a>
              </li>
              <li>
                <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sponsors & Backers
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  Program FAQs
                </a>
              </li>
              <li>
                <a href="https://nsoc-code.netlify.app/team" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Core Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-4">
              Direct Desk
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Official communications & partner inquiries:
            </p>
            <a
              href={`mailto:${SITE_DATA.officialEmail}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{SITE_DATA.officialEmail}</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} Nexus Spring of Code (NSoC). All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by Ovesh Siddiqui for NSoC Winter &apos;26</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
