"use client";

import { i18n } from "@/i18n.config";
import { cn } from "@/lib/utils";
import { getTranslationsLocal } from "@/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import { Globe } from "lucide-react";

type Translation = {
  path: string;
  language: string;
};

export function LocaleSwitcher() {
  const translations = getTranslationsLocal();
  const params = useParams();

  const availableTranslations = useMemo<Translation[]>(
    () =>
      i18n.languages.reduce<Translation[]>((acc, cur) => {
        const availableTranslation = translations?.find(
          (translation) => translation.language === cur.id
        );
        return availableTranslation ? [...acc, availableTranslation] : acc;
      }, []),
    [translations]
  );

  const setLocaleCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/;`;
  };

  return (
    <div
      className="shadow-card flex p-px items-center justify-center rounded-lg"
      role="region"
      aria-label="Language Switcher"
    >
      {availableTranslations.map((version) => (
        <Link
          key={version.language}
          href={version.path}
          locale={version.language}
          className={cn(
            `flex h-8 w-8 items-center justify-center rounded-md uppercase`,
            params?.lang == version.language
              ? " text-foreground hidden"
              : "text-foreground "
          )}
          onClick={() => setLocaleCookie(version.language)}
          aria-label={`Switch to ${
            i18n.languages.find((lang) => lang.id === version.language)
              ?.title || version.language
          } language`}
        >
          <button
            className="p-3 flex items-center gap-2 bg-transparent text-mf-white rounded-sm"
            aria-hidden="true"
            tabIndex={-1}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span>{version.language.toUpperCase()}</span>
          </button>
        </Link>
      ))}
    </div>
  );
}
