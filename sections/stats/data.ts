import MagicIcon from "@/assets/icons/magic-icon.svg";
import HouseIcon from "@/assets/icons/house-icon.svg";
import MembersIcon from "@/assets/icons/members-icon.svg";
import { DictionaryProps, Locale } from "@/lib/getDictionary";

export const cards = ({ intl }: { intl: DictionaryProps }) => [
  {
    title: intl.stats.cardsLarge.events.title,
    gradientColor: "bg-gradient-orange-purple",
    icon: HouseIcon,
    description: intl.stats.cardsLarge.events.description,
  },
  {
    title: intl.stats.cardsLarge.spaces.title,
    gradientColor: "bg-gradient-teal-cyan",
    icon: MagicIcon,
    description: intl.stats.cardsLarge.spaces.description,
  },
  {
    title: intl.stats.cardsLarge.members.title,
    gradientColor: "bg-gradient-cyan-purple",
    icon: MembersIcon,
    description: intl.stats.cardsLarge.members.description,
  },
];

export const cardsMini = ({ intl }: { intl: DictionaryProps }) => [
  {
    title: intl.stats.cards.events.title,
    gradientColor: "bg-gradient-orange-purple",
    icon: HouseIcon,
    description: intl.stats.cards.events.description,
  },
  {
    title: intl.stats.cards.spaces.title,
    gradientColor: "bg-gradient-teal-cyan",
    icon: MagicIcon,
    description: intl.stats.cards.spaces.description,
  },
  {
    title: intl.stats.cards.members.title,
    gradientColor: "bg-gradient-cyan-purple",
    icon: MembersIcon,
    description: intl.stats.cards.members.description,
  },
];
