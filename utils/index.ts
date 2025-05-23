import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import type {
  TeamMemberProps,
  TeamMemberSocialProps,
  SanitySocialData,
  SpeakerProps,
} from "@/types";

export function ParserToHtml(text: string, allowedAttributes: string[] = []) {
  return parse(
    DOMPurify.sanitize(text, {
      ALLOWED_ATTR: allowedAttributes,
    })
  );
}

export const getTranslationsLocal = () => [
  { language: "pt", path: "/pt" },
  { language: "en", path: "/en" },
];

export function formatDateToDDMMYYYY(date: string) {
  const parsedDate = new Date(date);
  const day = String(parsedDate.getDate()).padStart(2, "0");
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const year = parsedDate.getFullYear();
  return `${day}/${month}/${year}`;
}

export function processSocialMediaLinks<
  T extends TeamMemberProps | SpeakerProps
>(member: T): T {
  if (!member.social) {
    return {
      ...member,
      social: [],
    };
  }

  // If social is already an array of TeamMemberSocialProps, return as is
  if (Array.isArray(member.social)) {
    return member;
  }

  // Process social data from Sanity format
  if (typeof member.social === "object") {
    const sanitySocial = member.social as SanitySocialData;
    const processedSocial: TeamMemberSocialProps[] = [];

    if (sanitySocial.github) {
      processedSocial.push({
        link: sanitySocial.github,
        icon: Github,
      });
    }

    if (sanitySocial.twitter) {
      processedSocial.push({
        link: sanitySocial.twitter,
        icon: Twitter,
      });
    }

    if (sanitySocial.linkedin) {
      processedSocial.push({
        link: sanitySocial.linkedin,
        icon: Linkedin,
      });
    }

    if (sanitySocial.instagram) {
      processedSocial.push({
        link: sanitySocial.instagram,
        icon: Instagram,
      });
    }

    return {
      ...member,
      social: processedSocial,
    };
  }

  // Fallback: return member with empty social array
  return {
    ...member,
    social: [],
  };
}

/**
 * Transforms a Sanity image reference to a proper URL
 * @param imageRef - The Sanity image reference object or string
 * @returns The full CDN URL for the image or a placeholder URL if no image exists
 */
export function getSanityImageUrl(imageRef: any): string {
  if (!imageRef || !imageRef.asset) {
    return "/placeholder-member.jpg";
  }

  const ref = imageRef.asset._ref;

  return `https://cdn.sanity.io/images/${
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  }/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${ref
    .replace("image-", "")
    .replace("-jpg", ".jpg")
    .replace("-png", ".png")
    .replace("-jpeg", ".jpeg")
    .replace("-webp", ".webp")}`;
}

export function generatePagination(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5, "ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      "ellipsis",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis",
    totalPages,
  ];
}

export function calculatePagination(
  currentPage: number,
  totalItems: number,
  itemsPerPage: number
) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsPerPage,
    totalItems,
  };
}
