"use client"

import { Clock, MailIcon, MapPin, PhoneCallIcon, SquareParking } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react'
import RDVIcon from './svg/RDVIcon';
import { useMenuResponsiveStore } from '@/stores/MenuResponsiveStore';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';


const IconsInfosList = () => {
  const {infosOpen, openInfos, selectedIcon, setSelectedIcon, closeInfos} = useMenuResponsiveStore();
  const iconListRef = useRef<HTMLDivElement|null>(null);

  const handler = ()=> {
    closeInfos();
    setSelectedIcon(null);
  }

  useOnClickOutside(iconListRef, handler); 
  
  return (
    <section className={`medium:hidden relative`}>      
      <div className={`${!infosOpen ? "bg-transparent translate-y-0 -z-10" : "bg-blue-logo translate-y-full z-50"} absolute top-0 left-0 w-full h-full transition-all duration-150`}>
        <div className={`h-12 flex justify-center pt-1.5`} ref={iconListRef}>
          {
            selectedIcon === "phone"
            ?
            <Link href="tel:0652345678" className=' text-white font-semibold italic'><span className='px-3 bg-blue-logo rounded-lg border-white border'>06 52 34 56 78</span></Link >
            :
            selectedIcon === "mail"
            ?   
            <Link href="mailto:sofibug@gmail.com" className='text-white font-semibold italic'><span className='px-3 bg-blue-logo rounded-lg border-white border'>sofibug@gmail.com</span></Link >  
            :
            selectedIcon === "map"
            ?
            <Link 
              target="_blank"
              href="https://www.google.com/maps/place/770+Rue+de+la+Roqueturi%C3%A8re,+34090+Montpellier/@43.6319969,3.880447,17z/data=!3m1!4b1!4m6!3m5!1s0x12b6af3efca12501:0x87c0ed47fabddb84!8m2!3d43.631993!4d3.8830219!16s%2Fg%2F11c2chgj2m?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D" 
              className='text-white font-semibold italic'
            >
              <span className='px-3 bg-blue-logo rounded-lg border-white border'>770 rue de la Roqueturière, 34 090 Montpellier </span>
            </Link >  
            :
            selectedIcon === "clock"
            ?
            <span className='px-3 bg-white rounded-lg border-blue-logo border text-blue-logo font-semibold italic h-7.5 pt-0.5'>Lundi au vendredi 9h00 - 18h00</span>   
            :
            selectedIcon === "parking"
            ?
            <span className='px-3 bg-white rounded-lg border-blue-logo border text-blue-logo font-semibold italic h-7.5 pt-0.5'>Parking gratuit sur place</span>
            :""
          }
        </div>
        <div className={`${selectedIcon ?"block" : "hidden"} h-screen w-full bg-transparent`} onClick={() => setSelectedIcon(null)}/>
      </div>

      <div className={`flex w-full bg-blue-logo py-1 justify-between px-5 items-center relative`}>
        <div 
          className={`${selectedIcon === 'phone' ?'bg-white' : 'bg-blue-logo'} p-1 rounded-xl transition-all duration-150`} 
          onClick={() => {
            openInfos();
            setSelectedIcon(selectedIcon === 'phone' ? null : 'phone')
          }}
        >
          <PhoneCallIcon color={selectedIcon === 'phone' ? '#9D695A' : '#ffffff'} className={`cursor-pointer`}/> 
        </div>

        <div 
          className={`${selectedIcon === 'mail' ? 'bg-white' : 'bg-blue-logo'} p-1 rounded-xl `} 
          onClick={() => {
            openInfos();
            setSelectedIcon(selectedIcon === 'mail' ? null : 'mail')
          }}>
          <MailIcon color={selectedIcon === 'mail' ? '#9D695A' : '#ffffff'} className='cursor-pointer'/>
        </div>

        <div className={`${selectedIcon === 'map' ? 'bg-white' : 'bg-blue-logo'} p-1 rounded-xl `} onClick={() => {
          openInfos();
          setSelectedIcon(selectedIcon === 'map' ? null : 'map')
        }}>
          <MapPin color={selectedIcon === 'map' ? '#9D695A' : '#ffffff'} className='cursor-pointer'/> 
        </div>

        <div className={`${selectedIcon === 'clock' ? 'bg-white' : 'bg-blue-logo'} p-1 rounded-xl `} onClick={() => {
          openInfos();
          setSelectedIcon(selectedIcon === 'clock' ? null : 'clock')
        }}>
          <Clock color={selectedIcon === 'clock' ? '#9D695A' : '#ffffff'} className='cursor-pointer'/> 
        </div>

        <div className={`${selectedIcon === 'parking' ? 'bg-white' : 'bg-blue-logo'} p-1 rounded-xl `} onClick={() => {
          openInfos();
          setSelectedIcon(selectedIcon === 'parking' ? null : 'parking')
        }}>
          <SquareParking color={selectedIcon === 'parking' ? '#9D695A' : '#ffffff'} className='cursor-pointer'/>
        </div>

        <div className={`${selectedIcon === 'rdv' ? 'bg-white' : 'bg-blue-logo'} p-1 rounded-xl `} onClick={() => {
          openInfos();
          setSelectedIcon(selectedIcon === 'rdv' ? null : 'rdv')
        }}>
          <RDVIcon stroke={selectedIcon === 'rdv' ? '#9D695A' : '#ffffff'} width={25} height={25} className='cursor-pointer'/>
        </div>

        
        
        {/* Lundi au vendredi <br/> 9h - 18h */}
        
        {/* Parking gratuit sur place */}
        
        {/* <Link href="/rdv" className='px-2 py-1 rounded-lg bg-blue-logo text-white font-semibold italic w-fit whitespace-nowrap'>
          Demander un RDV
          </Link> */}

      </div>

    </section>
  )
}

export default IconsInfosList