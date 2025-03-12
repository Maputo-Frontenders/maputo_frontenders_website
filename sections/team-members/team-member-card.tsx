"use client";

import React from "react";
import Image from "next/image";
import { TeamMemberProps } from "@/types";

export function TeamMemberCard({ member }: { member: TeamMemberProps }) {
  return (
    <div className="w-60 md:w-64 h-[300px] relative overflow-hidden rounded-lg border-0 shadow-sm">
      <div className="relative h-full">
        <Image
          src={member.image}
          alt={member.name}
          width={1024}
          height={1024}
          className="object-cover object-top w-full h-full"
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
  );
}
