import { Event } from "@/components/Events/event";
import Hero from "@/components/Hero/Hero";
import { InformationSection } from "@/components/Information";
import { CFP } from "@/components/cfp/CFP";
import { Purpose } from "@/components/purpose/Purpose";
import { TeamMembers } from "@/components/teammembers/TeamMembers";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-12 justify-center py-5 items-center">
      <Hero />
      <InformationSection />
      <Purpose />
      <Event />
      <TeamMembers />
      <CFP />
    </main>
  );
}
