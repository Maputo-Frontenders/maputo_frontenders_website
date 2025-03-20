import React from "react";
import Link from "next/link";
import { socialLinks } from "./data";
import { Locale } from "@/lib/getDictionary";
import { getDictionary } from "@/lib/getDictionary";
import Navigation from "./links";
import { LocaleSwitcher } from "@/components/locale-switcher";

type Props = {
  params: { lang: Locale };
  className?: string;
};

export async function Footer({ params }: Props) {
  const intl = await getDictionary(params.lang);
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-mf-least text-mf-white py-16 px-4 md:px-8 lg:px-20">
      <div className="flex flex-wrap justify-center  items-center gap-8 mb-12">
        <Navigation params={params} />
        <div className="flex items-center gap-4 sm:gap-6 ">
          <div className="h-4 w-px bg-white hidden sm:block" />
          <LocaleSwitcher />
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mb-10">
        {socialLinks.map((socialMedia) => (
          <Link
            key={socialMedia.name}
            href={socialMedia.href}
            className="text-gray-400 hover:text-mf-secondary transition-colors duration-300"
          >
            <socialMedia.icon className="py-px px-0 text-white hover:text-mf-secondary transition-all duration-300 " />
          </Link>
        ))}
      </div>

      <div className="text-center text-sm">
        © {currentYear} Maputo Frontenders. {intl.footer.allRightsReserved}
      </div>
    </div>
  );
}
