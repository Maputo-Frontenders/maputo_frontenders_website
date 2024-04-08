import Badge from '@/utils/badge';
import React from 'react'

export default function LoadingDetails() {
    return (
        <div className="w-full max-w-[500px] sm:max-w-[300px]">
            <div className="flex w-full max-h-[380] flex-col-reverse md:flex-row gap-4 text-white px-10">
                <div className="flex flex-col gap-6 w-full px-4">
                    {/* Event Title */}
                    <h1 className="font-extrabold text-4xl text-wrap bg-gray-400" />

                    {/* Event Tags */}
                    <div className="flex gap-4 bg-gray-400">

                    </div>

                    {/* Event Description */}
                    <div className="">
                        <p className="font-normal text-lg">Short event description</p>
                    </div>

                    {/* Event Dates */}
                    <div className="font-semibold text-sm">

                        <div className="flex gap-4">
                            <span className="border-b-2 border-mf-secondProposal bg-gray-300" />
                            <span className="bg-gray-300" />
                        </div>
                    </div>

                    {/* Event Actions */}

                </div>

                <div className="w-full px-4 flex justify-start md:justify-end">
                    {/* Event Image */}

                    <div className='w-full h-[376px] bg-gray-300' />
                </div>
            </div>

            <div className="w-full px-10 flex flex-col gap-4 bg-gray-300">
                <div className="">

                </div>

                <div className="h-[376px] bg-gray-300" />
            </div>
        </div>
    );
}
