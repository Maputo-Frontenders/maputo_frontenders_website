import React from 'react'

export default function LoadingCards() {
    return (
        <div className="w-full max-w-[500px] sm:max-w-[300px] ">
            <div className=" group mb-5 ">
                <div className="w-full bg-gray-300 rounded-t-xl" style={{ height: '200px', width: '300px' }} />

                <div className="bg-mf-least flex flex-col gap-2 h-[200px] px-4 py-2 w-full opacity-500 transition-opacity duration-700 rounded-b-xl">
                    <div className="w-24 h-4 bg-gray-300 rounded-full" />
                    <div className="flex flex-col overflow-y-auto h-2/4 items-start text-white px-1">
                        <div className="text-wrap">
                            <h3 className="font-semibold text-lg ">A carregar...</h3>
                        </div>
                    </div>
                    <div className="w-20 h-4 bg-gray-300 rounded-full" />
                </div>
            </div>
        </div>
    );
}
