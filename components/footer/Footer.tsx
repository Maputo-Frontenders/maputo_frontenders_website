import React from 'react'
import { socialMediaLinks } from './Itens'
import { Button } from '../ui/button'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className='bg-mf-least flex flex-col-reverse gap-4 justify-between px-20 py-4 items-center md:flex-row'>
            <div className="text-white font-normal text-base">
                Feito com &hearts; pela MF
            </div>

            <div className="flex gap-2 md:gap-4">

                {socialMediaLinks.map((socialMedia) =>
                    <Link
                        key={socialMedia.description}
                        href={socialMedia.href}
                        className=' bg-mf-secondary rounded-full p-2  gap-3 hover:bg-mf-secondaryVariation'
                    >
                        <socialMedia.icon
                            className='py-1 px-0 text-white'
                        />
                    </Link>
                )}
            </div>


            <div className="text-white font-medium text-sm">
                &copy; 2024 Maputo Frontenders
            </div>
        </div>
    )
}
