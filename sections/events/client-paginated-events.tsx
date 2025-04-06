"use client";

import { CardEvent } from "./card-event";
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
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface ClientPaginatedEventsProps {
  events: EventProps[];
  initialPage: number;
  totalPages: number;
  itemsPerPage: number;
}

export function ClientPaginatedEvents({
  events,
  initialPage,
  totalPages,
  itemsPerPage,
}: ClientPaginatedEventsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Calculate pagination based on current page
  const { startIndex, endIndex } = calculatePagination(
    currentPage,
    events.length,
    itemsPerPage
  );

  const paginatedEvents = events.slice(startIndex, endIndex);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (currentPage === 1) {
      params.delete("page");
    } else {
      params.set("page", currentPage.toString());
    }

    const newUrl = `${window.location.pathname}${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    window.history.pushState({}, "", newUrl);
  }, [currentPage, searchParams]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const pageParam = new URLSearchParams(window.location.search).get("page");
      setCurrentPage(pageParam ? Number(pageParam) : 1);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Events events={paginatedEvents} />
      <ClientPaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

interface EventsProps {
  events: EventProps[];
}

function Events({ events }: EventsProps) {
  return (
    <div className="container mt-10 px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 min-h-[800px]">
      {events.length > 0 ? (
        events.map((event) => <CardEvent key={event.id} event={event} />)
      ) : (
        <div className="col-span-3 flex justify-center items-center h-64">
          <p className="text-xl text-mf-white/70">
            Não existem eventos disponíveis
          </p>
        </div>
      )}
    </div>
  );
}

interface ClientPaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  contentClassName?: string;
}

// Client pagination controls with click handlers instead of links
function ClientPaginationControls({
  currentPage,
  totalPages,
  onPageChange,
  className,
  contentClassName,
}: ClientPaginationControlsProps) {
  if (totalPages <= 1) return null;

  const paginationItems = generatePagination(currentPage, totalPages);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages]
  );

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
              className="hover:bg-mf-least/50 text-mf-white hover:text-mf-white cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
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
                onClick={() => handlePageChange(page as number)}
                isActive={currentPage === page}
                className={cn(
                  "cursor-pointer",
                  currentPage === page
                    ? "bg-mf-least text-mf-white border-transparent"
                    : "hover:bg-mf-least/50 text-mf-white hover:text-mf-white"
                )}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              className="hover:bg-mf-least/50 text-mf-white hover:text-mf-white cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
