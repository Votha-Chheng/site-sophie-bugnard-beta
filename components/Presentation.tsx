import Image from 'next/image'
import SoftFrame from './svg/SoftFrame'
import { Separator } from './ui/separator'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

type PresentationProps = {
  className?: string
}

const Presentation = (props: PresentationProps) => {
  const {className = ""} = props

  return (
    <section className={`absolute ${className}`}>
      <div className={`relative w-100 h-125 ${className}`}>
      <div className='absolute top-8 h-52 w-52 rounded-full bg-blue-logo'/>
        <Image 
          src={`/jpg/portrait_Sophie_Bugnard-2.jpg`} 
          alt="Portrait Sophie Bugnard docteure en pharmacie" 
          width={200} 
          height={200} 
          className="absolute z-30 top-10 left-0 rounded-full border-8 border-blue-logo" 
        />
        <div className='absolute top-58 left-0'>
          <article className='relative'>
            <SoftFrame fill="#3581B8" bg="#f2f0ef" width={450} height={400} className="absolute top-0 left-0 z-40" />
            <div className="z-40 absolute w-96 left-8 top-9">
              <p 
                className="font-poiret-one tracking-widest text-2xl font-bold pl-1.5 [text-shadow:0.6px_0_currentColor,-0.6px_0_currentColor,0_0.6px_currentColor,0_-0.6px_currentColor]"
              >
                Sophie Bugnard
              </p>
              <Separator className="bg-black my-2" />
              <ul className={`font-ysabeau font-bold tracking-wide mb-7.5 ml-1 mr-2 text-black leading-8 text-xl w-96`} >
                <li>▸<span className="">&nbsp;Docteure en pharmacie</span></li>
                <li>▸<span className="">&nbsp;Conseillère en nutrition basée à Montpellier</span></li>
                <li>▸<span className="">&nbsp;Spécialiste du rééquilibrage alimen&shy;taire des femmes autour de la ménopause</span></li>
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