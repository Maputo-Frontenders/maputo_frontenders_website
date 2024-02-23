import Hero from "@/components/Hero/Hero";
import { Purpose } from "@/components/purpose/Purpose";

export default function Home() {
  return (
    <main className="h-full flex-col justify-center py-5 items-center antialiased">
      <Hero />
      <Purpose />
    </main>
  );
}
