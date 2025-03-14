// TODO:
// - [ ] AutoPlay on small devices

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, ChevronRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { events } from "./data";
import { EventStatusEnum, EventTypesEnum } from "@/types";

export function EventCarousel() {
  return (
    <Carousel
      className="w-full md:container"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="mx-4 sm:mx-5 md:mx-10 gap-4 ">
        {events.map((event) => {
          const isPresencial = event.type === "in-person";
          return (
            <CarouselItem
              key={event.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3 h-full"
            >
              <div className="h-full flex">
                <Card className="bg-gradient-dark-blue p-4 relative border border-mf-white/10 text-mf-white rounded-lg overflow-hidden space-y-4 flex-1 flex flex-col">
                  <div className="relative flex flex-col gap-4 w-full">
                    <div className="relative h-80 w-full">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        className="rounded-lg object-cover"
                        fill
                      />
                    </div>
                    {event.status && event.status != "past" && (
                      <Badge
                        variant="outline"
                        className="absolute bg-mf-dark top-2 left-2 font-bold border-mf-orange text-mf-orange rounded-lg text-xs px-4 py-1"
                      >
                        {EventStatusEnum[event.status]}
                      </Badge>
                    )}
                  </div>

                  <Badge
                    variant="outline"
                    className={cn(
                      "w-fit font-bold rounded-lg text-xs p-[1px] bg-gradient-white-dark border-transparent ring-transparent border-0",
                      isPresencial
                        ? " text-mf-purple"
                        : " text-mf-secondProposal"
                    )}
                  >
                    <div
                      className="bg-mf-dark flex h-full w-full py-1
                      px-4 rounded-md"
                    >
                      {EventTypesEnum[event.type]}
                    </div>
                  </Badge>

                  <div className="flex flex-col gap-4 mt-auto">
                    <h4 className="text-base text-start font-semibold line-clamp-2">
                      {event.title}
                      <p className="invisible">.</p>
                    </h4>
                    <div className="flex gap-2 flex-col">
                      <span className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span className="text-sm tracking-wide ">
                          {event.date}
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm tracking-wide ">
                          {event.location}
                        </span>
                      </span>
                    </div>

                    <Button
                      variant="outline"
                      className={cn(
                        "flex items-center text-sm uppercase font-bold justify-center rounded-lg transition-colors duration-200",
                        isPresencial
                          ? "text-mf-purple hover:bg-mf-purple hover:text-mf-background border-mf-purple"
                          : "text-mf-secondProposal hover:bg-mf-secondProposal hover:text-mf-background"
                      )}
                    >
                      Ver Detalhes
                      <ChevronRight />
                    </Button>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <div className="hidden md:block">
        <CarouselPrevious className="disabled:cursor-not-allowed " />
        <CarouselNext />
      </div> */}
    </Carousel>
  );
}
