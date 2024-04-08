import React from 'react'

export default function Loading() {
    return (
        <div className="w-full max-w-[500px] sm:max-w-[300px]">
            <div className="group mb-5">
                <div className="w-full bg-gray-300 rounded-t-xl" style={{ height: '500px' }} />
                <div className="bg-mf-least flex flex-col gap-2 h-36 px-4 py-2 w-full opacity-500 transition-opacity duration-700 rounded-b-xl">
                    <div className="w-24 h-4 bg-gray-300 rounded-full" />
                    <div className="h-16">
                        <div className="h-4 bg-gray-300 rounded-full mb-1" />
                        <div className="h-4 bg-gray-300 rounded-full mb-1" />
                        <div className="h-4 bg-gray-300 rounded-full" />
                    </div>
                    <div className="w-20 h-4 bg-gray-300 rounded-full" />
                </div>
            </div>
        </div>
    );
}
