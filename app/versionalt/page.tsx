'use client'

import BodyLayout from "@/components/layouts/BodyLayout";
import MainTitle from "@/components/MainTitle";
import Presentation from "@/components/Presentation";
import SubMainTitle from "@/components/SubMainTitle";
import PommeVie from "@/components/svg/PommeVie";
import TypesConsultation from "@/components/TypesConsultation";

export default function Home() {
  return (
    <div className="relative w-full py-12">
      <BodyLayout className="w-360 lg:h-189 mx-auto relative">
        <Presentation className="top-6 left-0"/>
        <MainTitle className="-translate-x-1/2 left-1/2 top-0 "/>
        <TypesConsultation className="top-80 right-5 z-10"/>  
        <PommeVie height={200} width={500} className="absolute top-82 left-1/2 -translate-x-1/2 -ml-6"/>
        <SubMainTitle className="top-140"/>
      </BodyLayout>
    </div>
  );
}
