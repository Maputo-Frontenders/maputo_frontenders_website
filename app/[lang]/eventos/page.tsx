import Image from "next/image";

import { CallTopicsSection } from "@/sections/call-topics";

import BlurBackground from "@/assets/svg/violet-light-background.svg";
import SquareBackground from "@/assets/svg/square-background.svg";
import RadialOpacityBackground from "@/assets/svg/radial-opacity-background.svg";

import { getDictionary, Locale } from "@/lib/getDictionary";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ListEvents } from "@/sections/events/list-events";
import { ParserToHtml } from "@/utils";
import { ROUTES } from "@/utils/routes";

type Props = {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const paramsData = await params;
  const intl = await getDictionary(paramsData.lang);

  return {
    title: intl.events.pageTitle,
    description: intl.events.pageDescription,
  };
}

export default async function EventsPage({ params, searchParams }: Props) {
  const paramsData = await params;
  const searchParamsData = await searchParams;
  const intl = await getDictionary(paramsData.lang);

  return (
    <main
      className="text-mf-white space-y-10 "
      aria-labelledby="events-page-heading"
      role="region"
    >
      <div
        className="relative overflow-hidden"
        aria-roledescription="events page background"
      >
        {/* <Image
          src={BlurBackground}
          alt="Backcground Blur"
          className="absolute -z-10 top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        /> */}
        <Image
          src={SquareBackground}
          alt="Backcground Blur"
          className="hidden md:block  absolute -z-50 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-full "
          aria-roledescription="events page background decorative element"
        />
        <Image
          src={RadialOpacityBackground}
          alt="Backcground Blur"
          className="absolute -z-50 top-2/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-full opacity-75"
          aria-roledescription="events page background decorative element"
        />

        <div className="  text-mf-white container  md:px-12">
          <Breadcrumbs
            items={[
              { title: intl.navigation.home, href: ROUTES.HOME },
              {
                title: intl.navigation.events,
                href: ROUTES.LIST_EVENTS,
              },
            ]}
            aria-roledescription="breadcrumbs"
          />
          <div
            className="space-y-8 "
            aria-roledescription="events page title and subtitle"
          >
            <div className="mx-auto mt-8">
              <h2 className="text-4xl font-bold leading-normal max-w-3xl">
                {ParserToHtml(intl.events.page.title, [
                  "class",
                  "bg-gradient-cyan-purple bg-clip-text text-transparent",
                ])}
              </h2>
              <p className="max-w-2xl ">{intl.events.page.subtitle}</p>
            </div>
          </div>
        </div>

        <ListEvents
          params={{ lang: paramsData.lang, intl }}
          searchParams={searchParamsData}
        />
      </div>

      <CallTopicsSection intl={intl} />
    </main>
  );
}
