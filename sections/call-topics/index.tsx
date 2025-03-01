import Image from "next/image";
import IconArrowRight from "@/assets/svg/arrow-right.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CallTopicsSection() {
  return (
    <section className="container w-full text-white pb-16">
      <div className={cn("rounded-lg p-[2px] bg-gradient-teal-purple")}>
        <div className="flex w-full h-full bg-mf-dark rounded-md ">
          <div className="w-full flex justify-between items-center gap-4 px-24 py-14">
            <div className="flex gap-10 items-center">
              <Image src={IconArrowRight} alt="icon-arrow-right" />

              <h4 className="font-medium text-xl max-w-lg">
                Tem um tópico que gostava de partilhar com a comunidade?
              </h4>
            </div>

            <Link
              target="_blank"
              href={""}
              className="w-fit mx-right   flex items-center justify-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover text-sm text-mf-least group"
            >
              Junte-se a nós
              <ArrowUpRight className="max-[400px]:hidden ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
