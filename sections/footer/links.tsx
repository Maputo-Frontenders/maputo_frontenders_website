"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { navLinks } from "./data";
import { Locale } from "@/lib/getDictionary";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navigation({ params }: { params: { lang: Locale } }) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [copying, setCopying] = useState<boolean>(false);
  // const { toast } = useToast()

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopying(true);

      // toast({
      //   title: "Copied to clipboard",
      //   description: text,
      //   duration: 2000,
      // })

      setTimeout(() => setCopying(false), 2000);
    } catch (err) {
      // toast({
      //   title: "Failed to copy",
      //   description: "Please try again",
      //   variant: "destructive",
      // })
    }
  };

  return (
    <nav className="flex gap-6">
      {navLinks(params.lang).map((link) => {
        const LinkContent = (
          <motion.span className="flex items-center">
            {link.name}
            {link.isExternal && (
              <AnimatePresence>
                {hoveredLink === link.name && (
                  <motion.span
                    className="inline-flex items-center max-[400px]:hidden overflow-hidden"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="ml-2"
                    >
                      <ArrowUpRight className="transform transition-all duration-300 hover:-translate-y-1 hover:translate-x-1" />
                    </motion.span>
                  </motion.span>
                )}
              </AnimatePresence>
            )}
          </motion.span>
        );

        return (
          <div key={link.name}>
            {link.description ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className="hover:text-mf-secondary transition-colors text-lg group"
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {LinkContent}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="flex items-center gap-2 p-3 bg-mf-dark text-mf-white rounded-md border-none">
                    <span>{link.description}</span>
                    <button
                      className="h-6 w-6 bg-mf-dark text-mf-white rounded-md border-none"
                      onClick={() => copyToClipboard(link.description)}
                    >
                      {copying ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="sr-only">Copy</span>
                    </button>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Link
                href={link.href}
                className="hover:text-mf-secondary transition-colors text-lg group"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {LinkContent}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
