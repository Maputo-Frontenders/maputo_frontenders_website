import { Locale } from "@/lib/getDictionary";
import { ROUTES } from "@/utils/routes";

export interface NavItem {
  label: string;
  link: string;
}

export const NavData: (lang: Locale) => NavItem[] = (lang: Locale) => {
  return lang === "pt"
    ? [
        {
          label: "Sobre",
          link: ROUTES.ABOUT,
        },
        {
          label: "Eventos",
          link: ROUTES.LIST_EVENTS,
        },
        {
          label: "Contacto",
          link: ROUTES.CONTACT,
        },
      ]
    : [
        {
          label: "About",
          link: ROUTES.ABOUT,
        },
        {
          label: "Events",
          link: ROUTES.LIST_EVENTS,
        },
        {
          label: "Contact",
          link: ROUTES.CONTACT,
        },
      ];
};
