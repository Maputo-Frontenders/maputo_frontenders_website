import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { cn } from "@/lib/utils";


const mont = Montserrat({ subsets: ["latin"] })

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
    <html lang="en">
      <body className={
        cn(` h-screen bg-mf-primary`, mont.className)
      }>
        <div className='flex flex-col h-full'>

          <Navbar />
          <main className='h-full'>
            {children}
          </main>
          <Footer />

        </div>

      </body>
    </html>
  );
}
