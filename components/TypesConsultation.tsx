import Image from 'next/image'
import { TbAppleFilled } from 'react-icons/tb'
import { Button } from './ui/button'
import { PiBuildingOfficeBold } from 'react-icons/pi'
import { FaHome } from 'react-icons/fa'
import { Headset } from 'lucide-react'

type TypesConsultationProps = {
  className?: string
}

const TypesConsultation = (props: TypesConsultationProps) => {
  const {className = ""} = props
  return (
    <section className={`absolute ${className}`}>
      <div className="-z-10 border-2 border-brown-logo rounded-sm bg-white">
        <div className="relative rotate-2 w-118.75 h-full">
          <Image src="/webp/vitamins.webp" width={475} height={350} alt="Alicaments" className="rounded-sm border-brown-logo border-2"/>
        </div>
        <div className='text-lg font-semibold absolute top-5 left-2.5 w-96 pl-3.5 font-ysabeau -rotate-2'>
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
          <p className='w-48 rounded-full border-2 mt-4 text-lg py-2 px-5 italic text-center border-brown-logo bg-white'>
            Suivi au quotidien (SMS, e-mail, Whatsapp...)
          </p>
        </div>
      </div>
      <Button className="absolute bottom-4 right-4 border-2 text-lg pb-2 cursor-pointer font-nunito">
        Demander un RDV
      </Button>
    </section>
  )
}

export default TypesConsultation