import Link from "next/link"
import { NavigationMenu, NavigationMenuItem } from "./ui/navigation-menu"

const Menu = () => {
  return (
    <NavigationMenu viewport={true} className={`text-2xl text-main-theme tracking-wider font-lato list-none w-full gap-x-16 font-bold pb-3`}>
      <NavigationMenuItem>
        <Link className="hover:bg-main-theme hover:text-tea-green rounded-lg p-2 transition-all duration-150 ease-out" href="/qui-suis-je">Qui suis-je ?</Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link className="hover:bg-main-theme hover:text-tea-green rounded-lg p-2 transition-all duration-150 ease-out" href="/mon-approche">Mon approche</Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link className="hover:bg-main-theme hover:text-tea-green rounded-lg p-2 transition-all duration-150 ease-out" href="/tarifs">Tarifs</Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link className="hover:bg-main-theme hover:text-tea-green rounded-lg p-2 transition-all duration-150 ease-out" href="/mon-livre">Mon livre</Link>
      </NavigationMenuItem>
    </NavigationMenu>
  )
}

export default Menu