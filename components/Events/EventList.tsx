import { Evento } from '@/models/evento'
import React from 'react'
import { EventCard } from '../cards/EventCard'
import LoadingCards from '../cards/LoadingCards'

export const EventList = (eventos: any) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {eventos.eventos === undefined ? Array(4).fill(<LoadingCards />) :
                eventos.eventos?.map((evento: Evento) =>
                    <div key={evento.title}>

                        <EventCard {...evento} />
                    </div>)}
            { }
        </div>
    )
}
