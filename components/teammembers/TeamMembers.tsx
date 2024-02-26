import React from 'react'
import { team } from './Items'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import img from "../../public/assets/images/Ancha Pedro.png"
import { TeamMember } from '../cards/TeamMember'
export const TeamMembers = () => {
    return (
        <div className='text-center gap-4 flex flex-col'>
            <div className="flex flex-col ga-2">
                <h5 className=' font-normal text-sm text-white'>Nossa team</h5>
                <h2 className='text-white font-bold text-4xl'>Conheça a equipe por detrás  da Maputo Frontenders</h2>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                {/* <div className="w-full max-w-[500px] sm:max-w-[300px]">
                    <div className="relative group mb-5">
                        <div>
                            <Image src={img} alt={""} className="w-full" />
                        </div>
                        <div className="bg-gradient-to-b from-transparent via-transparent to-black py-5 absolute bottom-0 w-full opacity-500 transition-opacity duration-700">
                            <div className="flex gap-10 justify-center text-white">
                                prrrrr
                            </div>
                        </div>
                    </div>
                </div> */}

                {team.map((item) =>
                    <div key={item.name}>

                        <TeamMember {...item} />
                    </div>
                )}
            </div>
        </div>
    )
}
