import { impactCards } from "@/data/mainData"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export const Impact = () => {
  return (
    <section className="container w-full py-12 text-white flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="uppercase mb-3">Impacto</h2>
        <h3 className="text-2xl font-bold mb-6">Contribuimos para o crescimento do ecossistema tecnológico local</h3>
        <p className="max-w-3xl w-full mx-auto font-thin">Aprender, ensinar e descobrir tudo ligado ao desenvolvimento frontend, seja através de meetups, code challenges, hacktons e diversas outras formas de partilha de conhecimento e troca de experiencia.</p>
      </div>

      <Link href={"/"} className="py-4 px-6 rounded-lg flex gap-2 w-fit font-semibold uppercase" style={{
        background: "linear-gradient(144.07deg, #4ED4C5 -53.58%, #A679FF 120.88%),linear-gradient(0deg, #17253D, #17253D);"
      }}>
        Join community
        <ArrowUpRight className='text-white h-6 w-5' />
      </Link>

      <div className="mt-16 flex flex-wrap justify-center gap gap-6">
        {
          impactCards.map((card) => {
            return (
              <div className="bg-mf-least pt-16 px-14 rounded-lg overflow-hidden h-fit" key={ card.title }>
                <div className={`flex flex-col gap-1 text-center ${ !card.button && "pb-16" }`}>
                  <span className="text-gradient text-5xl font-bold">{ card.number }+</span>
                  <span className="text-lg">{ card.title }</span>
                </div>

                {
                  card.button && (
                    <Link href={card.button.href} className="mt-12 mb-9 bg-mf-blue py-4 px-6 rounded-lg flex gap-2 w-fit font-semibold uppercase">
                      { card.button.title }
                      <ArrowUpRight className='text-white h-6 w-5' />
                    </Link>
                  )
                }
              </div>
            )
          })
        }
      </div>
    </section>
  )
}