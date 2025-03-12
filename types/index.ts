// TYPES/INTERFACES

type eventTypes = "in-person" | "virtual";
export enum EventTypesEnum {
  "in-person" = "Presencial",
  "virtual" = "Virtual",
}

type eventStatusTypes = "upcoming" | "current" | "past";
export enum EventStatusEnum {
  "upcoming" = "Brevemente",
  "current" = "Decorendo",
  "past" = "",
}

export type EventProps = {
  id: number;
  title: string;
  imageUrl: string;
  type: eventTypes;
  status: eventStatusTypes;
  location: string;
  date: string;
};

export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  roleColor: string;
  bio?: string;
}
