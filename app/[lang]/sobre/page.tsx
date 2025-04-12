import { getDictionary, Locale } from "@/lib/getDictionary";
import dynamic from "next/dynamic";

import PhotoHete from "@/assets/members/hete-odete.jpeg";
import Img4 from "@/assets/hero/img4.png";
import Img5 from "@/assets/hero/img5.png";
import Img6 from "@/assets/hero/img6.png";
import Img7 from "@/assets/hero/img3.png";
import BlurBackground from "@/assets/svg/violet-light-background.svg";
import SquareBackground from "@/assets/svg/square-background.svg";
import RadialOpacityBackground from "@/assets/svg/radial-opacity-background.svg";

import { GoalSection } from "@/sections/sobre/goal";
import { CallTopicsSection } from "@/sections/call-topics";
import { cardsMini } from "@/sections/stats/data";
import { HeroSection } from "@/sections/sobre/hero-section";

const MissionVisionValues = dynamic(() =>
  import("@/sections/sobre/mission-vision-values").then(
    (mod) => mod.MissionVisionValues
  )
);
const FullWidthImage = dynamic(() =>
  import("@/sections/sobre/full-width-image").then((mod) => mod.FullWidthImage)
);
const TeamMembers = dynamic(() =>
  import("@/sections/team-members").then((mod) => mod.TeamMembers)
);

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props) {
  const intl = await getDictionary(params.lang);

  return {
    title: intl.about.pageTitle,
    description: intl.about.pageDescription,
  };
}

export default async function AboutPage({ params }: Props) {
  const intl = await getDictionary(params.lang);

  const backgroundImages = {
    blur: BlurBackground,
    square: SquareBackground,
    radial: RadialOpacityBackground,
    img4: Img4,
    img5: Img5,
    img6: Img6,
  };

  return (
    <main
      className="text-mf-white space-y-10"
      aria-labelledby="about-page-heading"
      role="region"
    >
      <HeroSection intl={intl} backgroundImages={backgroundImages} />

      <MissionVisionValues
        intl={intl}
        presidentImage={PhotoHete}
        miniCards={cardsMini({ intl })}
      />

      <FullWidthImage image={Img7} alt="About page team image" />

      <TeamMembers
        intl={intl}
        isSubtitle={true}
        isActiveAnimation={true}
        lang={params.lang}
      />

      <GoalSection intl={intl} />
      <CallTopicsSection intl={intl} />
    </main>
  );
}
