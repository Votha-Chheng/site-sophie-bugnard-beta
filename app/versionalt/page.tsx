'use client'

import BodyLayout from "@/components/layouts/BodyLayout";
import MainTitle from "@/components/MainTitle";
import Presentation from "@/components/Presentation";
import SubMainTitle from "@/components/SubMainTitle";
import PommeVie from "@/components/svg/PommeVie";
import TypesConsultation from "@/components/TypesConsultation";
import Link from "next/link";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Home() {
  return (
    <div className="relative w-full py-12">
      <BodyLayout className="w-360 lg:h-189 mx-auto relative">
        <Presentation className="top-0 left-0"/>
        <MainTitle className="-translate-x-1/2 left-1/2 top-0 "/>
        <TypesConsultation className="top-72 right-2 z-10"/>  
        <PommeVie height={220} width={550} className="absolute top-72 left-1/2 -translate-x-1/2 -ml-4"/>
        <SubMainTitle className="top-135"/>
          {/* <div className="bg-main-theme w-4 h-4 absolute rounded-full left-163 top-64.5"/>
          <svg className="absolute overflow-visible z-50 -top-38 left-164" viewBox="0 0 100 100" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <ellipse 
              cx="100" 
              cy="60" 
              rx="125" 
              ry="75"
              strokeDasharray="205 450"
              strokeDashoffset="-56"
              fill="none" 
              stroke="#006288" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg> */}
        {/* <section>
          <div className="bg-sea-green w-4 h-4 absolute rounded-full left-363 top-64"/>
          <svg className="absolute overflow-visible z-50 top-45 left-277" viewBox="0 0 100 100" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <ellipse 
              cx="100" 
              cy="60" 
              rx="40" 
              ry="30"
              strokeDasharray="150 100"
              strokeDashoffset="-180"
              fill="none" 
              stroke="#388659" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg>
        </section> */}
      </BodyLayout>
    </div>
  );
}
