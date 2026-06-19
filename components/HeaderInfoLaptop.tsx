import { Clock, MailIcon, MapPin, PhoneCallIcon, SquareParking } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import RDVIcon from './svg/RDVIcon';
import { Separator } from './ui/separator';

type Props = {}

const HeaderInfoLaptop = (props: Props) => {
  return (
    <section className={`hd:hidden flex text-blue-logo gap-x-10 items-start justify-center font-ysabeau tracking-wide w-full px-5`}>
      <div className='space-y-1'>
        <div className='flex gap-x-2 font-bold'>
          <PhoneCallIcon color='#9D695A'/> <Link href="tel:0652345678" className='px-2 rounded-lg bg-blue-logo text-white font-semibold italic'>06 52 34 56 78</Link >
        </div>
        <div className='flex gap-x-2 font-semibold'>
          <MailIcon color='#9D695A'/>  <Link href="mailto:contact@exemple.com" className='px-2 rounded-lg bg-blue-logo text-white font-semibold italic'>contact@exemple.com</Link >
        </div>
      </div>
      <div className='flex gap-x-2 font-bold'>
        <MapPin color='#9D695A'/> 123 Rue de la Santé, <br/>34 000 Montpellier
      </div>
      <div className='flex gap-x-2 font-bold'>
        <Clock color='#9D695A'/> Lundi au vendredi <br/> 9h - 18h
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