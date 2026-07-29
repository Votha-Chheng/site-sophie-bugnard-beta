'use client'

import Link from "next/link"
import { NavigationMenu, NavigationMenuItem } from "./ui/navigation-menu"
import { usePathname } from "next/navigation"

const Menu = () => {
  const pathname = usePathname()

  return (
    <NavigationMenu viewport={true} className={`small:flex hidden hd:text-2xl text-lg text-green-logo tracking-wider list-none w-full gap-x-16 font-extrabold pb-2 hd:pb-3 font-ysabeau`}>
      <NavigationMenuItem>
        <Link 
          className={`${pathname === "/mon-approche" ? "bg-green-logo text-white  text-xl hd:text-3xl italic px-2 pt-0.5 pb-1 hover:no-underline":" hover:underline"} underline-offset-4 rounded-lg transition-all duration-150 ease-out`} 
          href="/mon-approche"
        >
          Mon approche
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link 
          className={`${pathname === "/qui-suis-je" ? "bg-green-logo text-white text-xl hd:text-3xl italic px-2 pt-0.5 pb-1 hover:no-underline":"hover:underline"} underline-offset-4 rounded-lg transition-all duration-150 ease-out`} 
          href="/qui-suis-je"
        >
          Qui suis-je ?
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link className={`${pathname === "/tarifs" ? "bg-green-logo text-white  text-xl hd:text-3xl italic  px-2 pt-0.5 pb-1":"hover:underline"}  underline-offset-4 rounded-lg transition-all duration-150 ease-out`} href="/tarifs">Tarifs</Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link 
          className={`${pathname === "/publications" ? "bg-green-logo text-white  text-xl hd:text-3xl italic  px-2 pt-0.5 pb-1":"hover:underline"}  underline-offset-4 rounded-lg transition-all duration-150 ease-out`} 
          href="/publications"
        >
          Publications
        </Link>
      </NavigationMenuItem>
    </NavigationMenu>
  )
}

export default Menu