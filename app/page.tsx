'use client'

import BodyLayout from "@/components/layouts/BodyLayout";
import SoftFrame from "@/components/svg/SoftFrame";
import { Separator } from "@/components/ui/separator";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full p-10">
      <BodyLayout className="">
        <div className="w-175 h-175 bg-transparent rounded-full">
          <svg className="absolute overflow-visible left-0 top-1/8 z-50" viewBox="0 0 200 200" width="700" height="700" xmlns="http://www.w3.org/2000/svg">
            <ellipse 
              cx="100" 
              cy="60" 
              rx="100" 
              ry="75"
              strokeDasharray="240 312"
              strokeDashoffset="272"
              fill="none" 
              stroke="#006288" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
          <div className="bg-main-theme w-4 h-4 absolute rounded-full -left-2 top-73"/>
          <div className="absolute z-50 left-52.5 top-65">
            <div className="relative">
              <SoftFrame fill="#cc7e85" bg="#f2f0ef" width={450} height={320} className="absolute top-0 left-0" />
              <div className="z-30 absolute w-120 p-7.5">
                <p 
                  className="font-poiret-one tracking-wide text-4xl font-bold [text-shadow:0.6px_0_currentColor,-0.6px_0_currentColor,0_0.6px_currentColor,0_-0.6px_currentColor] mb-3.5"
                >
                  Dr Sophie Bugnard
                </p>
                <div className="w-100 mb-2">
                  <Separator className="bg-black" />
                </div>
                <ul className={`font-lato font-semibold tracking-wider mb-5 ml-2 mr-2 text-black leading-8 text-xl space-y-2`} >
                  <li>▸<span className="italic">&nbsp;Conseillère en nutrition sur Montpellier</span></li>
                  <li>▸<span className="italic">&nbsp;Spécialiste du rééquilibrage alimentaire des femmes autour de la ménopause</span></li>
                  <li>▸<span className="italic">&nbsp;Docteure en pharmacie</span></li>
                </ul>
                <p className="flex gap-x-2.5 justify-end items-center mr-10 ">
                  <MoveRight color="#006288"/><Link href="/contact" className="text-white font-ysabeau bg-main-theme px-2 py-1 rounded-xl hover:bg-dusty-rose transition-colors duration-100">Qui suis-je ?</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dusty-rose w-4 h-4 absolute rounded-full left-167 top-49"/>

          <div className="relative overflow-hidden w-full h-full">
            <Image 
              src={`/jpg/portrait_Sophie_Bugnard-2.jpg`} 
              alt="Portrait Sophie Bugnard docteure en pharmacie" 
              width={250} 
              height={250} 
              className="absolute z-40 top-1/6 left-16 rounded-full border-2 border-white" 
            />
          </div>

          <svg className="absolute overflow-visible z-50 -top-20 left-167" viewBox="0 0 100 100" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <ellipse 
              cx="100" 
              cy="60" 
              rx="100" 
              ry="50"
              strokeDasharray="205 300"
              strokeDashoffset="-22"
              fill="none" 
              stroke="#cc7e85" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute top-16 left-174 w-fit">
            <p className="text-7xl leading-28 text-main-theme tracking-wider font-square-peg font-bold">Remodeler son alimentation</p>
            <p className="text-7xl text-main-theme ml-16 tracking-wider font-square-peg  font-bold">pour soigner les maux de l'âge</p>
          </div>
        </div>
      </BodyLayout>
    </div>
  );
}
