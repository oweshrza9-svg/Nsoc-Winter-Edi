import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SnowCanvas } from "@/components/snow-canvas";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus Spring of Code | Winter Edition 2026",
  description:
    "Nexus Spring of Code (NSoC) Winter Edition 2026 — A 45-day open source contribution program where project admins bring real codebases and contributors close issues that ship to production.",
  keywords: [
    "Nexus Spring of Code",
    "NSoC",
    "NSoC Winter Edition",
    "Open Source",
    "Student Developers",
    "Hackathons",
    "GitHub",
    "Developer Program",
  ],
  authors: [{ name: "Ovesh Siddiqui", url: "https://github.com/oweshrza9-svg" }],
  creator: "Ovesh Siddiqui",
  metadataBase: new URL("https://nsoc.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexus Spring of Code | Winter Edition 2026",
    description:
      "A 45-day open source program where developers contribute to real production codebases alongside mentors. No toy projects. Just meaningful work.",
    url: "https://nsoc.in",
    siteName: "Nexus Spring of Code",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo_dark.png",
        width: 1200,
        height: 630,
        alt: "Nexus Spring of Code Winter Edition 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Spring of Code | Winter Edition 2026",
    description:
      "A 45-day open source program where developers contribute to real production codebases alongside mentors.",
    images: ["/logo_dark.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo_dark.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f7fd" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Skip to Content for Screen Readers & Keyboard Users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SnowCanvas />
          <Navbar />
          <div className="flex-1" id="main-content">
            {children}
          </div>
          <Footer />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
