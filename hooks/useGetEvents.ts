import { fetchData } from "@/data/fetchEventData";
import { FetchDataResponse } from "@/models/fetchDataResponse";
import { useEffect, useState } from "react";

const useGetEvents = () => {
    const [events, setEvents] = useState<FetchDataResponse>();
    const [next, setNext] = useState<string>();

    const fetchEventData = async (next?: string) => {
        const eventData = await fetchData(next);
        setNext(eventData.links.next);
        setEvents(eventData);
    };

    useEffect(() => {
        fetchEventData();
    }, []);

    return { events, fetchMore: () => fetchEventData(next) };
};

export default useGetEvents;