import Image from 'next/image'
import SoftFrame from '../svg/SoftFrame';
import { Separator } from '../ui/separator';
import Link from 'next/link'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { PiBuildingOfficeBold } from 'react-icons/pi';
import { FaHome } from 'react-icons/fa';
import { Headset } from 'lucide-react';
import { Button } from '../ui/button';

type Props = {

}

const PresentationPhone = (props: Props) => {
  return (
    <div className='medium:hidden block h-full relative p'>
      <article className='relative py-24'>
        <SoftFrame fill="#3581B8" bg="transparent" width={415} height={205} className="h-105 -translate-x-1/2 left-1/2 top-20 z-0" />
        <div className="w-92 mx-auto pr-2">
          <div className="flex hd:justify-normal justify-between items-end mb-2">
            <p className="font-lato tracking-wide text-xl font-extrabold pl-1.5">
              Sophie Bugnard
            </p>
            <Image 
              src={`/jpg/portrait-sophie-bugnard-square.jpeg`} 
              alt="Portrait Sophie Bugnard docteure en pharmacie" 
              width={105} 
              height={100} 
              className="rounded-full border-8 border-blue-logo hd:hidden block -mr-4" 
            />
          </div>
          <Separator className="bg-black my-2" />
          <ul className={`font-ysabeau font-bold tracking-wide mb-7.5 ml-1 mr-2 text-black leading-8 text-lg z-30`} >
            <li>▸<span className="">&nbsp;Docteure en pharmacie</span></li>
            <li>▸<span className="">&nbsp;Conseillère en nutrition à Montpellier</span></li>
            <li>▸<span className="">&nbsp;Spécialiste du rééquilibrage alimen&shy;taire des femmes en période de ménopause</span></li>
            <li>▸<span className="">&nbsp;Autrice du livre <span className='italic underline underline-offset-4 font-semibold'>Les secrets de la longévité en bonne santé</span>,  éd. Lanore</span></li>
          </ul>
          <div className="flex gap-x-12 justify-center items-center w-96 z-10 relative">
            <Link href="/qui-suis-je" className="text-white font-ysabeau bg-blue-logo px-2.5 py-1 rounded-xl hover:bg-green-logo transition-colors duration-100 cursor-pointer">
              Qui suis-je ?
            </Link>
            <Link href="/publications" className="text-white font-ysabeau bg-blue-logo px-2.5 py-1 rounded-xl hover:bg-green-logo transition-colors duration-100 cursor-pointer">
              Voir mes publications
            </Link>
          </div>
        </div>
      </article>
      <div className={`text-green-logo px-10 text-center font-ysabeau text-l font-bold tracking-wide italic`}>
        <div className="relative w-fit mb-5">
          <p>
            J'accompagne les femmes et les aide à mieux comprendre leur corps, apaiser les déséquilibres hormonaux et retrouver un bien-être durable grâce à une alimentation adaptée et personnalisée.
          </p>
          <ImQuotesLeft className="absolute top-0 -left-5" size={20}/>
          <ImQuotesRight className="absolute -bottom-1 -right-2.5" size={20} />
        </div>
      </div>

      <section className={`relative my-16`}>
        <div className="border-2 border-brown-logo rounded-sm bg-white w-103.75 mx-auto relative">
          <div className="relative rotate-2 w-103.75 h-full">
            <Image src="/webp/vitamins.webp" width={475} height={350} alt="Alicaments" className="rounded-sm border-brown-logo border-2"/>
          </div>
          <div className='text-lg font-semibold absolute top-4 w-103 pl-3 font-ysabeau -rotate-2 mx-auto'>
            <p className='mb-1.5 bg-brown-logo w-fit px-2 py-1 rounded-md italic text-white tracking-wider'>Consultation au choix :</p>
            <ul className='pl-2 space-y-2 text-base'>
              <li className="font-normal bg-white w-fit px-2.5 flex items-center gap-x-1.5 rounded-md border font-nunito">
                <PiBuildingOfficeBold color='#9D695A' size={16} />À mon cabinet à Montpellier
              </li>
              <li className="font-normal bg-white w-fit px-2.5 flex items-center gap-x-1.5 rounded-md border font-nunito">
                <FaHome color='#9D695A' size={16} />À domicile à Montpellier et sa périphérie
              </li>
              <li className="font-normal bg-white w-fit px-2.5 flex items-center gap-x-1.5 rounded-md border font-nunito">
                <Headset color='#9D695A' size={16} />En visio
              </li>
            </ul>
            <p className='w-52 rounded-full border-2 mt-4 text-base py-2 px-5 italic text-center border-brown-logo bg-white'>
              Suivi au quotidien (SMS, e-mail, Whatsapp...)
            </p>
            <div className='flex justify-end w-'>
              <Button className="mr-2 border-2 text-sm pb-2 cursor-pointer font-nunito uppercase -translate-y-4">
                Demander un RDV
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PresentationPhone