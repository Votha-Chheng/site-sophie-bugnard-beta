'use client'

import BodyLayout from "@/components/layouts/BodyLayout"
import FrameRoundCorner from "@/components/svg/FrameRoundCorner"
import { Badge } from "@/components/ui/badge"
import TitleImage from "@/components/TitleImage"
import Image from "next/image"
import Link from "next/dist/client/link"
import TimeLine from "@/components/qui-suis-je/TimeLine";
import PageTitlePhone from "@/components/responsive/PageTitlePhone";
import QuiSuisJeResponsive from "@/components/responsive/QuiSuisJeResponsive";
import ApprocheTablet from "@/components/responsive/ApprocheTablet";

const QuiSuisJePage = () => {
  return (
    <div>
      <TitleImage 
        title="Formée par la science, guidée par l'écoute"
        imgURL="/jpg/qui-suis-je-titre.jpg" 
        bgPosition="0px -220px" 
        twWidth="w-160" 
        twFrameWidth="w-160" 
        topBracketClassName="-left-4 -top-2.5" 
        bottomBracketClassName="-right-3 -bottom-2.5"
        topCornerClassName="top-0 right-2.5"
        bottomCornerClassName="-bottom-7.5 -left-3"
      />
      <PageTitlePhone 
        imgURL="/jpg/qui-suis-je-titre.jpg" 
        bgPosition="0px -25px" 
        title="Formée par la science, guidée par l'écoute"
      />
      <QuiSuisJeResponsive/>
      <BodyLayout className="pb-275 phone:block hidden">
        <div className="absolute -translate-x-1/2 left-1/2 top-28">
          <ApprocheTablet/>
          <section className="hidden mt-16 mb-38 justify-between items-start gap-x-5 hd:flex">
            <div className="h-fit border-8 relative rounded-4xl border-brown-logo overflow-hidden">
              <Image src="/jpg/portrait-sophie-bugnard-2.jpeg" width={380} height={400} alt="Sophie Bugnard, docteure en pharmacie, conseillère en nutrition"/>
            </div>
            <article className="flex flex-col gap-y-5">
              <div className="relative min-w-1/3">
                {/* <FrameRoundCorner width={600} height={435} className="absolute -top-28 -z-10"/> */}
                <p className="bg-white font-ysabeau text-xl text-justify indent-3 leading-7 border-2 border-green-logo rounded-2xl px-5 py-3">
                  Conseillère en nutrition à Montpellier, <span className="font-bold">spécialisée dans le ré&shy;équilibrage alimentaire des femmes en période de ménopause</span>, j’accompagne celles qui souhaitent perdre du poids ou éviter d’en pren&shy;dre grâce à une alimentation saine, adaptée et person&shy;nalisée. 
                </p>
                {/* <p className="bg-white font-ysabeau text-xl text-justify w-160 mt-1.5 ml-18">
                  <span className="font-bold">Forte d'une solide formation en pharmacologie</span>, mon expertise en compléments alimentaires me permet également de proposer des solutions naturelles et sécurisées pour répondre à vos besoins spécifiques.
                </p> */}
              </div>
              <div className="min-w-1/3">
                <ul className="border-2 border-blue-logo rounded-2xl bg-white font-ysabeau text-xl text-justify px-5 py-3">
                  <p>Les avantages de ma double expertise font que :</p>
                  {/* <li>▶&nbsp;Je possède une vision globale de la santé. </li> */}
                  <li>▶&nbsp;Je suis en capacité de <b>détecter les interactions entre médicaments et compléments alimentaires</b> (certains nutri&shy;ments influencent l’efficacité des traitements).</li>
                  <li>▶&nbsp;J’ai un statut reconnu dans le système de santé, et <b>peux me mettre en lien avec votre médecin traitant</b>.</li>
                  <li>▶&nbsp;J’ai une approche scientifique rigoureuse. </li>
                </ul>
              </div>
            </article>
          </section>

          <TimeLine/>

          <section className="flex w-full mt-24 mb-10 px-7.5 gap-x-16 items-center">
            <div className="flex gap-x-1">
              <p className="[writing-mode:vertical-lr] [text-orientation:mixed] rotate-180 font-extrabold font-lato tracking-wide text-3xl text-center">EXP&Eacute;RIENCES</p>
              <div className="flex flex-col items-start gap-y-5 w-115">
                <Badge 
                  // onMouseEnter={()=> setHoveredExp(true)} 
                  // onMouseLeave={()=> setHoveredExp(false)} 
                  className="px-5 text-base bg-[#7e9181] cursor-pointer hover:-translate-y-2 transition-transform duration-200 whitespace-normal wrap-break-word w-full text-center"
                >
                  Pharmacienne responsable chez LFB Biomédicaments (2002 - 2013)
                </Badge>
                <Badge 
                  // onMouseEnter={()=> setHoveredExp2(true)} 
                  // onMouseLeave={()=> setHoveredExp2(false)} 
                  className="h-auto px-5 text-base bg-[#6db1bf] cursor-pointer hover:-translate-y-2 transition-transform duration-200 whitespace-normal wrap-break-word w-full text-center"
                >
                  Pharmacienne responsable dans la dispensation d'oxygène médical <br/> (2015 - Aujourd'hui)
                </Badge>
                <Badge 
                  // onMouseEnter={()=> setHoveredExp3(true)} 
                  // onMouseLeave={()=> setHoveredExp3(false)}  
                  className="px-5 py-1.5 bg-[#3ba99c] text-base cursor-pointer hover:-translate-y-2 transition-transform duration-200 whitespace-normal wrap-break-word w-full text-center"
                >
                  Conseillère en nutrition libérale (2024 - Aujourd'hui)
                </Badge>
              </div>
            </div>

            <div className="flex gap-x-1.5 min-w-100">
              <p className="[writing-mode:vertical-lr] rotate-180 font-extrabold font-lato tracking-wide text-3xl text-center">FORMATION</p>
              <p className="bg-white px-7.5 font-ysabeau text-xl text-justify outline-2 outline-brown-logo indent-5 tracking-wider rounded-xl pt-7.5">
                J’ai été formée par le <span className="font-bold">Dr Yann Rougier</span>, spécialiste en nutrition et neuro&shy;sciences appliquées, cofondateur de l’<b>École 5.3</b> et auteur de nombreux ouvrages à succès. Ses enseignements constituent <span className="font-bold">un socle scien&shy;ti&shy;fique et fiable</span>, garantissant des ateliers fondés sur des méthodes sérieuses et éprouvées.
              </p>
            </div>
          </section>
        </div>
      </BodyLayout>

    </div>
  )
}

export default QuiSuisJePage
