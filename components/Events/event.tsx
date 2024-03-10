import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { events } from "./itens";
import CodeImage from "@/assets/event/code.png";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

export const Event = () => {
  return (
    <section className="w-full bg-mf-dark text-mf-white space-y-8 py-10 flex justify-center items-center flex-col">
      <h4 className="uppercase text-sm text-center">Eventos</h4>
      <h2 className="text-2xl font-bold text-center max-w-3xl">
        Junte-se a nós e participe dos eventos que estão moldando o futuro do
        desenvolvimento frontend em Moçambique
      </h2>
      <Button className="uppercase bg-mf-secondaryVariation hover:bg-mf-secondaryVariation text-mf-least">
        Ver todos <ArrowUpRight className="w-4 h-4 ml-2" />
      </Button>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full container"
      >
        <CarouselContent>
          {events.map((item) => (
            <CarouselItem
              key={item.urlImage}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div
                className="bg-mf-least rounded-md  overflow-hidden col-span-1 flex flex-col gap-4"
                key={item.urlImage}
              >
                <Image src={CodeImage} alt="" className="w-full" />

                <div className="px-4 pb-7 flex flex-col gap-2">
                  <span className=" w-min rounded-2xl bg-[#262B42] p-2 px-4 text-mf-secondary text-xs font-bold">
                    {item.eventType}
                  </span>
                  <p className="font-semibold">{item.description}</p>
                  <Link href={""}>
                    <Button
                      variant={"link"}
                      className="p-0 hover:underline text-mf-secondary font-bold"
                    >
                      Ver detalhes
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-transparent bg-mf-secondary hover:bg-mf-secondProposal text-mf-dark disabled:bg-transparent" />
        <CarouselNext className=" border-transparent bg-mf-secondary hover:bg-mf-secondProposal text-mf-dark disabled:bg-transparent" />
      </Carousel>
    </section>
  );
};
