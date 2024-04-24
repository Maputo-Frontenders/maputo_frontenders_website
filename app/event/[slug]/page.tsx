import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowExternalLink } from "@/components/ui/icons/arrow-external-link";
import BanerImage from "@/public/design_liquido.png";
import Image from "next/image";
import BlurBackground from "@/public/blur-background.svg";
import { Sponsor } from "@/components/Information/Sponsor";

export default function EventDetails() {
  return (
    <main className="container text-white">
      {/* COVER  */}
      <div className="w-full grid grid-cols-1  md:grid-cols-2 gap-2 justify-between">
        <div className=" col-span-1 order-1 md:order-none flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-extrabold">
              Linguagens de Programação em Português - Design Líquido
            </h2>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-mf-purple">linguagens</Badge>
              <Badge className="bg-mf-orange">programação</Badge>
              <Badge className="bg-mf-pink">meetup</Badge>
            </div>
          </div>

          <p>
            Uma secção complementar ao hacktoberfest, para uma interação,
            apresentação e explicação acerca da design Líquido.
          </p>

          <div className="text-sm font-semibold flex flex-col gap-2">
            <div>
              <p>Nov 22, 2023 | 11:00 AM – 12:00 PM</p>
              <p>Rua dos Desportistas, Incubadora do Standard Bank, Maputo</p>
            </div>
            <p className="border-b w-max border-mf-secondProposal">
              27 Participantes
            </p>
          </div>

          <div className="my-auto flex flex-wrap gap-4">
            <Button variant={"default"}>
              VER FOTOS
              <ArrowExternalLink />
            </Button>
            <Button variant={"outline"}>
              VER APRESENTAÇÃO <ArrowExternalLink />
            </Button>
          </div>
        </div>

        <div className="col-span-1 -order-1  md:order-none md:place-self-end relative max-w-96 max-h-96 ">
          <Image
            src={BlurBackground}
            alt=""
            className="absolute z-50 top-1/2 -right-3/4 -translate-x-1/2 -translate-y-1/2"
          />
          <Image src={BanerImage} alt="" className="ml-auto rounded-lg" />
        </div>
      </div>

      {/* DESCRIPTION  */}
      <div className="flex flex-col gap-2">
        <h4 className="text-mf-purple font-semibold">Descrição</h4>
        <h2 className="text-2xl font-extrabold">Sobre o evento</h2>
        <div className="flex flex-col gap-2">
          <p>
            Em comemoração do hacktoberfest no mês de outubro, trazemos uma
            secção extra sobre design Líquido. A Design Líquido é uma empresa
            com uma missão clara e objetiva: ajudar na evolução tecnológica da
            sociedade lusófona, oferecer oportunidades de auto-educação para
            crianças, adolescentes e pessoas em situação de vulnerabilidade, bem
            como possibilitar oportunidades de empreendedorismo para pessoas que
            não falam inglês.
          </p>
          <p>
            Para alcançar esses objetivos, a Design Líquido tem se empenhado em
            desenvolver projetos e tecnologias que promovam o acesso à
            informação e à educação para todos. Um dos seus principais projetos
            é a Delégua, uma linguagem de programação 100% em português,
            independente de sistema operacional e dispositivo, que tem como
            objetivo tornar a programação mais acessível para falantes da língua
            portuguesa.
          </p>
        </div>
      </div>

      {/* PARCERIAS E PATROCINIOS  */}
      <div className="mt-10">
        <Sponsor />
      </div>
    </main>
  );
}
