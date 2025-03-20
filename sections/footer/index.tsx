import React from "react";
import Link from "next/link";
import { socialLinks } from "./data";
import { Locale } from "@/lib/getDictionary";
import { getDictionary } from "@/lib/getDictionary";
import Navigation from "./links";

type Props = {
  params: { lang: Locale };
  className?: string;
};

export async function Footer({ params }: Props) {
  const intl = await getDictionary(params.lang);
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-mf-least text-mf-white py-16 px-4 md:px-8 lg:px-20">
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <Navigation params={params} />
      </div>

      <div className="flex justify-center gap-6 md:gap-8 mb-12 flex-wrap ">
        {socialLinks.map((socialMedia) => (
          <Link
            key={socialMedia.name}
            href={socialMedia.href}
            className=" bg-mf-dark rounded-full p-2  gap-3 "
          >
            <socialMedia.icon className="py-1 px-0 text-white" />
          </Link>
        ))}
      </div>

      <div className="text-center ">
        © {currentYear} Maputo Frontenders. {intl.footer.allRightsReserved}
      </div>
    </div>
  );
}
