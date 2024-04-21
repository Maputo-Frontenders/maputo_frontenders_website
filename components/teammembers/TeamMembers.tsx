import React from "react";
import { team } from "./Items";
import Image from "next/image";
import { TeamMember } from "../cards/TeamMember";
import BlurBackground from "@/public/blur-background.svg";

export const TeamMembers = () => {
  return (
    <section className="w-full container text-center gap-4 flex flex-col">
      <div className="flex flex-col ga-2">
        <h4 className=" font-normal text-sm text-white uppercase">
          Nossa team
        </h4>
        <h2 className="text-white font-bold text-2xl">
          Conheça a equipe por detrás da Maputo Frontenders
        </h2>
      </div>
      <div className="relative grid grid-cols-2 md:grid-cols-4  gap-4 overflow-hidden">
        <Image
          src={BlurBackground}
          alt="Blur Background"
          className="absolute -z-50 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        {team.map((item) => (
          <div key={item.name}>
            <TeamMember {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};
