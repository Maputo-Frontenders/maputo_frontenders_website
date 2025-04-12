import Image from "next/image";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDictionary, Locale } from "@/lib/getDictionary";
import { getEventBySlug } from "@/sections/events/data";
import { getSanityImageUrl } from "@/utils";
import { urlFor } from "@/lib/sanity";
import { formatDateToMonthDayYear, formatDateToHour } from "@/utils/formats";
import { Button } from "@/components/ui/button";
import { MapPinIcon, VideoIcon } from "lucide-react";
import { ColorizedTags } from "@/components/colorized-tags";
import { SpeakerCards } from "@/components/speaker-card";
import { ListEventsOther } from "@/sections/events/list-events";
import { CallTopicsSection } from "@/sections/call-topics";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: Props) {
  const event = await getEventBySlug({
    slug: params.slug,
    lang: params.lang,
  });

  return {
    title: event.title,
    description: event.description,
  };
}

type Props = {
  params: { lang: Locale; slug: string };
};

export default async function EventPage({ params }: Props) {
  const intl = await getDictionary(params.lang);
  const event = await getEventBySlug({
    slug: params.slug,
    lang: params.lang,
  });

  if (!event) {
    notFound();
  }

  return (
    <main
      className="text-mf-white space-y-20 "
      aria-labelledby="event-page-heading"
      role="region"
    >
      <div
        className="relative overflow-hidden"
        aria-roledescription="event page background"
      >
        <div className=" text-mf-white container  md:px-12">
          <Breadcrumbs
            items={[
              { title: intl.navigation.home, href: "/" },
              { title: intl.navigation.events, href: "/eventos" },
              { title: event.title, href: "" },
            ]}
            aria-roledescription="breadcrumbs"
          />
          <div
            className="space-y-10 "
            aria-roledescription="event page content"
          >
            <div className="space-y-10 flex flex-col-reverse md:flex-row  justify-between">
              <div className="mx-left mt-8 max-w-md lg:max-w-xl xl:max-w-3xl space-y-4">
                <h2 className="text-4xl font-bold leading-normal max-w-3xl">
                  {event.title}
                </h2>
                {event.tags && (
                  <div
                    className="flex gap-2"
                    aria-roledescription="event page tags"
                  >
                    <ColorizedTags tags={event.tags} />
                  </div>
                )}
                <div
                  className="flex flex-col gap-4"
                  aria-roledescription="event page description"
                >
                  <p>{event.description}</p>
                  <p className="text-sm">
                    {formatDateToMonthDayYear(event.date.start)} |{" "}
                    {formatDateToHour(event.date.start)}
                    {event.date.end && ` - ${formatDateToHour(event.date.end)}`}
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    {event.type == "in-person" ? (
                      <MapPinIcon className="w-4 h-4" />
                    ) : (
                      <VideoIcon className="w-4 h-4" />
                    )}
                    {event.location}
                  </p>
                  {new Date(event.date.start) > new Date() && (
                    <a href={event.rsvpLink} target="_blank" className="block">
                      <Button withArrow className="uppercase">
                        {intl.events.participate}
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              <div
                className="mx-right mt-8"
                aria-roledescription="event page image"
              >
                <Image
                  src={urlFor(event.image.asset._ref)?.url()}
                  alt={event.title}
                  width={376}
                  height={376}
                  className="w-full h-full object-cover border-4 border-mf-white/10 rounded-[26px]"
                  priority
                  loading="eager"
                />
              </div>
            </div>

            <div
              className="space-y-4"
              aria-roledescription="event page speakers"
            >
              <h3 className="text-sm uppercase text-mf-purple">
                {intl.events.speakers}
              </h3>
              <SpeakerCards speakers={event.speakers} />
            </div>

            <div
              className="space-y-4 "
              aria-roledescription="event page partners"
            >
              <h3 className="text-sm uppercase text-mf-cyan">
                {intl.events.partners}
              </h3>
              <div className="w-full flex flex-wrap justify-start items-center gap-x-10 gap-y-2">
                {event.partners?.map((image, index) => {
                  return (
                    <Image
                      key={image.name}
                      src={getSanityImageUrl(image.image)}
                      alt={image.name}
                      width={100}
                      height={50}
                    />
                  );
                })}
              </div>
            </div>

            <div
              className="space-y-4 "
              aria-roledescription="event page other events"
            >
              <h3 className="text-sm uppercase text-mf-orange">
                {intl.events.otherEvents}
              </h3>
              <ListEventsOther intl={intl} lang={params.lang} />
            </div>
          </div>
        </div>
      </div>
      <CallTopicsSection intl={intl} />
    </main>
  );
}
