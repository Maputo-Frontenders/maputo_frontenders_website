import { sponsors_logos } from "@/utils/main-data";
import Image from "next/image";

export function PartenersSection() {
  return (
    <section className="container w-full space-y-4">
      <h4 className="uppercase text-sm text-center text-mf-purple">
        Parceirias e patrocínios
      </h4>
      <div className="w-full flex flex-wrap justify-center items-center gap-x-10 gap-y-2">
        {sponsors_logos.map((image, index) => {
          return (
            <Image
              key={image.id}
              src={image.src}
              alt="Sponsor image"
              width={100}
              height={50}
            />
          );
        })}
      </div>
    </section>
  );
}
