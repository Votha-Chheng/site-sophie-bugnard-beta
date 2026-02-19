'use client'

import BodyLayout from "@/components/layouts/BodyLayout";
import SoftFrame from "@/components/svg/SoftFrame";
import { Separator } from "@/components/ui/separator";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VersionAlt() {
  return (
    <div className="relative w-full py-7.5 px-10">
      <BodyLayout className="">
        <div style={{borderRadius:'50%'}} className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-120 bg-white">
          <div style={{borderRadius:'50%'}} className="relative w-175 h-120">
            <div className="">
              <p className="text-7xl text-main-theme tracking-tight font-manrope mt-34 ml-10 italic font-semibold">Mieux manger,</p>
              <p className="text-[55px] text-main-theme tracking-tight font-manrope font-semibold italic ml-12 mt-4">mieux vivre sa ménopause</p>
              <sub className="ml-16"> ou (remodeler son alimentation pour soigner les maux de l'âge)</sub>
            </div>
          </div>
          <div style={{borderRadius:'50%'}} className="absolute top-0 left-1/2 -translate-x-1/2 w-180 h-120 bg-transparent border-8 border-main-theme mt-5 -ml-5 rotate-0"/>
        </div>
        
        <section className="absolute top-79 left-10 w-full h-full">
          <div className="relative">
            <Image 
              src={`/jpg/portrait_Sophie_Bugnard-2.jpg`} 
              alt="Portrait Sophie Bugnard docteure en pharmacie" 
              width={250} 
              height={250} 
              className="absolute z-30 -top-40 left-0 rounded-full border-2 border-white" 
            />
            <SoftFrame fill="#cc7e85" bg="#f2f0ef" width={450} height={320} className="absolute top-10 left-0 z-40" />
            <div className="z-40 absolute w-120 left-7.5 top-17.5">
              <p 
                className="font-poiret-one tracking-wide text-4xl font-bold [text-shadow:0.6px_0_currentColor,-0.6px_0_currentColor,0_0.6px_currentColor,0_-0.6px_currentColor] mb-3.5"
              >
                Dr Sophie Bugnard
              </p>
              <div className="w-100 mb-2">
                <Separator className="bg-black" />
              </div>
              <ul className={`font-lato font-semibold tracking-wider mb-5 ml-2 mr-2 text-black leading-8 text-xl space-y-2 w-100`} >
                <li>▸<span className="italic">&nbsp;Conseillère en nutrition sur Montpellier</span></li>
                <li>▸<span className="italic">&nbsp;Spécialiste du rééquilibrage alimentaire des femmes autour de la ménopause</span></li>
                <li>▸<span className="italic">&nbsp;Docteure en pharmacie</span></li>
              </ul>
              <p className="flex gap-x-2.5 justify-end items-center  w-98">
                <MoveRight color="#006288"/>
                <Link href="/contact" className="text-white font-ysabeau bg-main-theme px-2 py-1 rounded-xl hover:bg-dusty-rose transition-colors duration-100">
                  Qui suis-je ?
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="bg-white w-36 h-36 rounded-full flex justify-center items-center border-black border-2 absolute left-310 top-80">
          <p className="text-black text-xl text-center font-ysabeau font-bold">Consultation à mon cabinet <span className="text-sm">(rajouter icône</span>)</p>
        </div>
        <div className="bg-white w-36 h-36 rounded-full flex justify-center items-center border-black border-2 absolute left-355 top-95">
          <p className="text-black text-xl text-center font-ysabeau font-bold">Consultation à domicile <span className="text-sm">(rajouter icône</span>)</p>
        </div>
        <div className="bg-white w-36 h-36 rounded-full flex justify-center items-center border-black border-2 absolute left-390 top-120">
          <p className="text-black text-xl text-center font-ysabeau font-bold">Consultation en visio <span className="text-sm">(rajouter icône</span>)</p>
        </div>

      </BodyLayout>
    </div>
  );
}