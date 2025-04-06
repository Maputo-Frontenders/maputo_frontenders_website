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
import { EventProps, EventStatusEnum, EventTypesEnum } from "@/types";
import { urlFor } from "@/lib/sanity";
import { formatDateToDDMMYYYY } from "@/utils";

export function CardEvent({ event }: { event: EventProps }) {
  const isPresencial = event.type === "in-person";
  return (
    <div className="h-fit flex">
      <Card className="bg-gradient-dark-blue p-4 relative border border-mf-white/10 text-mf-white rounded-lg overflow-hidden space-y-4 flex-1 flex flex-col">
        <div className="relative flex flex-col gap-4 w-full">
          <div className="relative h-80 w-full">
            <Image
              src={urlFor(event.image.asset._ref)?.url()}
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
            isPresencial ? " text-mf-purple" : " text-mf-secondProposal"
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
                {formatDateToDDMMYYYY(event.date.start)}
              </span>
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm tracking-wide line-clamp-1">
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
  );
}
