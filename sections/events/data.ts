import { client } from "@/lib/sanity";
import { EventProps } from "@/types";

export async function getEvents(lang: string, limit?: number) {
  const query = `*[_type == "events" && language == "${lang}"] | order(date.start desc) ${
    limit ? `[0...${limit}]` : ""
  } {title, slug, type, image, description, location, date, status,}`;
  const data: EventProps[] = await client.fetch(query, { lang });

  return data;
}

export async function getEventBySlug({
  slug,
  lang,
}: {
  slug: string;
  lang: string;
}) {
  const query = `*[_type == "events" && language == "${lang}" && slug.current == '${slug}'] {title, slug, type, image, tags, description, location, date, status, agendaFile, galleryLink, rsvpLink, speakers, partners}[0]`;
  const data: EventProps = await client.fetch(query, { lang });
  return data;
}
