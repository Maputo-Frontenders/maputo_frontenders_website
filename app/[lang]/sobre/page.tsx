import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Img1 from "@/public/hero/img1.png";
import Img4 from "@/public/hero/img4.png";
import Img5 from "@/public/hero/img5.png";
import Img6 from "@/public/hero/img6.png";
import BlurBackground from "@/assets/svg/violet-light-background.svg";
import SquareBackground from "@/assets/svg/square-background.svg";
import RadialOpacityBackground from "@/assets/svg/radial-opacity-background.svg";
import { cn } from "@/lib/utils";
import { cards, cardsMini } from "@/sections/stats/data";
import Img7 from "@/public/hero/img3.png";
import { TeamMembers } from "@/sections/team-members";
import { getDictionary, Locale } from "@/lib/getDictionary";
import { GoalSection } from "@/sections/sobre/goal";
import { CallTopicsSection } from "@/sections/call-topics";

type Props = {
  params: { lang: Locale };
};

export default async function AboutPage({ params }: Props) {
  const intl = await getDictionary(params.lang);

  return (
    <main className="text-mf-white space-y-10">
      <div className="relative">
        <Image
          src={BlurBackground}
          alt="Backcground Blur"
          className="absolute -z-50 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={SquareBackground}
          alt="Backcground Blur"
          className="hidden md:block  absolute -z-50 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-full "
        />
        <Image
          src={RadialOpacityBackground}
          alt="Backcground Blur"
          className="absolute -z-50 top-full left-1/2 -translate-x-1/2 translate-y-1/2 w-full opacity-75"
        />
        <div className=" overflow-x-hidden w-full  px-4 text-mf-white">
          <div className=" flex flex-col lg:flex-row gap-8">
            <div className="container max-w-3xl lg:pl-10 xl:pl-10 2xl:pl-36 3xl:max-w-4xl 3xl:pl-56  mt-8 flex flex-col gap-8">
              <Breadcrumbs
                items={[
                  { title: "Home", href: "/" },
                  { title: "Sobre", href: "/about" },
                ]}
              />

              <div className=" flex flex-col gap-8">
                <div className="text-5xl font-bold leading-snug">
                  <h1>
                    A Nossa{" "}
                    <span className=" bg-gradient-cyan-orange text-transparent bg-clip-text">
                      História
                    </span>{" "}
                    <br />
                  </h1>
                  <h1>Inicia quando...</h1>
                </div>

                <div className=" leading-relaxed  text-mf-white/90 space-y-8 ">
                  <p>
                    Quatro jovens: <em>Olímpio Adolfo</em>,
                    <em> Wek'elwa Mala</em>, <em>Raimundo Moide</em> e
                    <em> Onila Cossa</em>, em um contexto onde não havia muitas
                    iniciativas focadas em nichos específicos do desenvolvimento
                    de software no país. Na época, o desenvolvimento frontend
                    era visto como algo básico, enquanto a maioria das
                    comunidades tecnológicas se concentrava em linguagens mais
                    avançadas como Java e Android, promovendo tópicos complexos
                    que dificultavam a entrada de novos desenvolvedores.
                  </p>
                  <p>
                    Foi nesse cenário que surgiu o Maputo Frontenders, com o
                    propósito de criar uma plataforma acessível para iniciantes,
                    especialmente aqueles que começavam sua jornada com as
                    tecnologias web fundamentais, como HTML, CSS e JavaScript.
                    Além de popularizar as tecnologias web, a comunidade evoluiu
                    ao longo do tempo, passando a abranger mais do que apenas o
                    frontend, tornando-se um espaço para desenvolvedores de
                    software em geral, reunindo mais de mil membros de diversas
                    áreas, incluindo frontend, backend e outras especializações.
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative ml-auto mt-24">
              <div className="[mask-image:linear-gradient(to_right,transparent,white_0%,white_60%,transparent)]  flex gap-4 h-[500px]">
                <Image
                  src={Img4}
                  alt=""
                  className=" w-[380px] h-[500px] rounded-lg object-cover"
                />
                <div className="hidden xl:flex flex-col gap-4  ">
                  <Image
                    src={Img5}
                    alt=""
                    className=" w-[380px] h-[250px] rounded-lg object-cover"
                  />
                  <Image
                    src={Img6}
                    alt=""
                    className=" w-[380px] h-[250px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-12 flex flex-row justify-between w-full gap-8">
        {/* right  */}
        <section>
          <RoundedCard
            image={Img1}
            title={"Ancha Pedro"}
            description={"Co-fundador"}
            classNames="bg-gradient-cyan-purple"
          />
          <div className="mt-8 max-w-xl leading-relaxed  text-mf-white/90 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Missão</h3>
              <p className=" text-mf-white/90">
                Criar um ambiente inclusivo e estimulante onde a comunidade
                possa aprender, ensinar e colaborar uns com os outros.  Buscamos
                compartilhar conhecimento, inspirar a excelência e promover o
                crescimento pessoal e profissional de nossos membros por meio de
                eventos, workshops, desafios e outras iniciativas educacionais.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Visão</h3>
              <p className=" text-mf-white/90">
                Ser a principal comunidade de desenvolvedores frontend em
                Moçambique, reconhecida pelo seu compromisso em promover o
                aprendizado, a inovação e a colaboração entre profissionais de
                tecnologia web, impulsionando o avanço da indústria de
                tecnologia no país.
              </p>
            </div>{" "}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Valores</h3>
              <ul className="space-y-4 ml-2 text-mf-white/90">
                <li>
                  <span className="text-mf-secondary font-bold">
                    1. Colaboração:
                  </span>{" "}
                  Valorizamos a colaboração e a troca de conhecimento entre os
                  membros da comunidade, reconhecendo que juntos podemos
                  alcançar mais do que individualmente.
                </li>
                <li>
                  <span className="text-mf-lightBlue font-bold">
                    2. Inclusão:
                  </span>{" "}
                  Acreditamos em criar um ambiente inclusivo e acolhedor, onde
                  todas as pessoas sejam bem-vindas e respeitadas,
                  independentemente de sua origem, identidade ou experiência.
                </li>
                <li>
                  <span className="text-mf-orange font-bold">
                    3. Excelência:
                  </span>{" "}
                  Buscamos a excelência em tudo o que fazemos, incentivando o
                  aprendizado contínuo, a melhoria constante e a adoção das
                  melhores práticas de desenvolvimento frontend.
                </li>
                <li>
                  <span className="text-mf-pink font-bold">4. Inovação:</span>{" "}
                  Estamos comprometidos em promover a inovação e a criatividade,
                  incentivando a experimentação e a busca por soluções novas e
                  eficazes para os desafios tecnológicos.
                </li>
                <li>
                  <span className="text-mf-purple font-bold">
                    5. Integridade:
                  </span>{" "}
                  Agimos com integridade, transparência e ética em todas as
                  nossas interações e iniciativas, mantendo a confiança e o
                  respeito dentro da comunidade.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* left  */}
        <section className="sticky h-fit top-4 flex flex-col gap-4 ">
          {cardsMini.map((card) => (
            <RoundedCard
              image={card.icon}
              title={card.title}
              description={card.description}
              classNames={card.gradientColor + " rounded-[40px]"}
              classNameContainer={"px-8 py-4  rounded-[40px]  "}
              isIcon={true}
              key={card.title}
            />
          ))}
        </section>
      </div>
      <div className="w-full h-[500px] ">
        <Image src={Img7} alt="" className=" w-full h-full object-cover " />
      </div>
      <TeamMembers intl={intl} isSubtitle={true} isActiveAnimation={true} />
      <GoalSection intl={intl} />
      <CallTopicsSection intl={intl} />
    </main>
  );
}

function RoundedCard({
  image,
  title,
  description,
  classNames,
  classNameContainer,
  isIcon,
}: {
  isIcon?: boolean;
  image: any;
  title: string;
  description: string;
  classNames?: string;
  classNameContainer?: string;
}) {
  return (
    <div className={cn("rounded-full p-[2px] h-fit w-fit", classNames)}>
      <div
        className={cn(
          "flex items-center gap-2 w-fit h-fit rounded-full bg-mf-background px-2 pr-8 py-2",
          classNameContainer,
          isIcon && "items-start"
        )}
      >
        <Image
          src={image}
          alt=""
          className={cn(" rounded-full", isIcon ? "w-8 h-8" : "w-12 h-12")}
        />

        <div className={cn("flex flex-col ", isIcon && "gap-2")}>
          <h4 className="font-semibold">{title}</h4>
          <p className="  text-mf-white/75 max-w-48 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
