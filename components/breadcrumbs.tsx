import type React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  separatorMargin?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

export function Breadcrumbs({
  items,
  separator = ">",
  separatorMargin = "sm",
  className,
}: BreadcrumbsProps) {
  const marginMap = {
    xs: "mx-1",
    sm: "mx-2",
    md: "mx-3",
    lg: "mx-4",
  };

  const marginClass = marginMap[separatorMargin];

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex flex-wrap items-center text-xs">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className={cn("text-mf-white", marginClass)}>
                  {separator}
                </span>
              )}

              {isLast ? (
                <span className=" text-mf-white" aria-current="page">
                  {item.title}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className=" text-mf-white/80 hover:text-mf-white transition-colors"
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
