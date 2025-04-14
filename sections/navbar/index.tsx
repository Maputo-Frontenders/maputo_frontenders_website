"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NavData, type NavItem } from "./data";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Locale } from "@/lib/getDictionary";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/utils/routes";

type Props = {
  params: { lang: Locale };
  className?: string;
};

export function Navbar({ className, params }: Props) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname.includes(path);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest("#navbar-container")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on window resize (to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <div
      className={cn(
        "container z-50 transition-all duration-300",
        "py-4",
        className
      )}
    >
      <div className=" md:px-4 mx-auto">
        <nav
          id="navbar-container"
          className={cn(
            "bg-mf-least rounded-xl backdrop-blur-md w-full mx-auto transition-all duration-300",
            scrolled ? "shadow-lg" : ""
          )}
        >
          <div className="w-full flex items-center justify-between p-4">
            {/* Logo and mobile menu button */}
            <div className="w-full md:w-auto flex items-center justify-between md:justify-normal space-x-3">
              <Link href={ROUTES.HOME} className="flex items-center">
                <Image
                  className="w-auto h-10 md:h-12"
                  width={56}
                  height={56}
                  src={Logo}
                  alt="Maputo Frontenders"
                  priority
                />
              </Link>

              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                aria-controls="navbar-menu"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="inline-flex items-center justify-center p-2 text-white rounded-lg md:hidden hover:bg-mf-secondProposalHover/20 focus:outline-none focus:ring-2 focus:ring-mf-secondProposal transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center ml-40  space-x-8">
              {NavData(params.lang).map((item: NavItem) => (
                <Link
                  key={item.label}
                  href={item.link}
                  className={cn(
                    "text-white font-medium uppercase text-sm hover:text-mf-secondProposal transition-colors relative group",
                    isActive(item.link)
                      ? "text-mf-secondProposal"
                      : "text-mf-white"
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mf-secondProposal transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={""}
              className="hidden md:flex items-center justify-center font-semibold uppercase text-center rounded-lg px-4 py-2.5 md:px-5 md:py-3 bg-mf-secondProposal hover:bg-mf-secondProposalHover text-sm text-mf-least group transition-all duration-300"
            >
              <span>Junte-se a nós</span>
              <ArrowUpRight className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col space-y-4 p-4 border-t border-white/10">
                  {NavData(params.lang).map((item: NavItem) => (
                    <Link
                      key={item.label}
                      href={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 px-3 text-white font-medium uppercase hover:text-mf-secondProposal transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
}
