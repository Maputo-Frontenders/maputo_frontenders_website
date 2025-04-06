import { client } from "@/lib/sanity";
import { EventProps } from "@/types";

export async function getEvents(lang: string) {
  const query = `*[_type == "events" && language == "${lang}"] | order(_createdAt desc) {title, slug, type, image, description, location, date, status,}`;
  const data: EventProps[] = await client.fetch(query, { lang });
  const sortedByNewest = data.sort((a, b) => {
    return new Date(b.date.start).getTime() - new Date(a.date.start).getTime();
  });
  return sortedByNewest;
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
