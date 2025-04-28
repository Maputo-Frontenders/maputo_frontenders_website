import Image from "next/image";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDictionary, Locale } from "@/lib/getDictionary";
import { getEventBySlug } from "@/sections/events/data";
import { getSanityImageUrl } from "@/utils";
import { urlFor } from "@/lib/sanity";
import { getFile } from "@sanity/asset-utils";
import { client } from "@/lib/sanity";
import { formatDateToMonthDayYear, formatDateToHour } from "@/utils/formats";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  DownloadIcon,
  EllipsisVertical,
  MapPinIcon,
  VideoIcon,
} from "lucide-react";
import { ColorizedTags } from "@/components/colorized-tags";
import { SpeakerCards } from "@/components/speaker-card";
import { ListEventsOther } from "@/sections/events/list-events";
import { CallTopicsSection } from "@/sections/call-topics";
import { notFound } from "next/navigation";
import { ROUTES } from "@/utils/routes";
import { generateCalendarUrl } from "@/utils/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  params: Promise<{ lang: Locale; slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const paramsData = await params;
  const event = await getEventBySlug({
    slug: paramsData.slug,
    lang: paramsData.lang,
  });

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [
        {
          url: getSanityImageUrl(event.image),
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
  };
}

export default async function EventPage({ params }: Props) {
  const paramsData = await params;
  const intl = await getDictionary(paramsData.lang);
  const event = await getEventBySlug({
    slug: paramsData.slug,
    lang: paramsData.lang,
  });

  if (!event) {
    notFound();
  }

  const slug = event.slug.current;

  const imageTransitionStyle = {
    viewTransitionName: `event-image-${slug}`,
    transformOrigin: "center",
  };

  const titleTransitionStyle = {
    viewTransitionName: `event-title-${slug}`,
    transformOrigin: "left center",
  };

  const dateTransitionStyle = {
    viewTransitionName: `event-date-${slug}`,
    transformOrigin: "left center",
  };

  const locationTransitionStyle = {
    viewTransitionName: `event-location-${slug}`,
    transformOrigin: "left center",
  };

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
              { title: intl.navigation.home, href: ROUTES.HOME },
              {
                title: intl.navigation.events,
                href: ROUTES.LIST_EVENTS,
              },
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
                <h2
                  className="text-4xl font-bold leading-normal max-w-3xl"
                  style={titleTransitionStyle}
                >
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

                  <a
                    href={generateCalendarUrl(event)}
                    target="_blank"
                    className="block hover:underline"
                    style={dateTransitionStyle}
                  >
                    <p className="text-sm">
                      {formatDateToMonthDayYear(event.date.start)} |{" "}
                      {formatDateToHour(event.date.start)}
                      {event.date.end &&
                        ` - ${formatDateToHour(event.date.end)}`}
                    </p>
                  </a>

                  <p
                    className="text-sm flex items-center gap-2"
                    style={locationTransitionStyle}
                  >
                    {event.type == "in-person" ? (
                      <MapPinIcon className="w-4 h-4" />
                    ) : (
                      <VideoIcon className="w-4 h-4" />
                    )}
                    {event.location}
                  </p>
                  <div className="flex items-center gap-2">
                    {new Date(event.date.start) > new Date() && (
                      <a
                        href={event.rsvpLink}
                        target="_blank"
                        className="block w-fit"
                      >
                        <Button withArrow className="uppercase">
                          {intl.events.participate}
                        </Button>
                      </a>
                    )}
                    {(event.agendaFile?.asset._ref || event.galleryLink) && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant={"outline"} className="w-fit">
                            <EllipsisVertical className=" text-mf-secondProposal" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-mf-darkBlue border-mf-white/10 text-mf-white w-52 p-2 ">
                          {event.agendaFile && (
                            <a
                              href={
                                getFile(
                                  event.agendaFile,
                                  client.config() as any
                                ).asset.url
                              }
                              type="file"
                              download={`${event.slug.current}-agenda.pdf`}
                              target="_blank"
                            >
                              <DropdownMenuItem className="flex items-center justify-between">
                                Agenda
                                <DownloadIcon className="w-4 h-4" />
                              </DropdownMenuItem>
                            </a>
                          )}
                          {event.galleryLink && (
                            <a href={event.galleryLink} target="_blank">
                              <DropdownMenuItem className="flex items-center justify-between">
                                Geleria do evento
                                <ArrowUpRight
                                  className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
                                  aria-hidden="true"
                                />
                              </DropdownMenuItem>
                            </a>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="mx-right mt-8"
                aria-roledescription="event page image"
              >
                <Image
                  src={urlFor(event.image.asset._ref)?.url()}
                  alt={event.title}
                  width={500}
                  height={500}
                  className=" rounded-[26px] object-cover border-4 border-mf-white/10"
                  style={imageTransitionStyle}
                />
              </div>
            </div>

            {event.speakers && (
              <div
                className="space-y-4"
                aria-roledescription="event page speakers"
              >
                <h3 className="text-sm uppercase text-mf-purple">
                  {intl.events.speakers}
                </h3>
                <SpeakerCards speakers={event.speakers} />
              </div>
            )}

            {event.partners && (
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
            )}

            <div
              className="space-y-4 "
              aria-roledescription="event page other events"
            >
              <h3 className="text-sm uppercase text-mf-orange">
                {intl.events.otherEvents}
              </h3>
              <ListEventsOther intl={intl} lang={paramsData.lang} />
            </div>
          </div>
        </div>
      </div>
      <CallTopicsSection intl={intl} />
    </main>
  );
}
