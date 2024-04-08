import { Evento } from "./evento";

interface Links {
    next: string | null;
    previous: string | null;
}

interface Pagination {
    previous_page: number | null;
    current_page: number;
    next_page: number | null;
    page_size: number;
}

export interface FetchDataResponse {
    links: Links;
    pagination: Pagination;
    count: number;
    results: Evento[];
}
