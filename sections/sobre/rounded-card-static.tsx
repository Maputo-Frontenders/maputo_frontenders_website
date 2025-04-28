import Image from "next/image";
import { cn } from "@/lib/utils";

export function RoundedCard({
  image,
  title,
  description,
  classNames,
  classNameContainer,
  isIcon,
}: {
  isIcon?: boolean;
  image: any;
  title: string;
  description: string;
  classNames?: string;
  classNameContainer?: string;
}) {
  return (
    <div
      className={cn("rounded-full p-[2px] h-fit w-fit", classNames)}
      role="listitem"
      aria-roledescription="card"
      aria-label={title}
    >
      <div
        className={cn(
          "flex items-center gap-2 w-fit h-fit rounded-full bg-mf-background px-2 pr-8 py-2",
          classNameContainer,
          isIcon && "items-start"
        )}
      >
        <Image
          src={image}
          alt={title}
          className={cn(" rounded-full", isIcon ? "w-8 h-8" : "w-12 h-12")}
          aria-roledescription="card image"
        />

        <div
          className={cn("flex flex-col ", isIcon && "gap-2")}
          aria-roledescription="card content"
        >
          <h4 className="font-semibold" aria-roledescription="card title">
            {title}
          </h4>
          <p
            className="text-mf-white/75 max-w-48 text-sm"
            aria-roledescription="card description"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
