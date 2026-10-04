import { Clock, MailIcon, MapPin, PhoneCallIcon, SquareParking } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import RDVIcon from './svg/RDVIcon';
import { Separator } from './ui/separator';

type Props = {}

const HeaderInfoLaptop = (props: Props) => {
  return (
    <section className={`hd:hidden medium:flex hidden text-blue-logo gap-x-10 items-start justify-center font-ysabeau tracking-wide w-full px-5`}>
      <div className='space-y-1'>
        <div className='flex gap-x-2 font-bold'>
          <PhoneCallIcon color='#9D695A'/> <Link href="tel:0662710362" className='px-2 rounded-lg bg-blue-logo text-white font-semibold italic'>06 62 71 03 62</Link >
        </div>
        <div className='flex gap-x-2 font-semibold'>
          <MailIcon color='#9D695A'/>  <Link href="mailto:sofibug@gmail.com" className='px-2 rounded-lg bg-blue-logo text-white font-semibold italic'>sofibug@gmail.com</Link >
        </div>
      </div>
      <div className='flex gap-x-2 font-bold'>
        <MapPin color='#9D695A'/> 770 rue de la Roqueturière, <br/>34090 Montpellier
      </div>
      <div className='flex gap-x-2 font-bold'>
        <Clock color='#9D695A'/> Lundi au vendredi <br/> Sur demande
      </div>
      <div className='flex gap-x-2 font-bold'>
        <SquareParking color='#9D695A'/> Parking gratuit<br/> sur place
      </div>
      <div className='flex gap-x-2'>
        <RDVIcon stroke='#9D695A' width={30} height={30}/>
        <Link href="/rdv" className='px-2 py-1 rounded-lg bg-blue-logo text-white font-semibold italic'>
          Demander un RDV
        </Link>
      </div>
    </section>
  )
}

export default HeaderInfoLaptop