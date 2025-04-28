// TYPES/INTERFACES
import { LucideIcon } from "lucide-react";
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
  slug: {
    current: string;
  };
  id: number;
  type: eventTypes;
  image: {
    asset: {
      _ref: any;
      _type: any;
    };
  };
  title: string;
  tags: string[];
  description: string;
  location: string;
  date: {
    start: string;
    end: string;
  };
  status: eventStatusTypes;
  agendaFile?: {
    _type: "file";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  galleryLink?: string;
  rsvpLink?: string;
  speakers?: SpeakerProps[];
  partners?: {
    name: string;
    image: {
      asset: {
        _ref: any;
        _type: any;
      };
    };
    link: string;
  }[];
};

export type SpeakerProps = {
  name: string;
  role: string;
  image: {
    asset: {
      _ref: any;
      _type: any;
    };
  };
  company: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
};

export interface TeamMemberSocialProps {
  link: string;
  icon: LucideIcon;
}

export interface SanitySocialData {
  github?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  roleColor: string;
  bio?: string;
  social?: TeamMemberSocialProps[] | SanitySocialData;
}
