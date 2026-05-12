'use client'

import BodyLayout from "@/components/layouts/BodyLayout";
import Presentation from "@/components/Presentation";
import SubMainTitle from "@/components/SubMainTitle";
import PommeVie from "@/components/svg/PommeVie";
import TitleImage from "@/components/TitleImage";
import TypesConsultation from "@/components/TypesConsultation";

export default function Home() {
  return (
    <div>
      <TitleImage 
        title="La ménopause est une nouvelle étape pour se réinventer et prendre soin de soi autrement." 
        imgURL="/png/femme_champ_ble.png" 
        bgPosition="0px -540px" 
        topBracketClassName="-left-2.5 top-0" 
        bottomBracketClassName="-right-5" 
        twWidth="w-250"
        twFrameWidth="w-257"
        topCornerClassName="-right-4.5 top-0"
        bottomCornerClassName="-left-3 -bottom-7"
        textSizeTw="text-[52px]"
      />
      <BodyLayout className="w-360 lg:h-189 mx-auto relative py-0 min-h-screen">
        <Presentation className="-top-3.5 left-0"/>
        <TypesConsultation className="top-60 right-5 z-10"/>  
        <PommeVie height={200} width={500} className="absolute top-60 left-1/2 -translate-x-1/2 -ml-6"/>
        <SubMainTitle className="top-120"/>
      </BodyLayout>
    </div>
  );
}
