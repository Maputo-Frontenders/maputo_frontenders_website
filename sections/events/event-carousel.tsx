// TODO:
// - [ ] AutoPlay on small devices

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EventProps } from "@/types";
import { CardEvent } from "./card-event";
import { DictionaryProps } from "@/lib/getDictionary";

interface EventCarouselProps {
  data: EventProps[];
  intl: DictionaryProps;
}

export function EventCarousel({ data, intl }: EventCarouselProps) {
  return (
    <Carousel
      className="w-full md:container"
      opts={{
        align: "start",
      }}
      aria-label={intl.events.title }
    >
      <CarouselContent className="mx-4 sm:mx-5 md:mx-10 gap-4">
        {data.map((event, index) => {
          return (
            <CarouselItem
              key={event.slug.current}
              className="pl-1 md:basis-1/2 lg:basis-1/3 h-full"
              aria-label={`${event.title} - ${index + 1} of ${data.length}`}
            >
              <CardEvent event={event} intl={intl} />
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
