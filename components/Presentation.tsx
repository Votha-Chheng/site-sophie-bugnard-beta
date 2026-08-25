import Image from 'next/image'
import SoftFrame from './svg/SoftFrame'
import { Separator } from './ui/separator'
import Link from 'next/link'

type PresentationProps = {
  className?: string
}

const Presentation = (props: PresentationProps) => {
  const {className = ""} = props

  return (
    <section className={`absolute ${className}`}>
      <div className={`relative w-100 h-125 ${className}`}>
        <div className='absolute top-10 left-0 h-50 w-50 rounded-full bg-blue-logo hd:block hidden'/>
        <Image 
          src={`/jpg/portrait-sophie-bugnard-square.jpeg`} 
          alt="Portrait Sophie Bugnard docteure en pharmacie" 
          width={196} 
          height={196} 
          className="absolute z-30 left-0 top-10.5 rounded-full border-8 border-blue-logo hd:block hidden" 
        />
        <div className='absolute top-58 left-0'>
          <article className='relative'>
            <SoftFrame fill="#3581B8" bg="#f2f0ef" width={450} className="absolute top-0 left-0 z-40 hd:h-100 h-105" />
            <div className="z-40 absolute w-96 left-8 hd:top-9 top-2.5">
              <div className="flex hd:justify-normal justify-between items-end mb-2 w-96">
                <p className="font-lato tracking-wide text-2xl font-extrabold pl-1.5">
                  Sophie Bugnard
                </p>
                <Image 
                  src={`/jpg/portrait-sophie-bugnard-square.jpeg`} 
                  alt="Portrait Sophie Bugnard docteure en pharmacie" 
                  width={100} 
                  height={100} 
                  className="rounded-full border-8 border-blue-logo hd:hidden block -mr-4" 
                />
              </div>
              <Separator className="bg-black my-2" />
              <ul className={`font-ysabeau font-bold tracking-wide mb-7.5 ml-1 mr-2 text-black leading-8 hd:text-xl text-lg w-96`} >
                <li>▸<span className="">&nbsp;Docteure en pharmacie</span></li>
                <li>▸<span className="">&nbsp;Conseillère en nutrition à Montpellier</span></li>
                <li>▸<span className="">&nbsp;Spécialiste du rééquilibrage alimen&shy;taire des femmes en période de ménopause</span></li>
                <li>▸<span className="">&nbsp;Autrice du livre <span className='italic underline underline-offset-4 font-semibold'>Les secrets de la longévité en bonne santé</span>,  éd. Lanore</span></li>
              </ul>
              <p className="flex gap-x-12 justify-center items-center w-96">
                <Link href="/qui-suis-je" className="text-white font-ysabeau bg-blue-logo px-2.5 py-1 rounded-xl hover:bg-green-logo transition-colors duration-100">
                  Qui suis-je ?
                </Link>
                <Link href="/publications" className="text-white font-ysabeau bg-blue-logo px-2.5 py-1 rounded-xl hover:bg-green-logo transition-colors duration-100">
                  Voir mes publications
                </Link>
              </p>
            </div>
          </article>
        </div>
      </div>
    
    </section>
  )
}

export default Presentation