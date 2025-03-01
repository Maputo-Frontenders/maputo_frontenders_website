import { teamMembers } from "./data";
import { TeamMemberCard } from "./team-member-card";

export function TeamMembers() {
  return (
    <section className="container w-full text-white space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-sm uppercase text-mf-secondProposal">Nossa team</h2>
        <p className="text-xl md:text-2xl font-medium">
          <span className="bg-gradient-orange-purple bg-clip-text text-transparent">
            Conheça a equipe
          </span>{" "}
          por detrás da Maputo Frontenders
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-10">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
