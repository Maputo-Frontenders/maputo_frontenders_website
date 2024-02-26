import Image from "next/image";
import { Button } from "../ui/button";
import { cards, goals } from "./itens";
import GoalImage from "@/assets/purpose/purpose-image.png";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./infinite-moving-cards";

// todo: inifinity scroll

export const Purpose = () => {
  return (
    <section className="w-full text-mf-white space-y-8 px-8">
      <h4 className="uppercase text-sm text-center">Quem somos?</h4>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center">
          A maior comunidade de desenvolvedores frontend em Moçambique
        </h2>
        <p className="max-w-[650px] text-center text-sm">
          Somos uma comunidade de desenvolvedores com foco em partilhar
          conhecimento sobre as tecnologias e boas praticas de desenvolvimento
          frontend.
        </p>
      </div>

      <div className="py-4 flex items-center justify-center gap-2">
        <Button className="w-32 bg-mf-least ring-2 ring-mf-secondaryVariation hover:bg-mf-blue ">
          Objectivos
        </Button>
        <Button className="w-32 bg-mf-least active:ring-2 ring-mf-secondaryVariation  hover:bg-mf-blue  ">
          Valores
        </Button>
      </div>

      <div className="flex justify-between container">
        <div className="flex flex-col gap-4 max-w-lg">
          {goals.map((item) => (
            <div
              className="border-l-2 border-mf-secondaryVariation px-2"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <Image src={GoalImage} alt="" />
      </div>

      <div className="pt-4 flex justify-between gap-4">
        <InfiniteMovingCards />
      </div>
    </section>
  );
};
