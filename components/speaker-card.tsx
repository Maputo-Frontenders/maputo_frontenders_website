import Image from "next/image";
import type { SpeakerProps } from "@/types";
import { cn } from "@/lib/utils";
import { processSocialMediaLinks, getSanityImageUrl } from "@/utils";

export function SpeakerCards({ speakers }: { speakers: SpeakerProps[] }) {
  const speakersWithSocial = speakers.map(processSocialMediaLinks);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-0">
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
        "perspective group",
        speaker.image ? "h-[340px] w-full" : "h-fit w-full"
      )}
    >
      {speaker.image ? (
        <div
          className={cn(
            "relative w-full h-full overflow-hidden rounded-xl",
            "border border-mf-least/30 shadow-lg",
            "transition-all duration-500 ease-out",
            "group-hover:shadow-xl group-hover:border-mf-secondary/50",
            "bg-gradient-to-b from-mf-dark/90 to-black"
          )}
        >
          <div className="relative h-full overflow-hidden rounded-xl transform transition-transform duration-700 ease-out group-hover:scale-105">
            <Image
              src={getSanityImageUrl(speaker.image)}
              alt={speaker.name}
              width={1024}
              height={1024}
              className="object-cover object-top w-full h-full grayscale group-hover:grayscale-[70%] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          </div>

          <div className="absolute bottom-0 left-0 p-5 w-full transform transition-transform duration-500 ease-out">
            <h3 className="font-semibold text-xl text-white tracking-tight group-hover:text-mf-secondary transition-colors duration-300">
              {speaker.name}
            </h3>
            <p className="mt-1 text-sm font-medium tracking-tight text-white/90">
              {speaker.role}
            </p>
            <p className="text-sm font-light tracking-tight text-white/70">
              {speaker.company}
            </p>

            {socialLinks.length > 0 && (
              <div className="mt-3 flex space-x-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.link}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-mf-secondary bg-black/50 hover:bg-black/80 rounded-full p-1.5 
                      transition-all duration-300 w-8 h-8 flex items-center justify-center 
                      border border-white/10 hover:border-mf-secondary/50 transform hover:-translate-y-1"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "relative w-full h-full rounded-xl overflow-hidden",
            "border border-mf-least/30 shadow-lg",
            "transition-all duration-500 ease-out",
            "group-hover:shadow-xl group-hover:border-mf-secondary/50",
            "bg-gradient-dark-least"
          )}
        >
          <div className="p-5 w-full">
            <h3 className="font-semibold text-lg text-white tracking-tight group-hover:text-mf-secondary transition-colors duration-300 line-clamp-1">
              {speaker.name}
            </h3>
            <p className="mt-1 text-sm font-medium tracking-tight text-white/90 line-clamp-1">
              {speaker.role}
            </p>
            <p className="text-sm font-light tracking-tight text-white/70 line-clamp-1">
              {speaker.company}
            </p>

            {socialLinks.length > 0 && (
              <div className="mt-3 flex space-x-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.link}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-mf-secondary bg-black/50 hover:bg-black/80 rounded-full p-1.5 
                      transition-all duration-300 w-8 h-8 flex items-center justify-center 
                      border border-white/10 hover:border-mf-secondary/50 transform hover:-translate-y-1"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
