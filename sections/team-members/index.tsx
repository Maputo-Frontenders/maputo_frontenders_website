import { DictionaryProps } from "@/lib/getDictionary";
import { ParserToHtml } from "@/utils";
import { TeamMemberCards } from "./team-member-card";
type Props = {
  intl: DictionaryProps;
  isSubtitle?: boolean;
  isActiveAnimation?: boolean;
};

export function TeamMembers({
  intl,
  isSubtitle = false,
  isActiveAnimation = false,
}: Props) {
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
        {isSubtitle && (
          <p className="max-w-lg mx-auto">
            Junte-se a nós e faça parte de uma comunidade apaixonada que está
            moldando o futuro do desenvolvimento frontend em Moçambique! 💻✨
          </p>
        )}
      </div>

      <TeamMemberCards intl={intl} isActiveAnimation={isActiveAnimation} />
    </section>
  );
}
