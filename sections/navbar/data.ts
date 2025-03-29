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
          label: "Team",
          link: "#team",
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
          label: "Team",
          link: "#team",
        },
      ];
};
