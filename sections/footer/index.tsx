import React from "react";
import { socialMediaLinks } from "./data";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-mf-least flex flex-col-reverse gap-4 justify-between px-20 py-4 items-center md:flex-row">
      <div className="text-white font-normal text-base">
        Feito com 💜 pela MF
      </div>

      <div className="flex gap-2 md:gap-4">
        {socialMediaLinks.map((socialMedia) => (
          <Link
            key={socialMedia.description}
            href={socialMedia.href}
            className=" bg-mf-dark rounded-full p-2  gap-3 "
          >
            <socialMedia.icon className="py-1 px-0 text-white" />
          </Link>
        ))}
      </div>

      <div className="text-white font-medium text-sm">
        &copy; {currentYear} Maputo Frontenders
      </div>
    </div>
  );
};
