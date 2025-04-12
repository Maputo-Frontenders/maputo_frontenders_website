import { sponsors_logos } from "@/utils/main-data";
import Image from "next/image";
import { DictionaryProps } from "@/lib/getDictionary";

type Props = {
  intl: DictionaryProps;
};

export function PartenersSection({ intl }: Props) {
  return (
    <section
      className="container w-full space-y-4"
      aria-labelledby="partners-heading"
      role="region"
    >
      <h4
        id="partners-heading"
        className="uppercase text-sm text-center text-mf-purple"
      >
        {intl.partners.title}
      </h4>
      <div
        className="w-full flex flex-wrap justify-center items-center gap-x-10 gap-y-2"
        aria-label={intl.partners.title}
      >
        {sponsors_logos.map((image, index) => {
          return (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={100}
              height={50}
            />
          );
        })}
      </div>
    </section>
  );
}
