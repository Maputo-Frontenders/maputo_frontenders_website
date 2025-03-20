import { client } from "@/lib/sanity";
import { EventProps } from "@/types";

export async function getEvents(lang: string) {
  const query = `*[_type == "events" && language == "${lang}"] | order(_createdAt desc) {title, slug, type, image, tags, description, location, date, status, agendaImages, galleryLink, rsvpLink, speakers, partners}`;
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
  const query = `*[_type == "events" && language == "${lang}" && slug.current == '${slug}'] {title, slug, type, image, tags, description, location, date, status, agendaImages, galleryLink, rsvpLink, speakers, partners}[0]`;
  const data: EventProps = await client.fetch(query, { lang });
  return data;
}
