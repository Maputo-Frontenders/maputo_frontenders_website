import Image from "next/image";
import IconArrowRight from "@/assets/svg/arrow-right.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DictionaryProps } from "@/lib/getDictionary";

type Props = {
  intl: DictionaryProps;
};

export function CallTopicsSection({ intl }: Props) {
  return (
    <section
      className="container w-full text-white pb-16 md:px-12"
      aria-labelledby="call-topics-heading"
    >
      <div className={cn("rounded-lg p-[2px] bg-gradient-teal-purple")}>
        <div
          className="flex w-full h-full bg-mf-dark rounded-md "
          aria-roledescription="call topics"
        >
          <div
            className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-8 md:px-24 py-14"
            aria-roledescription="call topics content"
          >
            <div className="flex flex-col md:flex-row  gap-8 md:gap-10 items-start md:items-center">
              <Image src={IconArrowRight} alt="icon-arrow-right" />

              <h4 className="font-medium text-2xl max-w-sm md:max-w-lg">
                {intl.callTopics.title}
              </h4>
            </div>

            <Link
              target="_blank"
              href={""}
              className="w-fit mx-right   flex items-center justify-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover text-sm text-mf-least group"
            >
              {intl.hero.cta}
              <ArrowUpRight className="max-[400px]:hidden ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
