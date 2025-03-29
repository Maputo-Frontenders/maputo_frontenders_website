import { TeamMemberProps } from "@/types";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const teamMembers: TeamMemberProps[] = [
  {
    name: "Hete Odete",
    role: "Presidente",
    image: "/members/hete-odete.jpeg",
    roleColor: "#ff9f24",
    bio: "-",
    social: [
      {
        link: "https://github.com/hete-odete",
        icon: Github,
      },
    ],
  },
  {
    name: "Raimundo Molide",
    role: "Vice-Presidente",
    image: "/members/raimundo-molide.png",
    roleColor: "#8244ff",
    bio: "-",
    social: [
      {
        link: "https://github.com/raimundomolide",
        icon: Github,
      },
      {
        link: "https://www.instagram.com/raimundomolide",
        icon: Instagram,
      },
      {
        link: "https://twitter.com/raimundomolide",
        icon: Twitter,
      },
    ],
  },
  {
    name: "Luís Milice",
    role: "Designer",
    image: "/members/luis-milice.png",
    roleColor: "#16f8b6",
    bio: "-",
    social: [
      {
        link: "https://twitter.com/luis_milice",
        icon: Twitter,
      },
      {
        link: "https://github.com/luis-milice",
        icon: Github,
      },
      {
        link: "https://www.instagram.com/luis_milice",
        icon: Instagram,
      },
    ],
  },
  {
    name: "Juma Mardel",
    role: "Coordenador de Actividades",
    image: "/members/juma-mardel.png",
    roleColor: "#1fcff1",
    bio: "-",
    social: [
      {
        link: "https://twitter.com/juma_mardel",
        icon: Twitter,
      },
      {
        link: "https://github.com/juma-mardel",
        icon: Github,
      },
      {
        link: "https://www.instagram.com/juma_mardel",
        icon: Instagram,
      },
    ],
  },
  {
    name: "Werson Pofo",
    role: "Gestor de Mídias Sociais",
    image: "/members/werson-pofo.jpeg",
    roleColor: "#16f8b6",
    bio: "-",
    social: [
      {
        link: "https://twitter.com/werson_pofo",
        icon: Twitter,
      },
      {
        link: "https://github.com/werson-pofo",
        icon: Github,
      },
      {
        link: "https://www.instagram.com/werson_pofo",
        icon: Instagram,
      },
      {
        link: "https://www.linkedin.com/in/werson-pofo",
        icon: Linkedin,
      },
    ],
  },
  {
    name: "Sweyd Manaf",
    role: "Tech Lead",
    image: "/members/sweyd-manaf.jpeg",
    roleColor: "#1fcff1",
    bio: "-",
    social: [
      {
        link: "https://twitter.com/sweyd_manaf",
        icon: Twitter,
      },
      {
        link: "https://github.com/sweyd-manaf",
        icon: Github,
      },
      {
        link: "https://www.instagram.com/sweyd_manaf",
        icon: Instagram,
      },
    ],
  },
];
