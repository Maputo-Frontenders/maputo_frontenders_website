import type { Metadata } from "next";

export const siteConfig = {
  name: "Maputo Frontenders",
  description:
    "A maior comunidade de frontend em Moçambique. Oferecemos eventos, networking, mentoria e oportunidades para desenvolvedores frontend.",
  url: "https://maputofrontenders.dev",
  //   ogImage: "/cover.png",
  links: {
    twitter: "https://x.com/mptfrontenders",
    linkedin: "https://www.linkedin.com/company/maputo-frontenders",
    instagram: "https://www.instagram.com/mptfrontenders",
    youtube: "https://www.youtube.com/@mptfrontenders",
  },
};

export const metadata: Metadata = {
  title: {
    default: "Maputo Frontenders - Comunidade Frontend de Moçambique",
    template: "%s | Maputo Frontenders",
  },
  description:
    "A maior comunidade de frontend em Moçambique. Oferecemos eventos, networking, mentoria e oportunidades para desenvolvedores frontend.",
  keywords: [
    "frontend",
    "desenvolvimento web",
    "comunidade tech",
    "Moçambique",
    "Maputo",
    "programação",
    "eventos tech",
    "frontend moçambique",
    "frontend mozambique",
    "community frontend mozambique",
  ],
  authors: [{ name: "Maputo Frontenders Team" }],
  category: "Technology",
  applicationName: "Maputo Frontenders",
  generator: "Next.js",

  metadataBase: new URL("https://maputofrontenders.dev"),
  alternates: {
    canonical: "/",
    languages: {
      pt: "/pt",
      en: "/en",
    },
  },

  openGraph: {
    type: "website",
    url: "https://maputofrontenders.dev",
    title: "Maputo Frontenders - Comunidade Frontend de Moçambique",
    description:
      "A maior comunidade de frontend em Moçambique. Oferecemos eventos, networking, mentoria e oportunidades para desenvolvedores frontend.",
    siteName: "Maputo Frontenders",
    // images: [
    //   {
    //     url: "/cover.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Maputo Frontenders Cover Image",
    //   },
    // ],
    locale: "pt_MZ",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maputo Frontenders - Comunidade Frontend de Moçambique",
    description:
      "A maior comunidade de frontend em Moçambique. Oferecemos eventos, networking, mentoria e oportunidades para desenvolvedores frontend.",
    // images: ["/cover.png"],
    creator: "@mptfrontenders",
    site: "@mptfrontenders",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },

  creator: "Maputo Frontenders Team",
  publisher: "Maputo Frontenders",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Community",
  name: "Maputo Frontenders",
  url: "https://maputofrontenders.dev",
  logo: "https://maputofrontenders.dev/Logo.png",
  description:
    "A maior comunidade de frontend em Moçambique. Oferecemos eventos, networking, mentoria e oportunidades para desenvolvedores frontend.",
  sameAs: [
    "https://x.com/mptfrontenders",
    "https://www.linkedin.com/company/maputo-frontenders",
    "https://www.instagram.com/mptfrontenders",
    "https://www.youtube.com/@mptfrontenders",
  ],
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MZ",
    addressLocality: "Maputo",
  },
};
