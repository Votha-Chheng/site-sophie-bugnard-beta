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
    <section className="phone:min-w-fit min-w-full mx-0 small:mx-auto hd:mx-0 hd:hidden flex justify-between items-center pt-1">
      <Link href={`/versionalt`} className={`flex items-center justify-center small:gap-x-2 gap-x-1`} onClick={onClickLogo}>
        <Image src={`/svg/logo.svg`} alt='Logo Sophie Bugnard' width={45} height={45} className="phone:w-11.25 w-9.5" />
        <div className="w-full translate-y-1">
          <h1 className={`font-cormorant-infant text-blue-logo font-bold phone:text-2xl text-xl phone:leading-5 leading-4`} >
            Sophie BUGNARD
          </h1>
          <h2 className={`font-ysabeau text-brown-logo font-bold tracking-tight small:text-base text-xs leading-3.5 mb-2`}>Experte en nutrition, santé féminine & ménopause</h2>
          {/* <h2 className={`font-ysabeau text-green-logo font-bold tracking-wide text-sm`}>Nutrition <span className='text-brown-logo'>•</span> Santé <span className='text-brown-logo'>•</span> Ménopause</h2> */}
        </div>
      </Link>
      {
        open
        ? <X className="small:hidden block text-green-logo cursor-pointer" onClick={() => onMenuClick()} />
        : <Menu className="small:hidden block text-green-logo cursor-pointer" onClick={() => onMenuClick()}/>

      }
    </section>
  )
}

export default LogoSmallDevice