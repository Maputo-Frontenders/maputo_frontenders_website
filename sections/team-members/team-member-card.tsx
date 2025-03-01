"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TeamMemberProps } from "@/types";
import { Facebook, Twitter } from "lucide-react";

export function TeamMemberCard({
  member,
  disableAnimation = true,
}: {
  member: TeamMemberProps;
  disableAnimation?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!disableAnimation) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!disableAnimation) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className="max-w-64 max-h-72 relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out"
      style={{
        borderRadius: isHovered && !disableAnimation ? "16px" : "8px",
        border: "2px solid transparent",
        backgroundClip: "padding-box",
        backgroundOrigin: "border-box",
        backgroundImage:
          isHovered && !disableAnimation
            ? "linear-gradient(white, white), linear-gradient(to right, #00ffcc, #8244ff)"
            : "linear-gradient(transparent, transparent), linear-gradient(to right, transparent, transparent)",
        boxShadow:
          isHovered && !disableAnimation
            ? "0 10px 25px rgba(0, 0, 0, 0.1)"
            : "none",
        height: "400px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative transition-all duration-500 ease-in-out flex justify-center"
        style={{
          paddingTop: isHovered && !disableAnimation ? "1.5rem" : "0",
          height: isHovered && !disableAnimation ? "auto" : "100%",
        }}
      >
        <div
          className="relative overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            width: isHovered && !disableAnimation ? "128px" : "100%",
            height: isHovered && !disableAnimation ? "128px" : "100%",
            borderRadius: isHovered && !disableAnimation ? "50%" : "0",
            transform:
              isHovered && !disableAnimation
                ? "translateY(0)"
                : "translateY(0)",
          }}
        >
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="object-cover w-full h-full transition-all duration-500 ease-in-out"
            style={{
              filter:
                isHovered && !disableAnimation
                  ? "grayscale(0)"
                  : "grayscale(0)",
              transform:
                isHovered && !disableAnimation ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-500 ease-in-out"
          style={{ opacity: isHovered && !disableAnimation ? 0 : 1 }}
        />
      </div>

      <div
        className="p-4 w-full transition-all duration-500 ease-in-out"
        style={{
          position: isHovered && !disableAnimation ? "static" : "absolute",
          bottom: isHovered && !disableAnimation ? "auto" : "0",
          left: isHovered && !disableAnimation ? "auto" : "0",
          textAlign: isHovered && !disableAnimation ? "center" : "left",
          transform:
            isHovered && !disableAnimation ? "translateY(0)" : "translateY(0)",
        }}
      >
        <h3
          className="font-semibold text-xl transition-all duration-500 ease-in-out"
          style={{
            color: isHovered && !disableAnimation ? "#17253d" : "white",
            marginTop: isHovered && !disableAnimation ? "0.5rem" : "0",
          }}
        >
          {member.name}
        </h3>
        <p
          className="text-sm font-light tracking-tight transition-all duration-500 ease-in-out"
          style={{
            color:
              isHovered && !disableAnimation ? "#8244ff" : member.roleColor,
          }}
        >
          {member.role}
        </p>

        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isHovered && !disableAnimation ? "200px" : "0",
            opacity: isHovered && !disableAnimation ? 1 : 0,
            marginTop: isHovered && !disableAnimation ? "1rem" : "0",
          }}
        >
          <p className="text-[#17253d] text-sm text-center px-4">
            {member.bio}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="#"
              className="text-[#17253d] hover:text-[#8244ff] transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-[#17253d] hover:text-[#8244ff] transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
