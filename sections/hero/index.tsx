import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import BlurBackground from "@/public/blur-background.svg";
import SquareBackground from "@/assets/svg/square-background.svg";
import RadialOpacityBackground from "@/assets/svg/radial-opacity-background.svg";
import Image from "next/image";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { DictionaryProps } from "@/lib/getDictionary";
import { ParserToHtml } from "@/utils";
import { ROUTES } from "@/utils/routes";

type Props = {
  intl: DictionaryProps;
};

export function HeroSection({ intl }: Props) {
  return (
    <section
      className="w-full space-y-4 relative pt-5"
      aria-labelledby="hero-title"
    >
      <Image
        src={BlurBackground}
        alt="Decorative blur background"
        className="absolute -z-50 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        loading="lazy"
      />
      <Image
        src={SquareBackground}
        alt="Decorative square pattern background"
        className="hidden md:block  absolute -z-50 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-full"
        loading="lazy"
      />
      <Image
        src={RadialOpacityBackground}
        alt="Decorative radial gradient background"
        className="absolute -z-50 top-full left-1/2 -translate-x-1/2 translate-y-1/2 w-full opacity-75"
        loading="lazy"
      />

      {/* <div className="flex mx-auto justify-center py-1 w-full hover:underline">
        <Link
          href={"#"}
          className="flex items-center font-medium text-sm text-white uppercase group"
        >
          Saiba do nosso próximo evento em{" "}
          <ArrowRight className="text-white h-4 w-4 ml-2 group-hover:translate-x-2 hover:scale-110 duration-300" />
        </Link>
      </div> */}

      <div className=" mx-auto py-2 w-full text-center">
        <p className="text-4xl font-bold text-white" id="hero-title">
          {ParserToHtml(intl.hero.title, [
            "class",
            "bg-gradient-to-r from-mf-purple via-mf-lightBlue to-mf-secondProposal text-transparent bg-clip-text",
          ])}
        </p>
      </div>
      <div className="flex mx-auto justify-center py-2 w-full">
        <Link
          href={ROUTES.ABOUT}
          className="flex items-center flex-row outline outline-1 outline-mf-turquoise hover:bg-gray-700 text-mf-turquoise font-bold py-2 px-4 rounded group"
          aria-label={intl.hero.cta}
        >
          {intl.hero.cta}
          <ArrowUpRight
            className="text-mf-turquoise ml-2 h-5 w-5 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300"
            aria-hidden="true"
          />
        </Link>
      </div>
      <div className="w-full" aria-label="Featured technologies">
        <InfiniteMovingCards pauseOnHover={false} />
      </div>
    </section>
  );
}
