import React from "react";
import { TestimonialCarousel } from "./testimonial-carousel";
import { testimonials } from "./data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { DictionaryProps } from "@/lib/getDictionary";
import { ParserToHtml } from "@/utils";
type Props = {
  intl: DictionaryProps;
};

export function TestimonialSection({ intl }: Props) {
  return (
    <section className="w-full text-white space-y-8">
      <div className=" container text-center space-y-2">
        <h2 className="text-sm uppercase text-mf-secondProposal">
          {intl.testimonials.title}
        </h2>
        <p className="text-2xl font-bold">
          {ParserToHtml(intl.testimonials.subtitle, [
            "class",
            "bg-gradient-cyan-pink bg-clip-text text-transparent ",
          ])}
        </p>
      </div>

      <TestimonialCarousel testimonials={testimonials} />

      <Link
        href={""}
        className="w-fit mx-auto   flex items-center justify-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover text-sm text-mf-least group"
      >
        {intl.hero.cta}
        <ArrowUpRight className="max-[400px]:hidden ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
      </Link>
    </section>
  );
}
