'use client'
import { DetalhesEvento } from "@/models/detalhesEvento";
import { FC, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import handlerTipoDeEvento from "@/utils/badge";
import { sanitizer } from "@/utils/sanitizer";
import { formatTime, isSameDate } from "@/utils/handlers";
import React from "react";
import Loading from "./loading";
import EventNotFound from "./error";
import LoadingDetails from "./loading";
interface pageProps {
    params: { slug: string },
}

const fetchData = async (SLUG: string) => {
    const url = `https://community.codecademy.com/api/event_slim/${SLUG}`
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};



const DetalhesEvento: FC<pageProps> = ({ params }) => {
    const [detalhesEvento, setDetalhesEvento] = useState<DetalhesEvento>()

    const fetchEventDetails = async (slug: string) => {
        console.log(await fetchData(slug))
        const eventDetails = await fetchData(slug);
        setDetalhesEvento(eventDetails)
    };
    useEffect(() => {
        fetchEventDetails(params?.slug)
    }, [params?.slug])
    return (
        <main className="h-full flex flex-col gap-12 justify-center py-5 items-center">
            {detalhesEvento === undefined ? <h2 className="text-white text-2xl">Loading...</h2> : detalhesEvento !== null ? <React.Fragment>
                <div className="flex  w-full max-h-[380] flex-col-reverse md:flex-row gap-4 text-white px-10">
                    <div className="flex flex-col gap-6 w-full px-4">
                        <h1 className=" font-extrabold text-4xl text-wrap">{detalhesEvento?.title}</h1>
                        <div className="flex gap-4">
                            {detalhesEvento?.tags.map((tag) => <Badge key={tag} className="p-2 text-mf-secondProposal">{tag}</Badge>)}
                        </div>

                        <div className="">
                            <p className=" font-normal text-lg"> {detalhesEvento?.description_short}</p>
                        </div>

                        <div className="font-semibold text-sm">
                            {/* Displaying event dates */}
                            {detalhesEvento && (
                                <p>
                                    {isSameDate(detalhesEvento.start_date_iso, detalhesEvento.end_date_iso) ? (
                                        // If start and end dates are the same
                                        `${new Date(detalhesEvento.start_date_iso).toLocaleString('pt-PT', { month: 'long' }).toUpperCase()} ${new Date(
                                            detalhesEvento.start_date_iso
                                        ).getDate()}, ${new Date(detalhesEvento.start_date_iso).getFullYear()} | ${formatTime(
                                            detalhesEvento.start_date_iso
                                        )} - ${formatTime(detalhesEvento.end_date_iso)}`
                                    ) : (
                                        // If start and end dates are different
                                        `${new Date(detalhesEvento.start_date_iso).toLocaleString('en-US', { month: 'long' })} ${new Date(
                                            detalhesEvento.start_date_iso
                                        ).getDate()}, ${new Date(detalhesEvento.start_date_iso).getFullYear()} | ${new Date(
                                            detalhesEvento.end_date_iso
                                        ).toLocaleString('en-US', { month: 'long' })} ${new Date(detalhesEvento.end_date_iso).getDate()} ${new Date(
                                            detalhesEvento.end_date_iso
                                        ).getFullYear()}`
                                    )}
                                </p>
                            )}
                            {detalhesEvento?.audience_type === "IN_PERSON" && <p>{detalhesEvento?.venue_address}, {detalhesEvento?.venue_city}</p>}

                            <div className="flex gap-4">
                                <span className="border-b-2 border-mf-secondProposal">{detalhesEvento?.total_attendees} Participantes</span> <span className="">{handlerTipoDeEvento(detalhesEvento?.audience_type || "")}</span>

                            </div>
                        </div>

                        <div className="flex gap-4 items-baseline flex-col-reverse md:flex-row">
                            <Link
                                href="#"
                                className=" flex items-center font-semibold uppercase text-center rounded-lg p-2 bg-mf-secondProposal hover:bg-mf-secondaryVariation  text-sm text-mf-least group"
                            >
                                Ver fotos
                                <ArrowUpRight className="ml-2 group-hover:" />
                            </Link>

                            <Link
                                href="#"
                                className="flex items-center font-semibold uppercase text-center rounded-lg p-2 border-mf-secondProposal border-2 bg-transparent  text-sm text-mf-secondProposal group"
                            >
                                Ver Apresentação
                                <ArrowUpRight className="ml-2 group-hover:" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full px-4 flex justify-start md:justify-end">
                        <Image src={detalhesEvento?.picture || ""} alt={detalhesEvento?.title || ""} className="w-[376px] rounded-t-xl h-[376px]" width={376} height={376} />
                    </div>
                </div>

                <div className="w-full px-10 flex flex-col gap-4">
                    <div className="">
                        <h3 className=" text-base font-semibold text-mf-secondaryVariation">Descrição</h3>
                        <h2 className=" text-2xl font-extrabold text-white">Sobre o evento</h2>
                    </div>


                    <div className=" text-white" dangerouslySetInnerHTML={{ __html: sanitizer(detalhesEvento?.description || "") }} />

                </div>
            </React.Fragment> : <EventNotFound />}

        </main>
    );
}
export default DetalhesEvento
