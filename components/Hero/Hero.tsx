import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <section className="container">
      <div className="flex mx-auto justify-center py-3 w-full hover:underline">
        <Link
          href={"#"}
          className="flex items-center font-medium text-sm text-white uppercase"
        >
          Saiba do nosso próximo evento em{" "}
          <ArrowRight className="text-white h-4 w-4 ml-2" />
        </Link>
      </div>

      <div className="mx-auto py-3 w-full text-center">
        <p className="text-4xl font-bold text-white uppercase">
          A maior comunidade de frontend em
        </p>
        <p className="text-4xl font-bold text-white uppercase">Moçambique </p>
      </div>

      <div className="flex mx-auto justify-center py-3 w-full">
        <Link
          href="#"
          className="flex items-center flex-row outline outline-1 outline-mf-secondary hover:bg-gray-700 text-mf-secondary font-bold py-2 px-4 rounded"
        >
          SAIBA MAIS
          <ArrowUpRight className="text-mf-secondary ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
