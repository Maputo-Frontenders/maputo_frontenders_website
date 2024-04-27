"use client";

import { impactCards } from "@/data/mainData";
import CountUp from "react-countup";

export const ImpactCards = () => (
  <>
    {impactCards.map((card) => {
      return (
        <div
          className="bg-mf-least py-16 px-8 overflow-hidden col-span-1 rounded-lg border-2 border-mf-white/5 hover:border-mf-white/10 duration-150"
          key={card.title}
        >
          <div className={`flex flex-col gap-2 text-center`}>
            <span className="text-gradient text-5xl font-bold">
              +<CountUp start={0} end={card.number} redraw separator="." />
            </span>
            <span className="text-lg font-bold">{card.title}</span>
            <span className=" text-center">{card.description}</span>
          </div>
        </div>
      );
    })}
  </>
);
