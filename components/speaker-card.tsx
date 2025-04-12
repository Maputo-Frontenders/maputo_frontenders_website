import Image from "next/image";
import type { SpeakerProps } from "@/types";
import { cn } from "@/lib/utils";
import { processSocialMediaLinks, getSanityImageUrl } from "@/utils";

export function SpeakerCards({ speakers }: { speakers: SpeakerProps[] }) {
  const speakersWithSocial = speakers.map(processSocialMediaLinks);

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 ">
      {speakersWithSocial.map((speaker) => (
        <SpeakerCard key={speaker.name} speaker={speaker} />
      ))}
    </div>
  );
}

type Props = {
  speaker: SpeakerProps;
};

function SpeakerCard({ speaker }: Props) {
  const socialLinks = Array.isArray(speaker.social) ? speaker.social : [];

  return (
    <div
      className={cn(
        "perspective  ",
        speaker.image ? "h-[300px] w-80 md:w-64" : "h-fit w-full"
      )}
    >
      {speaker.image ? (
        <div
          className={cn(
            "relative w-full h-full  shadow-sm overflow-hidden bg-gradient-dark-least-180",
            "rounded-xl border-2 border-mf-least"
          )}
        >
          <div className="relative h-full overflow-hidden rounded-xl">
            <Image
              src={getSanityImageUrl(speaker.image)}
              alt={speaker.name}
              width={1024}
              height={1024}
              className="object-cover object-top w-full h-full grayscale rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="font-semibold text-xl text-white">{speaker.name}</h3>
            <p className="mt-1 text-sm font-light tracking-tight text-mf-white/80">
              {speaker.role}
            </p>
            <p className="text-sm font-light tracking-tight ">
              {speaker.company}
            </p>
            <div className="mt-2  flex space-x-2 ">
              {socialLinks.map((social) => (
                <a
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mf-secondary bg-mf-dark rounded-full p-2 transition-colors duration-300 
                    w-8 h-8 flex items-center justify-center"
                >
                  <social.icon className="py-px px-0 text-white hover:text-mf-secondary transition-all duration-300 p-2" />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "relative w-full h-full  border-0 shadow-sm overflow-hidden bg-gradient-dark-least-180",
            "rounded-xl border-2 border-mf-least"
          )}
        >
          <div className="p-4 w-full">
            <h3 className="font-semibold text-base text-white line-clamp-1">
              {speaker.name}
            </h3>
            <p className="mt-1 text-sm font-light tracking-tight text-mf-white/80 line-clamp-1">
              {speaker.role}
            </p>
            <p className="text-sm font-light tracking-tight line-clamp-1">
              {speaker.company}
            </p>
            <div className="mt-2  flex space-x-2 ">
              {socialLinks.map((social) => (
                <a
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mf-secondary bg-mf-dark rounded-full p-2 transition-colors duration-300 
                  w-8 h-8 flex items-center justify-center"
                >
                  <social.icon className="py-px px-0 text-white hover:text-mf-secondary transition-all duration-300 p-2" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
