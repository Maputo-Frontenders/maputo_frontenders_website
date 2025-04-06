// TODO:
// - [ ] AutoPlay on small devices

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EventProps } from "@/types";
import { CardEvent } from "./card-event";

export function EventCarousel({ data }: { data: EventProps[] }) {
  return (
    <Carousel
      className="w-full md:container"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="mx-4 sm:mx-5 md:mx-10 gap-4 ">
        {data.map((event) => {
          return (
            <CarouselItem
              key={event.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3 h-full"
            >
              <CardEvent event={event} />
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
