import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/sections/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/sections/footer";
import { Locale } from "@/lib/getDictionary";
import { metadata as siteMetadata, jsonLd } from "@/utils/configs";
import { Toaster } from "@/components/ui/sonner";
import { use } from "react";
// @ts-ignore - Using experimental React API
import { unstable_ViewTransition as ViewTransition } from "react";

export { siteMetadata as metadata };

export const revalidation = 3600; // 1 hour
// export const dynamic = "force-static";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: paramsPromise,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const params = use(paramsPromise);

  return (
    <html lang={params.lang}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#040D21" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={cn(`bg-mf-background`, inter.className)}>
        <ViewTransition>
          <div className="flex flex-col h-full">
            <Navbar className="pt-8" params={{ lang: params.lang }} />
            {/* <FloatingNav /> */}
            <main className="h-full">{children}</main>
            <Footer params={{ lang: params.lang }} />
          </div>
        </ViewTransition>
        <Toaster />
      </body>
    </html>
  );
}
