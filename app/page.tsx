import { Event } from "@/components/Events/event";
import Hero from "@/components/Hero/Hero";
import { InformationSection } from '@/components/Information';  
import { Purpose } from "@/components/purpose/Purpose";

export default function Home() {
  return (
    <main className="h-full flex-col justify-center py-5 items-center antialiased">
      <Hero />
      <InformationSection />
      <Purpose />
      <Event />
    </main>
  );
}
