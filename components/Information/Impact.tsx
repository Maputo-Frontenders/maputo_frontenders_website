import { impactCards } from "@/data/mainData";

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
        {impactCards.map((card) => {
          return (
            <div className="bg-mf-least py-16 px-8 overflow-hidden col-span-1 rounded-lg border-2 border-mf-white/5 hover:border-mf-white/10 duration-150">
              <div className={`flex flex-col gap-2 text-center`}>
                <span className="text-gradient text-5xl font-bold">
                  +{card.number}
                </span>
                <span className="text-lg font-bold">{card.title}</span>
                <span className=" text-center">{card.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
