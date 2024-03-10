import React from 'react'
import { socialMediaLinks } from './Itens'
import { Button } from '../ui/button'

export const Footer = () => {
    return (
        <div className='bg-mf-least flex justify-between px-20 py-4 items-center'>
            <div className="text-white font-normal text-base">
                Feito com &hearts; pela MF
            </div>

            <div className="flex gap-1">
                {socialMediaLinks.map((socialMedia) =>
                    <Button key={socialMedia.description} className=' bg-mf-secondary rounded-full p-2  gap-3 hover:bg-mf-secondaryVariation'>
                        <socialMedia.icon
                            className='py-1 px-0'
                        />
                    </Button>
                )}
            </div>


            <div className="text-white font-medium text-sm">
                &copy; 2024 Maputo Frontenders
            </div>
        </div>
    )
}
