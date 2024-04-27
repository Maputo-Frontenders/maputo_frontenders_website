import React from "react";
import { team } from "./Items";
import Image from "next/image";
import { TeamMember } from "../cards/TeamMember";
import BlurBackground from "@/public/blur-background.svg";

export const TeamMembers = () => {
  return (
    <section
      id="team"
      className="w-full container text-center flex flex-col space-y-8"
    >
      <h4 className=" font-normal text-sm text-white uppercase">Nossa team</h4>
      <h2 className="text-white font-bold text-2xl">
        Conheça a equipe por detrás da Maputo Frontenders
      </h2>

      <div className="relative grid grid-cols-2 md:grid-cols-5  gap-4 overflow-hidden">
        {team.map((item) => (
          <div key={item.name}>
            <TeamMember {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};
