import Link from 'next/link'
import React from 'react'
import { NavData, NavItem } from './Itens'
import { ArrowUpRight } from 'lucide-react'

export const Navbar = () => {
    return (
        <div className="container py-8 ">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-md  w-full mx-auto">
                <div className='flex flex-row justify-between items-center'>
                    <div className="text-white font-semibold text-lg">Logo</div>
                    <div className="space-x-10">
                        {NavData.map((item: NavItem, key: number) => (
                            <Link key={key} href={item.label} className="text-white uppercase hover:text-mf-secondaryVariation">{item.label}</Link>
                        ))}
                    </div>
                    <div className="text-white font-semibold text-lg uppercase text-center">
                        <Link href="#" className="flex flex-row items-center text-white rounded-lg p-2 bg-mf-secondary hover:bg-mf-secondaryVariation focus:ring-4  text-sm">
                            Join Community
                            <ArrowUpRight className='text-white' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
