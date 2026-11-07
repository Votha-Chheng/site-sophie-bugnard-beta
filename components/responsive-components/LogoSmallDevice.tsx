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
    <section className="small:min-w-fit min-w-full mx-0 small:mx-auto hd:hidden flex justify-between items-center pt-1 py-2 mt-1">
      <Link href={`/versionalt`} className={`flex items-center justify-center small:gap-x-2 gap-x-1 pr-2.5`} onClick={onClickLogo}>
        <Image src={`/svg/logo.svg`} alt='Logo Sophie Bugnard' width={50} height={50} className="phone:w-13 w-13" />
        <div className="w-full translate-y-2">
          <h1 className={`font-cormorant-infant text-blue-logo font-bold phone:text-3xl text-2xl phone:leading-5 leading-4 -translate-y-1.5`} >
            Sophie BUGNARD
          </h1>
          <div className={`-translate-y-0.5`}>
            <h2 className={`font-ysabeau text-brown-logo font-bold tracking-normal phone:text-base text-sm leading-4 phone:leading-5`}>Pharmacienne</h2>
            <h2 className={`font-ysabeau text-green-logo font-bold tracking-tight phone:text-base text-sm leading-3 phone:leading-3 mb-2`}>Experte en nutrition, santé féminine & ménopause</h2>
          </div>
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