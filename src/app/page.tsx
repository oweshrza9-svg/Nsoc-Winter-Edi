import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { AboutSection } from "@/components/sections/about";
import { TracksSection } from "@/components/sections/tracks";
import { StepsSection } from "@/components/sections/steps";
import { RewardsSection } from "@/components/sections/rewards";
import { TimelineSection } from "@/components/sections/timeline";
import { SponsorsSection } from "@/components/sections/sponsors";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <StatsSection />
      <AboutSection />
      <TracksSection />
      <StepsSection />
      <RewardsSection />
      <TimelineSection />
      <SponsorsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
