"use client"

import { useMenuResponsiveStore } from '@/stores/MenuResponsiveStore';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const LogoSmallDevice = () => {
  const { toggleOpen, open, setMenuFocused, setSelectedIcon } = useMenuResponsiveStore();

  const onClickLogo = () => {
    setMenuFocused(null);
    setSelectedIcon(null);

    if (open) {
      toggleOpen();
    }
  }

  const onMenuClick = () => {
    toggleOpen();
    setSelectedIcon(null);
  }

  return (
    <section className="small:min-w-fit min-w-full mx-0 small:mx-auto hd:mx-0 hd:hidden flex justify-between items-center pt-1 py-2">
      <Link href={`/versionalt`} className={`flex items-center justify-center small:gap-x-2 gap-x-1 pr-2.5`} onClick={onClickLogo}>
        <Image src={`/svg/logo.svg`} alt='Logo Sophie Bugnard' width={45} height={45} className="phone:w-11.25 w-9.5" />
        <div className="w-full translate-y-1">
          <h1 className={`font-cormorant-infant text-blue-logo font-bold phone:text-2xl text-xl phone:leading-5 leading-4`} >
            Sophie BUGNARD
          </h1>
          <h2 className={`font-ysabeau text-brown-logo font-bold tracking-tight phone:text-base text-sm leading-3.5 phone:leading-4.5 mb-2`}>Experte en nutrition, santé féminine & ménopause</h2>
          {/* <h2 className={`font-ysabeau text-green-logo font-bold tracking-wide text-sm`}>Nutrition <span className='text-brown-logo'>•</span> Santé <span className='text-brown-logo'>•</span> Ménopause</h2> */}
        </div>
      </Link>
      {
        open
        ? <X className="small:hidden block text-green-logo cursor-pointer" onClick={() => onMenuClick()} />
        
        :
        <div className="small:hidden flex flex-col items-center">
          <span className="font-ysabeau text-green-logo font-bold tracking-tight text-xs">MENU</span>
          <Menu size={30} className=" text-green-logo cursor-pointer scale-x-150" onClick={() => onMenuClick()}/>
        </div> 

      }
    </section>
  )
}

export default LogoSmallDevice