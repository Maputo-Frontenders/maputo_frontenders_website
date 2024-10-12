import React from 'react';
import { TestimonialCarousel } from './testimonial-carousel';
import { testimonials } from './data';  
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function TestimonialSection () {
  return (
    <section className=" w-full text-center py-16 bg-mf-background text-white">
      <div className="mb-12">
        <h2 className="text-sm uppercase text-mf-secondProposal">"Ouvimos Dizer"</h2>
        <p className="text-2xl md:text-2xl font-light text-white pt-3">
          Descubra as <span className="bg-gradient-to-r from-[#16F8B6] to-[#1FCFF1] bg-clip-text text-transparent">opiniões e experiências</span> que estão a ser compartilhadas sobre a comunidade.
        </p>

      </div>

      <TestimonialCarousel testimonials={testimonials} />

     <div className='w-full flex justify-center'>
      <div className="mt-12 w-48 ">
          <Link
            target="_blank"
            href={""}
            className="w-full truncate text-clip  flex items-center justify-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover text-sm text-mf-least group"
          >
            Junte-se a nós
            <ArrowUpRight className="max-[400px]:hidden ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
          </Link>
        </div>
     </div>
    </section>
  );
};
