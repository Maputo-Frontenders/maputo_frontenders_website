import { client } from "@/lib/sanity";
import { getSanityImageUrl } from "@/utils";

export async function getTeamMembers(lang: string) {
  const query = `*[_type == "members" && language == "${lang}"] | order(_createdAt asc) {name, role, image, roleColor, bio, social}`;
  const data = await client.fetch(query, { lang });

  return data.map((member: any) => {
    return {
      ...member,
      image: getSanityImageUrl(member.image),
      social: member.social || {},
    };
  });
}
