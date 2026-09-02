'use client'

import Logo from './Logo'
import HeaderInfo from './HeaderInfo'
import { Separator } from './ui/separator'
import Menu from './Menu'
import { useColorPickerStore } from '@/stores/colorPickerStore'
import HeaderInfoLaptop from './HeaderInfoLaptop';
import LogoSmallDevice from './LogoSmallDevice';

const Header = () => {
  const {bgColor} = useColorPickerStore()
  
  return (
    <header style={{backgroundColor: bgColor.hex}} className="sticky top-0 w-full z-100">
      <div className='flex items-center w-full justify-between px-2.5'>
        <Logo/>
        <LogoSmallDevice/>
        <HeaderInfo/>
      </div>
      <Separator className="bg-green-logo mt-2.5 mb-1.5 hd:mb-2.5 hidden medium:block" />
      <HeaderInfoLaptop/>
      <Separator className="bg-green-logo mt-1 hd:mt-2.5 small:mb-1.5 hd:mb-2.5 block hd:hidden" />
      <Menu/>
      <Separator className="bg-green-logo small:block hidden" />
    </header>
  )
}

export default Header