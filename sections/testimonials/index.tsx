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
    <section
      className="w-full text-white space-y-8"
      aria-labelledby="testimonials-heading"
      role="region"
    >
      <div className="container text-center space-y-2">
        <h2
          id="testimonials-heading"
          className="text-sm uppercase text-mf-secondProposal"
        >
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
    </section>
  );
}
