import { ImpactCards } from "./impact-cards";

export const Impact = () => {
  return (
    <section
      id="impacto"
      className="container w-full text-white flex flex-col items-center gap-6"
    >
      <div className="text-center">
        <h2 className="uppercase mb-3">Impacto</h2>
        <h3 className="text-2xl font-bold mb-6">
          Contribuimos para o crescimento do ecossistema tecnológico local
        </h3>
        <p className="max-w-3xl w-full mx-auto font-light">
          Aprender, ensinar e descobrir tudo ligado ao desenvolvimento frontend,
          seja através de meetups, code challenges, hacktons e diversas outras
          formas de partilha de conhecimento e troca de experiencia.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap gap-6">
        <ImpactCards />
      </div>
    </section>
  );
};
