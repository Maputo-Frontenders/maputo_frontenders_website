import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  photo: StaticImageData;
}
export const TeamMember: React.FC<TeamMemberProps> = (props) => {
  return (
    <div className="w-full sm:max-w-[300px] ">
      <div className="relative group mb-5 ">
        <div className="h-[326px]">
          <Image
            src={props.photo}
            alt={props.name}
            className="w-full rounded-xl h-full object-cover"
          />
        </div>
        <div className=" py-2 transition-opacity duration-700 rounded-b-xl">
          <div className="flex flex-col items-start text-mf-white font-mono text-left">
            <h3 className=" font-semibold text-lg">{props.name}</h3>
            <h5 className=" font-light">{props.role}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
