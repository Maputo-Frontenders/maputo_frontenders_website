"use client";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import CodeImage from "@/assets/event/code.png";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import useGetEvents from "@/hooks/useGetEvents";
import { Badge } from "../ui/badge";

export const Event = () => {
  const { events, fetchMore } = useGetEvents();
  return (
    <section
      className="w-full bg-mf-dark text-mf-white space-y-8 py-10 flex justify-center items-center flex-col container"
      id="eventos"
    >
      <h4 className="uppercase text-sm text-center">Eventos</h4>
      <h2 className="text-2xl font-bold text-center max-w-3xl">
        Junte-se a nós e participe dos eventos que estão moldando o futuro do
        desenvolvimento frontend em Moçambique
      </h2>
      <Link
        href="/eventos"
        className=" flex items-center font-semibold uppercase text-center rounded-lg p-2 bg-mf-secondProposal hover:bg-mf-secondaryVariation  text-sm text-mf-least group"
      >
        Ver todos
        <ArrowUpRight className="ml-2 group-hover:" />
      </Link>
      {/* <Button className="uppercase bg-mf-secondaryVariation hover:bg-mf-secondaryVariation text-mf-least">
        Ver todos <ArrowUpRight className="w-4 h-4 ml-2" />
      </Button> */}

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full container"
      >
        <CarouselContent>
          {events?.results.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div
                className="bg-mf-least h-full rounded-md  overflow-hidden col-span-1 flex flex-col gap-4"
                key={item.id}
              >
                <Image
                  src={item.cropped_picture_url}
                  alt=""
                  width={450}
                  height={50}
                />

                <div className="px-4 pb-7 flex flex-col justify-between h-full gap-2">
                  <Badge className="w-fit text-mf-secondary">
                    {item.event_type_title}
                  </Badge>
                  <p className="font-semibold line-clamp-4">
                    {item.description_short}
                  </p>
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
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};
