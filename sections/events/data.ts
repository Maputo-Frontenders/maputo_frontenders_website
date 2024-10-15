export type Event = {
  id: number;
  title: string;
  imageUrl: string;
  type: string;
  status: string;
};

export const events: Event[] = [
  {
    id: 1,
    title: "Linguagens de Programação em Português - Design Líquido",
    imageUrl: "/events/image 11.png",
    type: "Presencial",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Linguagens de Programação em Português - Design Líquido",
    imageUrl: "/events/image 12.png",
    type: "Virtual",
    status: "",
  },
  {
    id: 3,
    title: "Hacktoberfest - Aprenda a Contribuir em Projectos Open-Source",
    imageUrl: "/events/image 13.png",
    type: "Virtual",
    status: "",
  },
  {
    id: 4,
    title: "Hacktoberfest - Aprenda a Contribuir em Projectos Open-Source",
    imageUrl: "/events/image 13.png",
    type: "Virtual",
    status: "",
  },
];
