import { Clock, LocationEdit, MailIcon, MapPin, PhoneCallIcon, SquareParking } from 'lucide-react'
import RDVIcon from './svg/RDVIcon'
import Link from 'next/link'

const HeaderInfo = () => {
  return (
    <section className='text-main-theme flex gap-x-8 items-start font-ysabeau text-xl tracking-wide'>
      <div className='space-y-1'>
        <div className='flex gap-x-2 font-bold'>
          <PhoneCallIcon/> <Link href="tel:0652345678" className='px-2 rounded-lg bg-main-theme text-tea-green font-semibold italic'>06 52 34 56 78</Link >
        </div>
        <div className='flex gap-x-2 font-semibold'>
          <MailIcon/>  <Link href="mailto:contact@exemple.com" className='px-2 rounded-lg bg-main-theme text-tea-green font-semibold italic'>contact@exemple.com</Link >
        </div>
      </div>
      <div className='flex gap-x-2 font-bold'>
        <MapPin/> 123 Rue de la Santé, <br/>34 000 Montpellier
      </div>
      <div className='flex gap-x-2 font-bold'>
        <Clock/> Lundi au vendredi <br/> 9h - 18h
      </div>
      <div className='flex gap-x-2 font-bold'>
        <SquareParking/> Parking gratuit<br/> sur place
      </div>
      <div className='flex gap-x-2'>
        <RDVIcon width={30} height={30}/> <Link href="/rdv" className='px-2 py-1 rounded-lg bg-main-theme text-tea-green font-semibold italic'>Demander un RDV</Link>
      </div>
    </section>
  )
}

export default HeaderInfo