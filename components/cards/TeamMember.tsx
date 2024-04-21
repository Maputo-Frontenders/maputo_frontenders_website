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
        <div>
          <Image
            src={props.photo}
            alt={props.name}
            className="w-full rounded-xl"
          />
          <div className="bg-gradient-to-b from-transparent via-transparent to-black py-2 absolute bottom-0 w-full opacity-500 transition-opacity duration-700 rounded-b-xl">
            <div className="flex flex-col items-start text-white px-4">
              <h3 className=" font-semibold text-lg">{props.name}</h3>
              <h5 className=" font-light">{props.role}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
