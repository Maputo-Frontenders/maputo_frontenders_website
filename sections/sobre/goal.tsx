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
          NOSSO OBJECTIVO COMO COMUNIDADE
        </h2>
        <h3 className="text-2xl font-bold max-w-2xl mx-auto">
          <span className="bg-gradient-orange-pink bg-clip-text text-transparent">
            Contribuir para o crescimento
          </span>{" "}
          e fortalecimento do ecossistema de desenvolvimento <br /> de software
          em Moçambique
        </h3>
        <p className="max-w-2xl mx-auto">
          Desejamos moldar a geração de profissionais, promovendo um ambiente
          colaborativo e dinâmico onde o conhecimento circula livremente,
          impulsionando o crescimento tecnológico no país
        </p>
      </div>
    </section>
  );
}
