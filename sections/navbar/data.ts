import { Locale } from "@/lib/getDictionary";

export interface NavItem {
  label: string;
  link: string;
}

export const NavData: (lang: Locale) => NavItem[] = (lang: Locale) => {
  return lang === "pt"
    ? [
        {
          label: "Sobre",
          link: "/sobre",
        },
        {
          label: "Eventos",
          link: "/eventos",
        },
        {
          label: "Contacto",
          link: "/contacto",
        },
      ]
    : [
        {
          label: "About",
          link: "/sobre",
        },
        {
          label: "Events",
          link: "#eventos",
        },
        {
          label: "Contact",
          link: "/contacto",
        },
      ];
};
