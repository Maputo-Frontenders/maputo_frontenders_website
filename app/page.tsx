import Hero from '@/components/Hero/Hero'; 
import { InformationSection } from '@/components/Information';

export default function Home() {
  return (
    <main className="h-full flex-col justify-center py-5 items-center ">

     <Hero/>
     <InformationSection />

    </main>
  );
}
