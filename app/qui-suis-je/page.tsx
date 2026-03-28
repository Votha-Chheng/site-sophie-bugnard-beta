'use client'

import BodyLayout from "@/components/layouts/BodyLayout"
import { Badge } from "@/components/ui/badge"
import PageTitle from "@/components/ui/PageTitle"
import { useState } from "react"

const QuiSuisJePage = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered2, setHovered2] = useState<boolean>(false)
  const [hovered3, setHovered3] = useState<boolean>(false)
  const [hoveredExp, setHoveredExp] = useState<boolean>(false)
  const [hoveredExp2, setHoveredExp2] = useState<boolean>(false)
  const [hoveredExp3, setHoveredExp3] = useState<boolean>(false)


  return (
    <BodyLayout className="w-360 mx-auto min-h-screen relative">
      <PageTitle className="-translate-x-1/2 left-1/2 top-16">
        <div className="w-fit">
          <p className="z-40 text-5xl tracking-tight leading-24 font-bold italic">
            Formée par la science,
          </p>
          <p className="z-40 text-5xl tracking-tight leading-24 ml-2 font-bold italic">
            guidée par l'écoute.
          </p>
        </div>
      </PageTitle>
      <section className="absolute -translate-x-1/2 left-1/2 top-115">
        <div className="relative w-360 h-10">
          <div
            className={` ${hoveredExp ? "opacity-100" : "opacity-0"} absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-97 -top-5 h-10 w-10 rounded-full bg-main-theme mt-2.5 translate-x-1/2`}
          >
            <p className={` ${hoveredExp ? "opacity-100" : "opacity-0"} transition-opacity duration-300 font-ysabeau text-lg font-boldabsolute -top-7 absolute font-bold left-1`}>2013</p>
          </div>
          <p className={` ${hoveredExp ? "opacity-100" : "opacity-0"} transition-opacity duration-300 absolute bg-[#7e9181] tracking-wider text-white px-5 py-2 top-5 left-4.5 w-103.5 text-center font-lato font-semibold`}>
            Pharmacienne responsable chez OLFB Biomédicaments
          </p> 

          <div
            className={` ${hoveredExp2 ? "opacity-100" : "opacity-0"} absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-116 -top-5 h-10 w-10 rounded-full bg-main-theme mt-2.5 translate-x-1/2`}
          >
            <p className={`${hoveredExp2 ? "opacity-100" : "opacity-0"} transition-opacity duration-300 font-ysabeau text-lg font-boldabsolute -top-7 absolute font-bold left-1`}>2015</p>
          </div>
          <p className={`${hoveredExp2 ? "opacity-100" : "opacity-0"} transition-opacity duration-300 absolute bg-[#6db1bf] text-white tracking-wider px-5 py-2 top-5 -right-0.5 w-235 text-center font-lato font-semibold`}>
            Pharmacienne responsable dans la dispensation d'oxygène médical (BPDOUM)
          </p> 
          <p className={`${hoveredExp3 ? "opacity-100" : "opacity-0"} transition-opacity duration-300 absolute bg-[#3ba99c] text-white px-5 py-2 top-5 -right-0.5 w-71 text-center font-lato font-semibold tracking-wide`}>
            Conseillère en nutrition
          </p>

          <div className="absolute left-5 -top-30 w-fit -translate-x-1/2 font-ysabeau leading-5">
            <div className="relative ml-3 w-48">
              <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 pb-1.5 bg-white rounded-md text-center invisible`}>
                <p className="font-bold">Doctorat en pharmacie</p>
                <p className="">Université Descartes - Paris V</p>
              </div>
              <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 bg-white rounded-md absolute bottom-0 overflow-hidden text-center ${hovered ? "h-full": "h-8"}`}>
                <p className="font-bold">Doctorat en pharmacie</p>
                <p className="">Université Descartes - Paris V</p>
              </div>
            </div>
            <p className="text-center text-lg font-bold">2002</p>
          </div>
          <div
            onMouseEnter={()=> setHovered(true)} 
            onMouseLeave={()=> setHovered(false)} 
            className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 -left-5 -top-5 h-10 w-10 rounded-full bg-main-theme mt-2.5 translate-x-1/2"
          />

          <div className="absolute left-228 -top-36 w-fit -translate-x-1/2 font-ysabeau leading-5">
            <div className="relative ml-3 w-52">
              <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 pb-1.5 bg-white rounded-md text-center invisible`}>
                <p className="font-bold">Certificat en naturopathie</p>
                <p className="">Faculté Libre de Médecines Naturelles et d’Ethnomédecine - Paris 14</p>
              </div>
              <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 bg-white rounded-md absolute bottom-0 overflow-hidden text-center ${hovered2 ? "h-full": "h-8"}`}>
                <p className="font-bold">Certificat en naturopathie</p>
                <p className="">Faculté Libre de Médecines Naturelles et d’Ethno&shy;médecine - Paris 14</p>
              </div>
            </div>
            <p className="text-center text-lg font-bold">2022</p>
          </div>
          <div 
            onMouseEnter={()=> setHovered2(true)} 
            onMouseLeave={()=> setHovered2(false)} 
            className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-218 -top-5 h-10 w-10 rounded-full bg-main-theme mt-2.5 translate-x-1/2"
          />

          <div className="absolute left-290 -top-42 w-fit -translate-x-1/2 font-ysabeau leading-5">
            <div className="relative ml-3 w-48">
              <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 pb-1.5 bg-white rounded-md text-center invisible`}>
                <p className="font-bold">Certification en nutrition et diététique</p>
                <p className="">Ecole 5.3 : Nutrition, Santé et Sport - Montpellier</p>
              </div>
              <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 bg-white rounded-md absolute bottom-0 overflow-hidden text-center ${hovered3 ? "h-full": "h-14"}`}>
                <p className="font-bold">Certification en nutrition et diététique</p>
                <p className="">Ecole 5.3 : Nutrition, Santé et Sport - Montpellier</p>
              </div>
            </div>
            <p className="text-center text-lg font-bold">2024</p>
          </div>
          <div 
            onMouseEnter={()=> setHovered3(true)} 
            onMouseLeave={()=> setHovered3(false)} 
            className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-280 -top-5 h-10 w-10 rounded-full bg-main-theme mt-2.5 translate-x-1/2"
          />

          <div className="absolute left-355 -top-12">
            <p className="-rotate-z-45 text-lg font-bold -translate-y-5 -translate-x-1 font-ysabeau">Aujourd'hui</p>
            <div className="h-10 w-10 rounded-full bg-main-theme mt-2.5"/>
          </div>
          <div className="w-full h-5 bg-main-theme rounded-xl" />
        </div>



        {/*********************** Badges *****************/}
        <div className="mt-14 mb-10">
          <div className="flex flex-col items-start gap-y-3">
            <Badge 
              onMouseEnter={()=> setHoveredExp(true)} 
              onMouseLeave={()=> setHoveredExp(false)} 
              className="whitespace-normal text-lg px-5 bg-[#7e9181] cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              Pharmacienne responsable chez OLFB Biomédicaments (2002 - 2013)
            </Badge>
            <Badge 
              onMouseEnter={()=> setHoveredExp2(true)} 
              onMouseLeave={()=> setHoveredExp2(false)} 
              className=" whitespace-normal wrap-break-word h-auto text-lg px-5 bg-[#6db1bf] cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              Pharmacienne responsable dans la dispensation d'oxygène médical (BPDOUM) (2015 - Aujourd'hui)
            </Badge>
            <Badge 
              onMouseEnter={()=> setHoveredExp3(true)} 
              onMouseLeave={()=> setHoveredExp3(false)}  
              className="text-lg px-5 bg-[#3ba99c] cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              Conseillère en nutrition libérale (2024 - Aujourd'hui)
            </Badge>
          </div>
        </div>
        <p className="bg-white p-2.5">
          Sophie Bugnard, Docteur en Pharmacie et conseillère en nutrition à Montpellier, est spécialisée dans le rééquilibrage alimentaire des femmes autour de la ménopause. J’accompagne celles qui souhaitent perdre du poids ou éviter d’en prendre grâce à une alimentation saine, adaptée et personnalisée. Mon expertise en compléments alimentaires me permet également de proposer des solutions naturelles et sécurisées pour répondre à vos besoins spécifiques. Flexible dans mon accompagnement, je peux me déplacer à domicile et assurer un suivi quotidien à distance via WhatsApp, SMS ou téléphone, afin de vous aider à retrouver bien-être, énergie et confiance en vous.
        </p>
      </section>
    </BodyLayout>
  )
}

export default QuiSuisJePage
