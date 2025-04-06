import { CardEvent } from "./card-event";
import { getEvents } from "./data";
import { DictionaryProps, Locale } from "@/lib/getDictionary";
import { calculatePagination, generatePagination } from "@/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { EventProps } from "@/types";
import { cn } from "@/lib/utils";

interface ListEventsProps {
  params: {
    lang: Locale;
    intl: DictionaryProps;
  };
  searchParams?: { page?: string };
}

export async function ListEvents({ params, searchParams }: ListEventsProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const itemsPerPage = 6;

  const events = await getEvents(params.lang);
  const { totalPages, startIndex, endIndex } = calculatePagination(
    currentPage,
    events.length,
    itemsPerPage
  );

  const paginatedEvents = events.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col items-center">
      <Events events={paginatedEvents} intl={params.intl} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        intl={params.intl}
      />
    </div>
  );
}

interface EventsProps {
  events: EventProps[];
  intl: DictionaryProps;
}

function Events({ events, intl }: EventsProps) {
  return (
    <div className="container mt-10 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 ">
      {events.length > 0 ? (
        events.map((event) => (
          <CardEvent key={event.id} event={event} intl={intl} />
        ))
      ) : (
        <div className="col-span-3 flex justify-center items-center h-64">
          <p className="text-xl text-mf-white/70">
            {intl.events.noEventsAvailable}
          </p>
        </div>
      )}
    </div>
  );
}

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
  className?: string;
  contentClassName?: string;
  intl: DictionaryProps;
}

function PaginationControls({
  currentPage,
  totalPages,
  baseUrl = "?page=",
  className,
  contentClassName,
  intl,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  const paginationItems = generatePagination(currentPage, totalPages);

  return (
    <Pagination className={cn("mt-8 mb-12", className)}>
      <PaginationContent
        className={cn(
          "bg-mf-dark/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-mf-white/10",
          contentClassName
        )}
      >
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              intl={intl}
              className="hover:bg-mf-least/50 text-mf-white hover:text-mf-white"
              href={`${baseUrl}${currentPage - 1}`}
            />
          </PaginationItem>
        )}

        {paginationItems.map((page, i) => {
          if (page === "ellipsis") {
            return (
              <PaginationItem key={`ellipsis-${i}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`${baseUrl}${page}`}
                isActive={currentPage === page}
                className={
                  currentPage === page
                    ? "bg-mf-least text-mf-white border-transparent"
                    : "hover:bg-mf-least/50 text-mf-white hover:text-mf-white"
                }
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              intl={intl}
              className="hover:bg-mf-least/50 text-mf-white hover:text-mf-white"
              href={`${baseUrl}${currentPage + 1}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
