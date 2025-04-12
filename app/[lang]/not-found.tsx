"use client";

import { Button } from "@/components/ui/button";
import { Locale } from "@/lib/getDictionary";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import React from "react";

const intl = {
  en: {
    notFound: {
      title: "Page not found",
      description: "Sorry, we couldn't find the page you were looking for.",
      backToHome: "Back to Home",
      support: "Support",
    },
  },
  pt: {
    notFound: {
      title: "Página não encontrada",
      description:
        "Desculpe, não encontramos a página que você está procurando.",
      backToHome: "Voltar para a página inicial",
      support: "Suporte",
    },
  },
};

export default function NotFound() {
  const localeUrl = window.location.pathname.split("/")[1] as unknown as Locale;

  return (
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8 mb-20">
      <div className="text-center">
        <p className="text-base font-semibold text-mf-white">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-mf-secondProposal sm:text-7xl">
          {intl[localeUrl].notFound.title}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-mf-white ">
          {intl[localeUrl].notFound.description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <Button>{intl[localeUrl].notFound.backToHome}</Button>
          </Link>

          <Link href={ROUTES.CONTACT}>
            <Button
              variant="link"
              className="text-sm flex items-center gap-x-2 hover:no-underline"
            >
              {intl[localeUrl].notFound.support}{" "}
              <span aria-hidden="true">&rarr;</span>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
