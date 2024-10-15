import { Card, CardContent } from "@/components/ui/card";
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
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; 
import { events } from "./data"; 

export function EventCarousel() {
  return (
    <Carousel className="w-full lg:max-w-6xl md:max-w-3xl mt-14">
      <CarouselContent className="-ml-1 flex flex-col md:flex-row">
        {events.map((event) => {
          const isPresencial = event.type === "Presencial";

          return (
            <CarouselItem key={event.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="p-2 relative border border-gray-500 bg-card-foreground text-mf-white rounded-sm overflow-hidden md:w-[346px] h-[458px]">
                  <div className="relative h-3/5 w-full mb-6">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    {event.status && (
                      <Badge
                        variant="outline"
                        className="absolute top-2 left-2 font-bold border-mf-orange text-mf-orange rounded-[8px] text-xs px-4 py-1"
                      >
                        {event.status}
                      </Badge>
                    )}
                    <Badge
                      variant="outline"
                      className={cn(
                        "absolute -bottom-12 left-2 font-bold rounded-[8px] text-xs px-4 py-1",
                        isPresencial ? "border-mf-purple text-mf-purple" : "border-mf-secondProposal text-mf-secondProposal"
                      )}
                    >
                      {event.type}
                    </Badge>
                  </div>
                  <CardContent className="p-4 flex flex-col h-2/5 mt-12">
                    <h4 className="text-base text-start font-semibold">{event.title}</h4>
                    <Button
                      variant="outline"
                      className={cn(
                        "mt-4 flex items-center text-sm uppercase font-bold justify-center px-9 py-2 rounded-[8px] transition-colors duration-200",
                        isPresencial
                          ? "text-mf-purple hover:bg-mf-purple hover:text-mf-background border-mf-purple"
                          : "text-mf-secondProposal hover:bg-mf-secondProposal hover:text-mf-background"
                      )}
                    >
                      Ver Detalhes
                      <ChevronRight />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="md:block hidden">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
