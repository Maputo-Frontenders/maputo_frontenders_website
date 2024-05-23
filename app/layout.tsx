import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { cn } from "@/lib/utils";
import { FloatingNav } from "@/components/navbar/floating-navbar";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maputo Frontenders - Comunidade Frontend de Moçambique",
  description: "A maior comunidade frontend de Moçambique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={cn(`bg-mf-background antialiased`, mont.className)}>
        <div className="flex flex-col h-full">
          <Navbar className="pt-8" />
          <FloatingNav />
          <main className="h-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
