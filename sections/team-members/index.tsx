import { teamMembers } from "./data";
import { TeamMemberCard } from "./team-member-card";

export function TeamMembers() {
  return (
    <section className="container w-full text-white space-y-8" id="team">
      <div className="text-center space-y-2">
        <h2 className="text-sm uppercase text-mf-secondProposal">Nossa team</h2>
        <p className="text-2xl font-bold">
          <span className="bg-gradient-orange-purple bg-clip-text text-transparent">
            Conheça a equipe
          </span>{" "}
          por detrás da Maputo Frontenders
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:mx-10">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
