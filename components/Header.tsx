import Logo from './Logo'
import HeaderInfo from './HeaderInfo'
import { Separator } from './ui/separator'
import Menu from './Menu'

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-100 bg-tea-green pt-2.5">
      <div className='flex items-center w-full justify-between px-5'>
        <Logo/>
        <HeaderInfo/>
      </div>
      <Separator className="bg-main-theme my-5" />
      <Menu/>
      <Separator className="bg-main-theme" />
    </header>
  )
}

export default Header