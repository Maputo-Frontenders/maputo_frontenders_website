import { InstagramIcon, Twitter, YoutubeIcon } from "lucide-react";
import { Locale } from "@/lib/getDictionary";
import { LinkedinIcon } from "lucide-react";

export const navLinks = (lang: Locale) => {
  return lang === "pt"
    ? [
        { name: "Sobre", href: "/pt/about", isExternal: false },
        { name: "Eventos", href: "/pt/events", isExternal: false },
        {
          name: "Contato",
          href: "/pt/contact",
          isExternal: false,
          description: "contacto@maputofrontenders.com",
        },
        { name: "Loja", href: "/", isExternal: true },
        { name: "Blog", href: "/", isExternal: true },
        { name: "Jobs", href: "/", isExternal: true },
      ]
    : [
        { name: "About", href: "/en/about", isExternal: false },
        { name: "Events", href: "/en/events", isExternal: false },
        {
          name: "Contact",
          href: "/en/contact",
          isExternal: false,
          description: "contacto@maputofrontenders.com",
        },
        { name: "Shop", href: "/", isExternal: true },
        { name: "Blog", href: "/", isExternal: true },
        { name: "Jobs", href: "/", isExternal: true },
      ];
};

export const socialLinks = [
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
  { name: "X", href: "https://twitter.com/mptfrontenders", icon: Twitter },
  {
    name: "YouTube",
    href: "http://www.youtube.com/@mptfrontenders",
    icon: YoutubeIcon,
  },
];
