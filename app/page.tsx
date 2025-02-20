import { ImpactSection } from "@/sections/purpose";
import { HeroSection } from "@/sections/hero";
import { PartenersSection } from "@/sections/partners";
import { EventsSection } from "@/sections/events";
import { TestimonialSection } from "@/sections/testimonials";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { cards } from "@/sections/purpose/data";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-16 justify-center py-5 items-center overflow-x-hidden">
      <HeroSection />
      <PartenersSection />
      <ImpactSection />
      <EventsSection />
      <TestimonialSection />
      <InfiniteMovingCards data={cards} />
    </main>
  );
}
