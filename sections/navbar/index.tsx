"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavData, NavItem } from "./Itens";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/public/Logo.svg";

export function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={cn("container", className)}>
      <nav className="bg-mf-least rounded-lg backdrop-blur-md w-full mx-auto">
        <div className="w-full flex flex-wrap items-center justify-between  p-4">
          <div className="flex items-center space-x-5">
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center px-2 py-3  justify-center text-sm text-white rounded-lg md:hidden hover:bg-mf-secondProposalHover focus:outline-none focus:ring-2 focus:ring-mf-secondProposal dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              {!isMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    fill="#fff"
                    d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                  />
                </svg>
              )}
            </button>
            <Link href={"/"}>
              <Image
                className="max-[400px]:hidden"
                width={64}
                height={64}
                src={Logo}
                alt="Maputo Frontenders"
              />
            </Link>
          </div>
          <div className="flex md:order-2 space-x-2 md:space-x-0 ">
            <Link
              target="_blank"
              href={""}
              className="w-full truncate text-clip  flex items-center justify-center font-semibold uppercase text-center rounded-lg px-5 py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover text-sm text-mf-least group"
            >
              Junte-se a nós
              <ArrowUpRight className="max-[400px]:hidden ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </Link>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1  ${
              !isMenuOpen && "sm:flex"
            }`}
            id="navbar-cta"
          >
            <div
              className={`flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8  md:flex-row md:mt-0 md:border-0 md:flex lg:flex ${
                !isMenuOpen ? "hidden" : "flex"
              } dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
            >
              {NavData.map((item: NavItem) => (
                <Link
                  key={item.label}
                  href={item.link}
                  className="block py-2 px-3 md:p-0 text-white font-medium uppercase hover:text-mf-secondaryVariation"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
