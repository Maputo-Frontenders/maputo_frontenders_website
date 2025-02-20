import React from "react";
import { TestimonialCarousel } from "./testimonial-carousel";
import { testimonials } from "./data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function TestimonialSection() {
  return (
    <section className=" w-full bg-mf-background text-white space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-sm uppercase text-mf-secondProposal">
          "Ouvimos Dizer"
        </h2>
        <p className="text-xl md:text-2xl font-medium">
          Descubra as{" "}
          <span className="bg-gradient-teal-cyan bg-clip-text text-transparent">
            opiniões e experiências
          </span>{" "}
          que estão a ser compartilhadas sobre a comunidade.
        </p>
      </div>

      <TestimonialCarousel testimonials={testimonials} />

      <Link
        target="_blank"
        href={""}
        className="w-fit mx-auto   flex items-center justify-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover text-sm text-mf-least group"
      >
        Junte-se a nós
        <ArrowUpRight className="max-[400px]:hidden ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
      </Link>
    </section>
  );
}
