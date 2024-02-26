import { sponsorsLogos } from "@/data/mainData";

export const Sponsor = () => {
  return (
    <section className="container w-full">
      <div className="w-full flex flex-wrap justify-center items-center gap-x-10 gap-y-2">
        {sponsorsLogos.map((image, index) => {
          return (
            <div key={image.id}>
              <img src={image.src} alt="Sponsor image" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
