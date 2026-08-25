"use client"

import { useMenuResponsiveStore } from "@/stores/MenuResponsiveStore";
import Link from "next/link";
import { useState } from "react";

type Props = {
  className?: string
}

function MenuResponsive({ className }: Props) {
  const { open, toggleOpen, menuFocused, setMenuFocused, closeInfos } = useMenuResponsiveStore();

  const openMenu = ()=> {
    toggleOpen ();
    closeInfos();
  }

  return (
    <nav className={`${className} ${open ? "translate-y-0" : "-translate-y-full"} transition-transform duration-150 phone:hidden w-full h-full fixed z-50`}>
      <ul className="bg-green-logo py-2.5 gap-y-1.5 flex flex-col items-center w-full font-ysabeau text-lg border-b-2 border-white">
        <li className={`${menuFocused === "mon-approche" ? "bg-gray-400" : "bg-transparent"} px-5 text-white font-bold text-center rounded-md`}><Link href="/mon-approche" onClick={openMenu} onFocus={() => setMenuFocused("mon-approche")}>Mon approche</Link></li>
        <li className={`${menuFocused === "qui-suis-je" ? "bg-gray-400" : "bg-transparent"} px-5 text-white font-bold text-center rounded-md`}><Link href="/qui-suis-je" onClick={openMenu} onFocus={() => setMenuFocused("qui-suis-je")}>Qui suis-je ?</Link></li>
        <li className={`${menuFocused === "tarifs" ? "bg-gray-400" : "bg-transparent"} px-5 text-white font-bold text-center rounded-md`}><Link href="/tarifs" onClick={openMenu} onFocus={() => setMenuFocused("tarifs")}>Tarifs</Link></li>
        <li className={`${menuFocused === "publications" ? "bg-gray-400" : "bg-transparent"} px-5 text-white font-bold text-center rounded-md`}><Link href="/publications" onClick={openMenu} onFocus={() => setMenuFocused("publications")}>Publications</Link></li>
      </ul>
      <div className={`${open ? "block" : "hidden"} bg-transparent h-screen`} onClick={toggleOpen} />
    </nav>
  )
}

export default MenuResponsive