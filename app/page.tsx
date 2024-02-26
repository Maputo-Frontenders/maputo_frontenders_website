import { Event } from "@/components/Events/event";
import Hero from "@/components/Hero/Hero";
import { InformationSection } from "@/components/Information";
import { CFP } from "@/components/cfp/CFP";
import { Purpose } from "@/components/purpose/Purpose";
import { Meteors } from "@/components/ui/meteoris";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-8 justify-center py-5 items-center">
      <Hero />
      <InformationSection />
      <Purpose />
      <Event />
      <CFP />
    </main>
  );
}
