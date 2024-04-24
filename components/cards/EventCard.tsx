import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Evento } from "@/models/evento";
import Link from "next/link";
import handlerTipoDeEvento from "@/utils/badge";
import { Badge } from "../ui/badge";

export const EventCard: React.FC<Evento> = (props) => {
  return (
    <div className="relative w-full max-w-[500px] sm:max-w-[300px] group h-full bg-mf-least rounded-lg">
      <Image
        src={props.cropped_picture_url}
        alt={props.title}
        className="w-full rounded-t-lg"
        width={500}
        height={200}
      />

      <div className="flex flex-col gap-4 px-4 py-4 w-full rounded-b-lg ">
        <Badge className="w-fit">{props.event_type_title}</Badge>
        <h3 className="font-semibold text-lg line-clamp-3 text-white">
          {props.title}
        </h3>

        <Link
          href={`/eventos/${props.slug}`}
          className=" underline text-mf-secondProposal "
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
};
