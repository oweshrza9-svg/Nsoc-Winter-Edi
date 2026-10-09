# Nexus Spring of Code — Winter Edition 2026

## Overview

The NSoC Winter Edition 2026 website presents the program, its contribution tracks, schedule, rewards, partners, and ways to get involved.

## Live Demo

[https://nsoc-winter-edi.vercel.app/](https://nsoc-winter-edi.vercel.app/)

## Features

- Responsive program landing page with desktop and mobile navigation.
- Light and dark themes.
- Animated hero terminal with a character-by-character command effect.
- Optional snowfall effect.
- Program overview, impact statistics, contribution tracks, and participation steps.
- Timeline, rewards, partner information, FAQ, and contact sections.
- Interactive countdown to the program start.

## Tech Stack

- Next.js 16.4 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- GSAP for hero entrance and atmospheric animations
- Radix UI Accordion for the FAQ
- Zustand for shared UI state
- Lucide React icons

## Getting Started

### Prerequisite

Install Bun. The project declares `bun@1.4.2` as its package manager.

### Install dependencies

```bash
bun install
```

### Start the development server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Next.js development server. |
| `bun run build` | Build the production application. |
| `bun run start` | Start the production server. |
| `bun run lint` | Run ESLint. |
| `bun run typecheck` | Run TypeScript without emitting files. |
| `bun run commit` | Start the configured Commitizen commit prompt. |

## Project Structure

```text
src/
├── app/                 # App Router layout, home page, and global styles
├── components/          # Shared navigation, theme, countdown, and UI components
│   └── sections/        # Hero and program page sections
└── lib/                 # Program content, utilities, and shared hooks
```

## Deployment

Deploy the project with Vercel by importing the repository and using its Next.js framework configuration. Vercel can build the application with the project’s production build script, `bun run build`.

## Author

[Ovesh Siddiqui](https://github.com/oweshrza9-svg)
