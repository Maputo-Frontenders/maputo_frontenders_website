// TYPES/INTERFACES

type eventTypes = "in-person" | "virtual";
export enum EventTypesEnum {
  "in-person" = "Presencial",
  "virtual" = "Virtual",
}

type eventStatusTypes = "upcoming" | "current" | "past";
export enum EventStatusEnum {
  "upcoming" = "Upcoming",
  "current" = "current",
  "past" = "",
}

export type EventProps = {
  id: number;
  title: string;
  imageUrl: string;
  type: eventTypes;
  status: eventStatusTypes;
};
