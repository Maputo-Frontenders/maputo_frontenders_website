import { Evento } from "@/models/evento";
import React from "react";
import { EventCard } from "../cards/EventCard";
import LoadingCards from "../cards/LoadingCards";

export const EventList = (eventos: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {eventos.eventos === undefined
        ? Array.from({ length: 8 }, (v, i) => <LoadingCards key={i} />)
        : eventos.eventos?.map((evento: Evento) => (
            <EventCard {...evento} key={evento.title} />
          ))}
    </div>
  );
};
