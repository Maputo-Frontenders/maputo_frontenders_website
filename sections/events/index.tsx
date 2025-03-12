import * as React from "react";
import { EventCarousel } from "./event-carousel";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function EventsSection() {
  return (
    <section className="flex flex-col w-full items-center px-8 py-10 bg-mf-dark space-y-8">
      <h2 className="text-sm text-mf-secondProposal uppercase">
        Eventos Recentes
      </h2>
      <h3 className="text-2xl text-mf-white text-center font-bold">
        Junte-se a nós e participe dos eventos que estão a moldar{" "}
        <br className="hidden md:block" />o{" "}
        <span className="font-bold bg-gradient-cyan-pink bg-clip-text text-transparent ">
          futuro do desenvolvimento frontend
        </span>{" "}
        em Moçambique
      </h3>

      <EventCarousel />

      <Link
        target="_blank"
        href={""}
        className="w-fit truncate text-clip  flex items-center justify-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover text-sm text-mf-least group"
      >
        Ver todos eventos
        <ArrowUpRight className="max-[400px]:hidden ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
      </Link>
    </section>
  );
}
