import * as React from "react";
import { EventCarousel } from "./event-carousel";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DictionaryProps } from "@/lib/getDictionary";
import { ParserToHtml } from "@/utils";

type Props = {
  intl: DictionaryProps;
};

export function EventsSection({ intl }: Props) {
  return (
    <section
      className=" flex flex-col w-full items-center py-10 bg-mf-dark space-y-8"
      id="eventos"
    >
      <h2 className="text-sm text-mf-secondProposal uppercase">
        {intl.events.title}
      </h2>
      <h3 className="container text-2xl text-mf-white text-center font-bold">
        {ParserToHtml(intl.events.subtitle, [
          "class",
          "font-bold bg-gradient-cyan-pink bg-clip-text text-transparent ",
        ])}
      </h3>

      <EventCarousel />

      <Link
        href={""}
        className="w-fit truncate text-clip  flex items-center justify-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover text-sm text-mf-least group"
      >
        {intl.events.viewAll}
        <ArrowUpRight className="max-[400px]:hidden ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
      </Link>
    </section>
  );
}
