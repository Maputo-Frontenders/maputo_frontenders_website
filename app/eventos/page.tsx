"use client";
import { EventList } from "@/components/Events/EventList";
import { Button } from "@/components/ui/button";
import useGetEvents from "@/hooks/useGetEvents";
import React, { useState } from "react";

export default function Eventos() {
  const { events, fetchMore } = useGetEvents();
  const [getMore, setGetMore] = useState(0);

  return (
    <main className="container flex flex-col gap-4 justify-center items-center">
      <div className=" text-white text-center space-y-8">
        <h5 className=" font-normal text-sm">EVENTOS</h5>
        <h1 className=" font-bold text-2xl max-w-4xl">
          Junte-se a nós e participe dos eventos que estão moldando o futuro do
          desenvolvimento frontend em Moçambique
        </h1>
      </div>

      <EventList eventos={events?.results} />

      <Button
        onClick={() => {
          setGetMore(getMore + 1);
          fetchMore();
        }}
        className="mb-4 truncate text-clip  flex items-center justify-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover text-sm text-mf-least group"
      >
        Carregar mais
      </Button>
    </main>
  );
}
