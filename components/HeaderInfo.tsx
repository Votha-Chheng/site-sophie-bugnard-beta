import { Clock, MailIcon, MapPin, PhoneCallIcon, SquareParking } from 'lucide-react'
import RDVIcon from './svg/RDVIcon'
import Link from 'next/link'

const HeaderInfo = () => {
  return (
    <section className={`hd:flex hidden text-blue-logo gap-x-8 items-start font-ysabeau text-xl tracking-wide pt-1.5`}>
      <div className='space-y-1'>
        <div className='flex gap-x-2 font-bold'>
          <PhoneCallIcon color='#9D695A'/> <Link href="tel:0662710362" target='_blank' className='px-2 rounded-lg bg-blue-logo text-white font-semibold italic'>06 62 71 03 62</Link >
        </div>
        <div className='flex gap-x-2 font-semibold'>
          <MailIcon color='#9D695A'/>  <Link href="mailto:sofibug@gmail.com" target='_blank' className='px-2 rounded-lg bg-blue-logo text-white font-semibold italic'>sofibug@gmail.com</Link >
        </div>
      </div>
      <div className='flex gap-x-2 font-bold'>
        <MapPin color='#9D695A'/> 770 rue de la Roqueturière, <br/>34 090 Montpellier
      </div>
      <div className='flex gap-x-2 font-bold'>
        <Clock color='#9D695A'/> Lundi au vendredi <br/> sur demande
      </div>
      <div className='flex gap-x-2 font-bold'>
        <SquareParking color='#9D695A'/> Parking gratuit sur place 
      </div>
      <div className='flex gap-x-2 ma-w-fit'>
        <RDVIcon stroke='#9D695A' width={30} height={30}/>
        <Link href="/rdv" className='px-2 py-1 rounded-lg bg-blue-logo text-white font-semibold italic w-fit whitespace-nowrap'>
          Demander un RDV
        </Link>
      </div>
    </section>
  )
}

export default HeaderInfo