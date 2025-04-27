import dynamic from "next/dynamic";

import { ImpactSection } from "@/sections/stats";
import { HeroSection } from "@/sections/hero";
import { PartenersSection } from "@/sections/partners";
import { TestimonialSection } from "@/sections/testimonials";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { cards } from "@/sections/purpose/data";
import { CallTopicsSection } from "@/sections/call-topics";
import { getDictionary, Locale } from "@/lib/getDictionary";

const TeamMembers = dynamic(() =>
  import("@/sections/team-members").then((mod) => mod.TeamMembers)
);

const EventsSection = dynamic(() =>
  import("@/sections/events").then((mod) => mod.EventsSection)
);

type Props = {
  params: { lang: Locale };
};

export default async function Home({ params }: Props) {
  const intl = await getDictionary(params.lang);

  return (
    <main className="h-full flex flex-col gap-16 justify-center  items-center overflow-x-hidden">
      <HeroSection intl={intl} />
      <PartenersSection intl={intl} />
      <ImpactSection intl={intl} />
      <EventsSection intl={intl} lang={params.lang} />
      <TestimonialSection intl={intl} />
      <InfiniteMovingCards data={cards} />
      <TeamMembers intl={intl} lang={params.lang} isActiveAnimation />
      <CallTopicsSection intl={intl} />
    </main>
  );
}
