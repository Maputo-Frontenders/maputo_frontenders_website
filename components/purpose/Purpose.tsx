import { InfiniteMovingCards } from "./infinite-moving-cards";
import { PurposeCard } from "./purpose-card";

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

      <PurposeCard />
      <InfiniteMovingCards />
    </section>
  );
};
