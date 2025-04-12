import Image from "next/image";
import { cn } from "@/lib/utils";
import { cards } from "./data";
import { DictionaryProps } from "@/lib/getDictionary";
import { ParserToHtml } from "@/utils";

// TODO:
// - animate card on hover;
// - center the last card on medium devices;

type Props = {
  intl: DictionaryProps;
};

export function ImpactSection({ intl }: Props) {
  return (
    <section
      className="w-full text-mf-white space-y-4 container"
      id="impacto"
      aria-labelledby="impact-section-title"
    >
      <h2
        id="impact-section-title"
        className="uppercase text-sm text-center text-mf-orange"
      >
        {intl.stats.title}
      </h2>

      <div className="space-y-10">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-bold text-center">
            {ParserToHtml(intl.stats.subtitle, [
              "class",
              "bg-gradient-to-r from-mf-secondProposal via-mf-lightBlue to-mf-purple text-transparent bg-clip-text",
            ])}
          </h3>
          <p className="max-w-[650px] text-center text-sm">
            {intl.stats.description}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10"
          role="list"
          aria-label={intl.stats.title}
        >
          {cards({ intl }).map((card, index) => (
            <ImpactCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              classNames={card.gradientColor}
              key={card.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactCard({
  icon,
  title,
  description,
  classNames,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  classNames?: string;
  index: number;
}) {
  return (
    <div className={cn("rounded-lg p-[2px]", classNames)} role="listitem">
      <div className="flex w-full h-full bg-mf-background rounded-md p-9 px-12 pb-12 flex-col gap-6">
        <div className="flex items-center gap-4">
          <Image src={icon} alt={`${title} icon`} aria-hidden="true" />
          <h4 id={`impact-card-${index}`} className="font-semibold text-xl">
            {title}
          </h4>
        </div>
        <p
          className="text-sm leading-6 text-mf-white/75"
          aria-labelledby={`impact-card-${index}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
