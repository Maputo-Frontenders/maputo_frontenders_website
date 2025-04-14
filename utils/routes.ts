export const ROUTES = {
  HOME: "/",
  ABOUT: `/sobre`,
  LIST_EVENTS: `/eventos`,
  EVENT_DETAILS: (slug: string) => `/eventos/${slug}`,
  CONTACT: `/contacto`,
};
