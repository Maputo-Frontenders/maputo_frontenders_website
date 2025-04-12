import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/sections/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/sections/footer";
import { Locale } from "@/lib/getDictionary";

export const revalidate = 60; // 1 min

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Maputo Frontenders - Comunidade Frontend de Moçambique",
    template: "%s | Maputo Frontenders",
  },
  description: "A maior comunidade frontend de Moçambique",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={cn(`bg-mf-background`, inter.className)}>
        <div className="flex flex-col h-full">
          <Navbar className="pt-8" params={{ lang: params.lang }} />
          {/* <FloatingNav /> */}
          <main className="h-full">{children}</main>
          <Footer params={{ lang: params.lang }} />
        </div>
      </body>
    </html>
  );
}
