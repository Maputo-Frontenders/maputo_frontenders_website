import { ImpactSection } from "@/sections/stats";
import { HeroSection } from "@/sections/hero";
import { PartenersSection } from "@/sections/partners";
import { EventsSection } from "@/sections/events";
import { TestimonialSection } from "@/sections/testimonials";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { cards } from "@/sections/purpose/data";
import { TeamMembers } from "@/sections/team-members";
import { CallTopicsSection } from "@/sections/call-topics";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-16 justify-center  items-center overflow-x-hidden">
      <HeroSection />
      <PartenersSection />
      <ImpactSection />
      <EventsSection />
      <TestimonialSection />
      <InfiniteMovingCards data={cards} />
      <TeamMembers />
      <CallTopicsSection />
    </main>
  );
}
