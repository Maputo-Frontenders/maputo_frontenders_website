import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const CFP = () => {
  return (
    <section className=" container bg-gradient-to-r from-mf-secondProposal to-mf-least rounded-lg py-10 px-20">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center basis-3/5">
          <span className=" rounded-full bg-white p-10" />

          <h2 className=" font-bold text-3xl text-left text-wrap text-white">
            Tem um tópico que gostava de partilhar com a comunidade?
          </h2>
        </div>

        <div className=" font-semibold text-lg uppercase text-center items-center">
          <Link
            href="#"
            className="w-52 flex items-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondaryVariation  text-sm text-mf-least group"
          >
            Join Community
            <ArrowUpRight className="ml-2 group-hover:" />
          </Link>
        </div>
      </div>
    </section>
  );
};
