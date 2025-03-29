"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { TeamMemberProps } from "@/types";
import type { DictionaryProps } from "@/lib/getDictionary";
import { cn } from "@/lib/utils";
import { teamMembers } from "./data";
type Props = {
  member: TeamMemberProps;
  intl: DictionaryProps;
  isActiveAnimation?: boolean;
};

export function TeamMemberCard({
  member,
  intl,
  isActiveAnimation = false,
}: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective w-80 md:w-64 h-[300px]">
      {isActiveAnimation ? (
        <motion.div
          className="relative w-full h-full transition-all duration-500"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          whileHover={{ rotateY: 180 }}
          onClick={toggleFlip}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front side */}
          <motion.div
            className="absolute w-full h-full backface-hidden rounded-lg border-0 shadow-sm overflow-hidden cursor-pointer"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative h-full">
              <Image
                src={member.image}
                alt={member.name}
                width={1024}
                height={1024}
                className="object-cover object-top w-full h-full grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h3 className="font-semibold text-xl text-white">
                {member.name}
              </h3>
              <p
                className="text-sm font-light tracking-tight"
                style={{ color: member.roleColor }}
              >
                {member.role}
              </p>

              {/* Flip indicator
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-1.5 rounded-full text-white">
                <RotateCw size={16} className="animate-pulse" />
              </div> */}
            </div>
          </motion.div>

          {/* Back side */}
          <motion.div
            className="absolute w-full h-full backface-hidden rounded-lg border-0 shadow-sm overflow-hidden
             bg-mf-least bg-gradient-dark-least  flex flex-col items-center justify-center p-6 text-center cursor-pointer text-mf-white"
            style={{
              backfaceVisibility: "hidden",
              rotateY: 180,
            }}
          >
            <div
              className={cn(
                "mb-2 rounded-full overflow-hidden border-4  w-24 h-24"
              )}
              style={{
                borderColor: member.roleColor,
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="object-cover w-full h-full grayscale"
              />
            </div>
            <div className="space-y-2">
              <div>
                <h2 className="text-lg font-bold  ">{member.name}</h2>
                <p
                  className=" font-medium text-sm"
                  style={{ color: member.roleColor }}
                >
                  {member.role}
                </p>
              </div>

              <p className="text-sm">
                Hi there! I like not doing anything at all. So just text me
              </p>
            </div>

            <div className="mt-2  flex space-x-2 justify-self-end">
              {member.social?.map((social) => (
                <a
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  className="text-gray-400 hover:text-mf-secondary bg-mf-dark rounded-full p-2 transition-colors duration-300 
                  w-8 h-8 flex items-center justify-center"
                >
                  <social.icon className="py-px px-0 text-white hover:text-mf-secondary transition-all duration-300 p-2" />
                </a>
              ))}
            </div>

            {/* Flip back indicator
            <div className="absolute top-3 right-3 bg-slate-800/20 backdrop-blur-sm p-1.5 rounded-full text-slate-800">
              <RotateCw size={16} className="animate-pulse" />
            </div> */}
          </motion.div>
        </motion.div>
      ) : (
        // Non-animated fallback
        <div className="relative w-full h-full rounded-lg border-0 shadow-sm overflow-hidden">
          <div className="relative h-full">
            <Image
              src={member.image}
              alt={member.name}
              width={1024}
              height={1024}
              className="object-cover object-top w-full h-full grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="font-semibold text-xl text-white">{member.name}</h3>
            <p
              className="text-sm font-light tracking-tight"
              style={{ color: member.roleColor }}
            >
              {member.role}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function TeamMemberCards({
  intl,
  isActiveAnimation = false,
}: {
  intl: DictionaryProps;
  isActiveAnimation?: boolean;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:mx-10">
      {teamMembers.map((member) => (
        <TeamMemberCard
          key={member.name}
          member={member}
          intl={intl}
          isActiveAnimation={isActiveAnimation}
        />
      ))}
    </div>
  );
}
