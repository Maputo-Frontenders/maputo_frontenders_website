import { sponsorsLogos } from "@/data/mainData"

export const Sponsor = () => {
  return (
    <section className="container w-full py-12">
      <h2 className="uppercase text-white text-center">Parceirias e patrocínios</h2>

      <div className="w-full flex flex-wrap justify-center items-center gap-x-10 gap-y-2">
        {
          sponsorsLogos.map((image, index) => {
            return (
              <div key={ image.id }>
                <img src={ image.src } alt="Sponsor image" />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}