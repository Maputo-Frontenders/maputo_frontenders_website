import { teamMembers } from "./data";
import { TeamMemberCard } from "./team-member-card";
import { DictionaryProps } from "@/lib/getDictionary";
import { ParserToHtml } from "@/utils";
type Props = {
  intl: DictionaryProps;
};

export function TeamMembers({ intl }: Props) {
  return (
    <section className="md:container w-full text-white space-y-8" id="team">
      <div className="container text-center space-y-2">
        <h2 className="text-sm uppercase text-mf-secondProposal">
          {intl.team.title}
        </h2>
        <p className="text-2xl font-bold">
    
          {ParserToHtml(intl.team.subtitle, [
            "class",
            "bg-gradient-orange-purple bg-clip-text text-transparent",
          ])}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:mx-10">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} intl={intl} />
        ))}
      </div>
    </section>
  );
}
