import Link from "next/link";
import React from "react";
import { NavData, NavItem } from "./Itens";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/public/Logo.svg";

// TODO: hover color on link button

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("container", className)}>
      <div className="bg-mf-least p-4 rounded-lg backdrop-blur-md  w-full mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-52 text-white font-semibold text-lg">
            <Image  width={48}height={48} src={Logo} alt="Maputo Frontenders"/>
          </div>
          <div className="space-x-10">
            {NavData.map((item: NavItem, key: number) => (
              <Link
                key={key}
                href={item.link} 
                className="text-white font-medium uppercase hover:text-mf-secondaryVariation"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="#"
            className="w-52 flex items-center justify-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover  text-sm text-mf-least group"
          >
             Junte-se a nós
            <ArrowUpRight className="ml-2 group-hover:" />
          </Link>
        </div>
      </div>
    </div>
  );
};
