'use client'

import Logo from './Logo'
import HeaderInfo from './HeaderInfo'
import { Separator } from './ui/separator'
import Menu from './Menu'
import { useColorPickerStore } from '@/stores/colorPickerStore'

const Header = () => {
  const {bgColor} = useColorPickerStore()
  
  return (
    <header style={{backgroundColor: bgColor.hex}} className="sticky top-0 w-full z-100">
      <div className='flex items-center w-full justify-between px-5'>
        <Logo/>
        <HeaderInfo/>
      </div>
      <Separator className="bg-white mt-2.5 mb-2.5" />
      <Menu/>
      <Separator className="bg-white" />
    </header>
  )
}

export default Header