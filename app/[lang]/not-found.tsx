import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-fit">
        <div className="text-center py-8 ">
          <p className="text-4xl my-5 font-bold text-mf-secondary uppercase">
            Página não encontrada!
          </p>
          <Link
            href="/"
            className="font-semibold text-mf-secondary hover:text-mf-secondaryVariation uppercase py-10 my-5"
          >
            Voltar a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
