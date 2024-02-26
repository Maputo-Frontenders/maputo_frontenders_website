import Link from "next/link";
import React from "react";
import { NavData, NavItem } from "./Itens";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// TODO: hover color on link button

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("container", className)}>
      <div className="bg-mf-least p-4 rounded-lg backdrop-blur-md  w-full mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-52 text-white font-semibold text-lg">Logo</div>
          <div className="space-x-10">
            {NavData.map((item: NavItem, key: number) => (
              <Link
                key={key}
                href={item.label}
                className="text-white font-medium uppercase hover:text-mf-secondaryVariation"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="#"
            className="w-52 flex items-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondaryVariation  text-sm text-mf-least group"
          >
            Join Community
            <ArrowUpRight className="ml-2 group-hover:" />
          </Link>
        </div>
      </div>
    </div>
  );
};
