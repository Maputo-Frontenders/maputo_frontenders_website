import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import BlurBackground from "@/public/blur-background.svg";
import Image from "next/image";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function HeroSection() {
  return (
    <section className="w-full space-y-4 relative">
      <Image
        src={BlurBackground}
        alt="Backcground Blur"
        className="absolute -z-50 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex mx-auto justify-center py-1 w-full hover:underline">
        <Link
          href={"#"}
          className="flex items-center font-medium text-sm text-white uppercase group"
        >
          Saiba do nosso próximo evento em{" "}
          <ArrowRight className="text-white h-4 w-4 ml-2 group-hover:translate-x-2 hover:scale-110 duration-300" />
        </Link>
      </div>
      <div className="mx-auto py-2 w-full text-center">
        <p className="text-4xl font-bold text-white ">
          A maior comunidade de{" "}
          <span className="bg-gradient-to-r from-mf-secondProposal via-mf-lightBlue to-mf-purple text-transparent bg-clip-text">
            frontend
          </span>{" "}
          em
        </p>
        <p className="text-4xl font-bold text-white ">Moçambique </p>
      </div>
      <div className="flex mx-auto justify-center py-2 w-full">
        <Link
          href={""}
          target="_blank"
          className="flex items-center flex-row outline outline-1 outline-mf-secondary hover:bg-gray-700 text-mf-secondary font-bold py-2 px-4 rounded group"
        >
          SAIBA MAIS
          <ArrowUpRight className="text-mf-secondary ml-2 h-5 w-5 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
        </Link>
      </div>
      <div className="w-full">
        <InfiniteMovingCards pauseOnHover={false} />
      </div>
    </section>
  );
}
