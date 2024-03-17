import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Evento } from '@/models/evento'
import Link from 'next/link'
import handlerTipoDeEvento from '@/utils/badge'


export const EventCard: React.FC<Evento> = (props) => {


    return (
        <div className="w-full max-w-[500px] sm:max-w-[300px] ">
            <div className=" group mb-5 ">
                <Image src={props.cropped_picture_url} alt={props.title} className="w-full rounded-t-xl" width={500} height={200} />

                <div className="bg-mf-least flex flex-col gap-2 h-36 px-4 py-2 w-full opacity-500 transition-opacity duration-700 rounded-b-xl">
                    {handlerTipoDeEvento(props.event_type_title)}
                    <div className="flex flex-col overflow-y-auto h-2/4 items-start text-white px-1">
                        <div className="text-wrap">
                            <h3 className="font-semibold text-lg ">{props.title}</h3>
                        </div>
                    </div>
                    <Link href={`/eventos/${props.slug}`} className=' underline text-mf-secondProposal'>Ver detalhes</Link>
                </div>


            </div>
        </div>
    )
}

