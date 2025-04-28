import { DictionaryProps, Locale } from "@/lib/getDictionary";
import { ParserToHtml } from "@/utils";
import { TeamMemberCards } from "./team-member-card";
import { getTeamMembers } from "./data";

type Props = {
  intl: DictionaryProps;
  isSubtitle?: boolean;
  isActiveAnimation?: boolean;
  lang: Locale;
};

export async function TeamMembers({
  intl,
  isSubtitle = false,
  isActiveAnimation = false,
  lang,
}: Props) {
  const teamMembers = await getTeamMembers(lang);

  return (
    <section
      className="md:container w-full text-white space-y-8"
      id="team"
      aria-labelledby="team-heading"
      role="region"
    >
      <div className="container text-center space-y-2">
        <h2
          id="team-heading"
          className="text-sm uppercase text-mf-secondProposal"
        >
          {intl.team.title}
        </h2>
        <p className="text-2xl font-bold">
          {ParserToHtml(intl.team.subtitle, [
            "class",
            "bg-gradient-orange-purple bg-clip-text text-transparent",
          ])}
        </p>
        {isSubtitle && <p className="max-w-lg mx-auto">{intl.team.joinUs}</p>}
      </div>

      <TeamMemberCards
        isActiveAnimation={isActiveAnimation}
        teamMembers={teamMembers}
      />
    </section>
  );
}
