import { DictionaryProps } from "@/lib/getDictionary";
import { ParserToHtml } from "@/utils";

type Props = {
  intl: DictionaryProps;
};

export function GoalSection({ intl }: Props) {
  return (
    <section
      className="w-full text-white space-y-8 bg-mf-dark py-10 pb-14"
      id="goal "
    >
      <div className="container text-center space-y-2">
        <h2 className="text-sm uppercase text-mf-cyan">
          {intl.about.goal.title}
        </h2>
        <h3 className="text-2xl font-bold max-w-3xl mx-auto">
          {ParserToHtml(intl.about.goal.heading, [
            "class",
            "bg-gradient-orange-pink bg-clip-text text-transparent",
          ])}
        </h3>
        <p className="max-w-3xl mx-auto">{intl.about.goal.description}</p>
      </div>
    </section>
  );
}
