import Image from "next/image";
import dynamic from "next/dynamic";

import { Breadcrumbs } from "@/components/breadcrumbs";

import { GoalSection } from "@/sections/sobre/goal";
import { CallTopicsSection } from "@/sections/call-topics";

import PhotoHete from "@/assets/members/hete-odete.jpeg";
import Img4 from "@/assets/hero/img4.png";
import Img5 from "@/assets/hero/img5.png";
import Img6 from "@/assets/hero/img6.png";
import Img7 from "@/assets/hero/img3.png";

import BlurBackground from "@/assets/svg/violet-light-background.svg";
import SquareBackground from "@/assets/svg/square-background.svg";
import RadialOpacityBackground from "@/assets/svg/radial-opacity-background.svg";

import { cn } from "@/lib/utils";
import { cardsMini } from "@/sections/stats/data";
import { getDictionary, Locale } from "@/lib/getDictionary";
import { ParserToHtml } from "@/utils";

const TeamMembers = dynamic(() =>
  import("@/sections/team-members").then((mod) => mod.TeamMembers)
);

type Props = {
  params: { lang: Locale };
};

export default async function AboutPage({ params }: Props) {
  const intl = await getDictionary(params.lang);

  return (
    <main
      className="text-mf-white space-y-10"
      aria-labelledby="about-page-heading"
      role="region"
    >
      {/* Hero section with background images */}
      <div className="relative">
        {/* Background decorative elements */}
        <Image
          src={BlurBackground}
          alt="Backcground Blur"
          className="absolute -z-50 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-roledescription="background decorative elements"
        />
        <Image
          src={SquareBackground}
          alt="Backcground Blur"
          className="hidden md:block  absolute -z-50 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-full "
          aria-roledescription="background decorative elements"
        />
        <Image
          src={RadialOpacityBackground}
          alt="Backcground Blur"
          className="absolute -z-50 top-full left-1/2 -translate-x-1/2 translate-y-1/2 w-full opacity-75"
          aria-roledescription="background decorative elements"
        />

        <div
          className=" overflow-x-hidden w-full  px-4 text-mf-white"
          aria-roledescription="about page content"
        >
          <div
            className=" flex flex-col lg:flex-row gap-8"
            aria-roledescription="about page content"
          >
            {/* Left column - History text */}
            <div className="container max-w-3xl lg:pl-10 xl:pl-10 2xl:pl-36 3xl:max-w-4xl 3xl:pl-56  mt-8 flex flex-col gap-8">
              <Breadcrumbs
                items={[
                  { title: intl.navigation.home, href: "/" },
                  { title: intl.navigation.about, href: "/about" },
                ]}
                aria-roledescription="breadcrumbs"
              />

              <div
                className=" flex flex-col gap-8"
                aria-roledescription="about page history content"
              >
                <div className="text-5xl font-bold leading-snug">
                  <h1>
                    {intl.about.history.title}{" "}
                    <span className=" bg-gradient-cyan-orange text-transparent bg-clip-text">
                      {intl.about.history.subtitle}
                    </span>{" "}
                    <br />
                  </h1>
                </div>

                <div className=" leading-relaxed  text-mf-white/90 space-y-8 ">
                  <p>{ParserToHtml(intl.about.history.founders)}</p>
                  <p className="hidden lg:block">
                    {ParserToHtml(intl.about.history.origin)}
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Images gallery */}
            <div
              className="relative mx-auto lg:ml-auto lg:mt-24"
              aria-roledescription="about page images gallery"
            >
              <div className="[mask-image:linear-gradient(to_right,transparent,white_0%,white_60%,transparent)]  flex gap-4 h-[500px] -mx-4 lg:mx-0">
                <Image
                  src={Img4}
                  alt="Image 4"
                  className=" w-[380px] h-[500px] rounded-lg object-cover"
                  aria-roledescription="about page image 4"
                />
                <div className=" xl:flex flex-col gap-4  ">
                  <Image
                    src={Img5}
                    alt="Image 5"
                    className=" w-[380px] h-[250px] rounded-lg object-cover"
                    aria-roledescription="about page image 5"
                  />
                  <Image
                    src={Img6}
                    alt="Image 6"
                    className=" w-[380px] h-[250px] rounded-lg object-cover"
                    aria-roledescription="about page image 6"
                  />
                </div>
              </div>
              {/* Mobile-only text */}
              <div
                className="container max-w-3xl lg:pl-10 xl:pl-10 2xl:pl-36 3xl:max-w-4xl 3xl:pl-56  mt-8 flex flex-col gap-8 lg:hidden"
                aria-roledescription="about page mobile text"
              >
                <p className="">{ParserToHtml(intl.about.history.origin)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision and Values section */}
      <div
        className="container px-12 flex flex-col lg:flex-row justify-between w-full gap-8"
        aria-roledescription="about page mission, vision and values section"
      >
        {/* Left column - Mission content */}
        <section
          aria-roledescription="about page mission content"
          role="region"
        >
          <RoundedCard
            image={PhotoHete}
            title={"Hete Odete"}
            description={intl.about.president}
            classNames="bg-gradient-cyan-purple"
          />
          <div className="mt-8 max-w-xl leading-relaxed  text-mf-white/90 space-y-4">
            {/* Mission statement */}
            <div
              className="space-y-2"
              aria-roledescription="about page mission statement"
            >
              <h3 className="text-2xl font-bold">{intl.about.mission.title}</h3>
              <p className=" text-mf-white/90">
                {intl.about.mission.description}
              </p>
            </div>

            {/* Vision statement */}
            <div
              className="space-y-2"
              aria-roledescription="about page vision statement"
            >
              <h3 className="text-2xl font-bold">{intl.about.vision.title}</h3>
              <p className=" text-mf-white/90">
                {intl.about.vision.description}
              </p>
            </div>

            {/* Core values */}
            <div
              className="space-y-2"
              aria-roledescription="about page core values"
            >
              <h3 className="text-2xl font-bold">{intl.about.values.title}</h3>
              <ul className="space-y-4 ml-2 text-mf-white/90">
                <li>
                  <span className="text-mf-secondary font-bold">
                    {intl.about.values.collaboration.title}
                  </span>{" "}
                  {intl.about.values.collaboration.description}
                </li>
                <li>
                  <span className="text-mf-lightBlue font-bold">
                    {intl.about.values.inclusion.title}
                  </span>{" "}
                  {intl.about.values.inclusion.description}
                </li>
                <li>
                  <span className="text-mf-orange font-bold">
                    {intl.about.values.excellence.title}
                  </span>{" "}
                  {intl.about.values.excellence.description}
                </li>
                <li>
                  <span className="text-mf-pink font-bold">
                    {intl.about.values.innovation.title}
                  </span>{" "}
                  {intl.about.values.innovation.description}
                </li>
                <li>
                  <span className="text-mf-purple font-bold">
                    {intl.about.values.integrity.title}
                  </span>{" "}
                  {intl.about.values.integrity.description}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Right column - Stats cards */}
        <section
          className="sticky h-fit top-4 flex flex-col gap-4 "
          aria-roledescription="about page stats cards"
        >
          {cardsMini({ intl }).map((card) => (
            <RoundedCard
              image={card.icon}
              title={card.title}
              description={card.description}
              classNames={card.gradientColor + " rounded-[40px]"}
              classNameContainer={"px-8 py-4  rounded-[40px]  "}
              isIcon={true}
              key={card.title}
            />
          ))}
        </section>
      </div>

      {/* Full-width image section */}
      <div
        className="w-full h-[500px] "
        aria-roledescription="about page full-width image section"
      >
        <Image
          src={Img7}
          alt="Image 7"
          className=" w-full h-full object-cover "
          aria-roledescription="about page full-width image"
        />
      </div>

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

function RoundedCard({
  image,
  title,
  description,
  classNames,
  classNameContainer,
  isIcon,
}: {
  isIcon?: boolean;
  image: any;
  title: string;
  description: string;
  classNames?: string;
  classNameContainer?: string;
}) {
  return (
    <div
      className={cn("rounded-full p-[2px] h-fit w-fit", classNames)}
      role="listitem"
      aria-roledescription="card"
      aria-label={title}
    >
      <div
        className={cn(
          "flex items-center gap-2 w-fit h-fit rounded-full bg-mf-background px-2 pr-8 py-2",
          classNameContainer,
          isIcon && "items-start"
        )}
      >
        <Image
          src={image}
          alt={title}
          className={cn(" rounded-full", isIcon ? "w-8 h-8" : "w-12 h-12")}
          aria-roledescription="card image"
        />

        <div
          className={cn("flex flex-col ", isIcon && "gap-2")}
          aria-roledescription="card content"
        >
          <h4 className="font-semibold" aria-roledescription="card title">
            {title}
          </h4>
          <p
            className="  text-mf-white/75 max-w-48 text-sm"
            aria-roledescription="card description"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
