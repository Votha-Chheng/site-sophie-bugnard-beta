'use client'

import BodyLayout from "@/components/layouts/BodyLayout";
import Presentation from "@/components/home/Presentation";
import PageTitlePhone from "@/components/responsive/PageTitlePhone";
import PresentationPhone from "@/components/responsive/PresentationPhone";
import SubMainTitle from "@/components/home/SubMainTitle";
import PommeVie from "@/components/svg/PommeVie";
import TitleImage from "@/components/TitleImage";
import TypesConsultation from "@/components/home/TypesConsultation";

export default function Home() {
  return (
    <div>
      <TitleImage 
        title="La ménopause est une nouvelle étape pour se réinventer et prendre soin de soi autrement." 
        imgURL="/png/femme_champ_ble.png" 
        bgPosition="0px -540px" 
        topBracketClassName="-left-2.5 top-0" 
        bottomBracketClassName="-right-5" 
        twWidth="hd:w-250 w-220"
        twFrameWidth="hd:w-257 w-227"
        topCornerClassName="-right-4.5 top-0"
        bottomCornerClassName="-left-3 -bottom-7"
        textSizeTw="text-[45px] hd:text-[52px]"
        bgPositionMedium="0px -275px"
      />
      <PageTitlePhone 
        imgURL="/png/femme_champ_ble.png" 
        bgPosition="0px -90px" 
        title="La ménopause est une nouvelle étape pour se réinventer et prendre soin de soi autrement."
      />
      <BodyLayout className="w-310 hd:w-360 lg:h-189 mx-auto relative py-0 min-h-screen medium:block hidden">
        <Presentation className="top-5 left-0"/>
        <TypesConsultation className="top-78 right-5 z-10"/>  
        <PommeVie height={200} width={500} className="absolute top-80 left-1/2 -translate-x-1/2 -ml-6"/>
        <SubMainTitle className="top-140"/>
      </BodyLayout>
      <PresentationPhone/>
    </div>
  );
}
