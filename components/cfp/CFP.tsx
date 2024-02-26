import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const CFP = () => {
  return (
    <section className="  bg-gradient-to-r from-teal-300 to-teal-700 rounded-lg container py-16 px-24">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center basis-3/5">
          <span className=" rounded-full bg-white p-10" />

          <h2 className=" font-bold text-3xl text-left text-wrap text-white">
            Tem um tópico que gostava de partilhar com a comunidade?
          </h2>
        </div>

        <div className=" font-semibold text-lg uppercase text-center items-center">
          <Link
            href="#"
            className="flex flex-row items-center rounded-lg w-full p-2 gap-2 bg-mf-secondary hover:bg-mf-secondaryVariation focus:ring-4  text-sm"
          >
            Join Community
            <ArrowUpRight className="" />
          </Link>
        </div>
      </div>
    </section>
  );
};
