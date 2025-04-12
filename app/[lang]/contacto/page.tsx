import Image from "next/image";

import { CallTopicsSection } from "@/sections/call-topics";

import BlurBackground from "@/assets/svg/violet-light-background.svg";
import SquareBackground from "@/assets/svg/square-background.svg";
import RadialOpacityBackground from "@/assets/svg/radial-opacity-background.svg";

import { getDictionary, Locale } from "@/lib/getDictionary";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/sections/contacto/form";
import { FaqSection } from "@/sections/contacto/faq";

export async function generateMetadata({ params }: Props) {
  const intl = await getDictionary(params.lang);

  return {
    title: intl.contact.pageTitle,
    description: intl.contact.pageDescription,
  };
}

type Props = {
  params: { lang: Locale };
};

export default async function ContactPage({ params }: Props) {
  const intl = await getDictionary(params.lang);

  return (
    <main
      className="text-mf-white space-y-10 "
      aria-labelledby="contact-page-heading"
      role="region"
    >
      {/* Hero section with background images */}
      <div
        className="relative overflow-hidden"
        aria-roledescription="contact page background"
      >
        {/* Background decorative elements */}
        <Image
          src={BlurBackground}
          alt="Backcground Blur"
          className="absolute -z-50 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-roledescription="contact page background decorative element"
        />
        <Image
          src={SquareBackground}
          alt="Backcground Blur"
          className="hidden md:block  absolute -z-50 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-full "
          aria-roledescription="contact page background decorative element"
        />
        <Image
          src={RadialOpacityBackground}
          alt="Backcground Blur"
          className="absolute -z-50 top-full left-1/2 -translate-x-1/2 translate-y-1/2 w-full opacity-75"
          aria-roledescription="contact page background decorative element"
        />

        <div
          className="  text-mf-white container md:px-12"
          aria-roledescription="contact page breadcrumbs"
        >
          <Breadcrumbs
            items={[
              { title: intl.navigation.home, href: "/" },
              { title: intl.navigation.contact, href: "/contacto" },
            ]}
            aria-roledescription="breadcrumbs"
          />
          <div
            className="space-y-8 "
            aria-roledescription="contact page content"
          >
            <div className="mx-auto text-center mt-8">
              <h2 className="text-4xl font-bold leading-normal">
                {intl.contact.hero.title}{" "}
                <span className="bg-gradient-cyan-orange bg-clip-text text-transparent">
                  {intl.contact.hero.titleHighlight}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto">
                {intl.contact.hero.description}
              </p>
            </div>
            <ContactForm intl={intl} />
            <FaqSection intl={intl} lang={params.lang} />
          </div>
        </div>
      </div>

      <CallTopicsSection intl={intl} />
    </main>
  );
}
