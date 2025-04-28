import { InstagramIcon, Twitter, YoutubeIcon } from "lucide-react";
import { Locale } from "@/lib/getDictionary";
import { LinkedinIcon } from "lucide-react";
import { ROUTES } from "@/utils/routes";

export const navLinks = (lang: Locale) => {
  return lang === "pt"
    ? [
        { name: "Sobre", href: ROUTES.ABOUT, isExternal: false },
        { name: "Eventos", href: ROUTES.LIST_EVENTS, isExternal: false },
        {
          name: "Contato",
          href: ROUTES.CONTACT,
          isExternal: false,
          description: "contacto@maputofrontenders.com",
        },
        // { name: "Loja", href: "/", isExternal: true },
        // { name: "Blog", href: "/", isExternal: true },
        {
          name: "Jobs",
          href: "https://maputofrontenders.propel.community/jobs",
          isExternal: true,
        },
      ]
    : [
        { name: "About", href: ROUTES.ABOUT, isExternal: false },
        { name: "Events", href: ROUTES.LIST_EVENTS, isExternal: false },
        {
          name: "Contact",
          href: ROUTES.CONTACT,
          isExternal: false,
          description: "contacto@maputofrontenders.com",
        },
        // { name: "Shop", href: "/", isExternal: true },
        // { name: "Blog", href: "/", isExternal: true },
        {
          name: "Jobs",
          href: "https://maputofrontenders.propel.community/jobs",
          isExternal: true,
        },
      ];
};

export const socialLinks = [
  { name: "X", href: "https://twitter.com/mptfrontenders", icon: Twitter },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/maputo-frontenders",
    icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mptfrontenders/",
    icon: InstagramIcon,
  },
  {
    name: "YouTube",
    href: "http://www.youtube.com/@mptfrontenders",
    icon: YoutubeIcon,
  },
];
