'use client'

import BodyLayout from "@/components/layouts/BodyLayout"
import FrameRoundCorner from "@/components/svg/FrameRoundCorner"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import TitleImage from "@/components/TitleImage"
import Image from "next/image"

const QuiSuisJePage = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered2, setHovered2] = useState<boolean>(false)
  const [hovered3, setHovered3] = useState<boolean>(false)
  const [hoveredExp, setHoveredExp] = useState<boolean>(false)
  const [hoveredExp2, setHoveredExp2] = useState<boolean>(false)
  const [hoveredExp3, setHoveredExp3] = useState<boolean>(false)


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
      <BodyLayout className="pb-275">
        <div className="absolute -translate-x-1/2 left-1/2 top-28">
          <section className="flex mt-16 mb-38 justify-between">
            <div className="relative mb-5 min-w-180 -translate-x-20">
              <FrameRoundCorner width={810} height={435} className="absolute -top-8 -z-10"/>
              <p className="bg-white font-ysabeau text-xl text-justify w-145 mt-3 ml-26 indent-3">
                Conseillère en nutrition à Montpellier, <span className="font-bold">spécialisée dans le ré&shy;équilibrage alimentaire des femmes autour de la ménopause</span>, j’accompagne celles qui souhaitent perdre du poids ou éviter d’en prendre grâce à une alimentation saine, adaptée et personnalisée. 
              </p>
              <p className="bg-white font-ysabeau text-xl text-justify w-160 mt-1.5 ml-18">
                <span className="font-bold">Forte d'une solide formation en pharmacologie</span>, mon expertise en compléments alimentaires me permet également de proposer des solutions naturelles et sécurisées pour répondre à vos besoins spécifiques.
              </p>
            </div>
            <div className="flex w-200 gap-x-1.5 -translate-x-16 h-auto">
              <div className="min-w-70 h-auto border-8 relative rounded-4xl border-brown-logo overflow-x-hidden">
                <Image src="/jpg/portrait-sophie-bugnard-4.jpg" fill objectFit="cover" alt="Médicaments"/>
              </div>
              <ul className="min-w-135 h-auto border-2 border-blue-logo rounded-2xl bg-white font-ysabeau text-xl text-justify px-5 py-3">
                <p>Les avantages de ma double expertise font que :</p>
                {/* <li>▶&nbsp;Je possède une vision globale de la santé. </li> */}
                <li>▶&nbsp;Je suis en capacité de <b>détecter les interactions entre médicaments et compléments alimentaires</b> (certains nutri&shy;ments influencent l’efficacité des traitements).</li>
                <li>▶&nbsp;J’ai un statut reconnu dans le système de santé, et <b>peux me mettre en lien avec votre médecin traitant</b>.</li>
                <li>▶&nbsp;J’ai une approche scientifique rigoureuse. </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="relative w-360 h-10">
              <div
                className={` ${hoveredExp ? "opacity-100" : "opacity-0"} absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-103 -top-5 h-10 w-10 rounded-full bg-green-logo mt-2.5 translate-x-1/2`}
              >
                <p className={` ${hoveredExp ? "opacity-100" : "opacity-0"} transition-opacity duration-300 font-ysabeau text-lg font-boldabsolute -top-7 absolute font-bold left-1`}>2013</p>
              </div>
              <p className={` ${hoveredExp ? "opacity-100" : "opacity-0"} tracking-wide italic transition-opacity duration-300 absolute bg-[#7e9181] text-white px-5 py-2 rounded-md top-5 left-4.5 w-109 text-center font-lato font-semibold`}>
                Pharmacienne responsable chez OLFB Biomédicaments
              </p> 

              <div
                className={` ${hoveredExp2 ? "opacity-100" : "opacity-0"} absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-116 -top-5 h-10 w-10 rounded-full bg-green-logo mt-2.5 translate-x-1/2`}
              >
                <p className={`${hoveredExp2 ? "opacity-100" : "opacity-0"} transition-opacity duration-300 font-ysabeau text-lg font-boldabsolute -top-7 absolute font-bold left-1`}>2015</p>
              </div>
              <p className={`${hoveredExp2 ? "opacity-100" : "opacity-0"} italic transition-opacity duration-300 absolute bg-[#6db1bf] text-white tracking-widest px-5 py-2 rounded-md top-5 -right-0.5 w-235 text-center font-lato font-semibold`}>
                Pharmacienne responsable dans la dispensation d'oxygène médical (BPDOUM)
              </p> 
              <p 
                className={
                  `${hoveredExp3 ? "opacity-100" : "opacity-0"} 
                  tracking-wider transition-opacity italic duration-300 absolute bg-[#3ba99c] text-white px-5 py-2 rounded-md top-5 -right-0.5 w-71 text-center font-lato font-semibold`
                }
              >
                Conseillère en nutrition
              </p>

              <div className="absolute left-5 -top-30 w-fit -translate-x-1/2 font-ysabeau leading-5">
                <div className="relative ml-3 w-48">
                  <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 pb-1.5 bg-white rounded-md text-center invisible`}>
                    <p className="font-bold">Doctorat en pharmacie</p>
                    <p className="">Université Descartes - Paris V</p>
                  </div>
                  <div 
                    className={`text-base transition-all duration-200 border-black border-2 px-1.5 bg-white rounded-md absolute bottom-0 overflow-hidden text-center cursor-pointer ${hovered ? "h-full": "h-8"}`}
                    onMouseEnter={()=> setHovered(true)} 
                    onMouseLeave={()=> setHovered(false)} 
                  >
                    <p className="font-bold">Doctorat en pharmacie</p>
                    <p className="">Université Descartes - Paris V</p>
                  </div>
                </div>
                <p className="text-center text-lg font-bold">2002</p>
              </div>
              <div
                onMouseEnter={()=> setHovered(true)} 
                onMouseLeave={()=> setHovered(false)} 
                className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 -left-5 -top-5 h-10 w-10 rounded-full bg-green-logo mt-2.5 translate-x-1/2"
              />

              <div className="absolute left-228 -top-36 w-fit -translate-x-1/2 font-ysabeau leading-5">
                <div className="relative ml-3 w-52">
                  <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 pb-1.5 bg-white rounded-md text-center invisible`}>
                    <p className="font-bold">Certificat en naturopathie</p>
                    <p className="">Faculté Libre de Médecines Naturelles et d’Ethnomédecine - Paris 14</p>
                  </div>
                  <div 
                    className={`text-base transition-all duration-200 border-black border-2 px-1.5 bg-white rounded-md absolute bottom-0 overflow-hidden text-center cursor-pointer ${hovered2 ? "h-full": "h-8"}`}
                    onMouseEnter={()=> setHovered2(true)} 
                    onMouseLeave={()=> setHovered2(false)} 
                  >
                    <p className="font-bold">Certificat en naturopathie</p>
                    <p className="">Faculté Libre de Médecines Naturelles et d’Ethno&shy;médecine - Paris 14</p>
                  </div>
                </div>
                <p className="text-center text-lg font-bold">2022</p>
              </div>
              <div 
                onMouseEnter={()=> setHovered2(true)} 
                onMouseLeave={()=> setHovered2(false)} 
                className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-218 -top-5 h-10 w-10 rounded-full bg-green-logo mt-2.5 translate-x-1/2"
              />

              <div className="absolute left-290 -top-36 w-fit -translate-x-1/2 font-ysabeau leading-5">
                <div className="relative ml-3 w-50">
                  <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 pb-1.5 bg-white rounded-md text-center invisible`}>
                    <p className="font-bold">Certification en nutrition et diététique</p>
                    <p className="">Ecole 5.3 : Nutrition, Santé et Sport - Montpellier</p>
                  </div>
                  <div 
                    className={`text-base transition-all duration-200 border-black border-2 px-1.5 bg-white rounded-md absolute bottom-0 overflow-hidden text-center cursor-pointer ${hovered3 ? "h-full": "h-14"}`}
                    onMouseEnter={()=> setHovered3(true)} 
                    onMouseLeave={()=> setHovered3(false)} 
                  >
                    <p className="font-bold">Certification en nutrition et diététique</p>
                    <p className="">Ecole 5.3 : Nutrition, Santé et Sport - Montpellier</p>
                  </div>
                </div>
                <p className="text-center text-lg font-bold">2024</p>
              </div>
              <div 
                onMouseEnter={()=> setHovered3(true)} 
                onMouseLeave={()=> setHovered3(false)} 
                className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-280 -top-5 h-10 w-10 rounded-full bg-green-logo mt-2.5 translate-x-1/2"
              />

              <div className="absolute left-355 -top-12">
                <p className="-rotate-z-45 text-lg font-bold -translate-y-5 -translate-x-1 font-ysabeau">Aujourd'hui</p>
                <div className="h-10 w-10 rounded-full bg-green-logo mt-2.5"/>
              </div>
              <div className="w-full h-5 bg-green-logo rounded-xl" />
            </div>

            {/*********************** Badges *****************/}
            <article className="flex w-full mt-12 mb-10 px-7.5 gap-x-16 items-center">
              <div className="flex gap-x-1">
                <p className="[writing-mode:vertical-lr] [text-orientation:mixed] rotate-180 font-extrabold font-lato tracking-wide text-3xl text-center">EXP&Eacute;RIENCES</p>
                <div className="flex flex-col items-start gap-y-5 w-115">
                  <Badge 
                    onMouseEnter={()=> setHoveredExp(true)} 
                    onMouseLeave={()=> setHoveredExp(false)} 
                    className="px-5 text-base bg-[#7e9181] cursor-pointer hover:-translate-y-2 transition-transform duration-200 whitespace-normal wrap-break-word w-full text-center"
                  >
                    Pharmacienne responsable chez OLFB Biomédicaments (2002 - 2013)
                  </Badge>
                  <Badge 
                    onMouseEnter={()=> setHoveredExp2(true)} 
                    onMouseLeave={()=> setHoveredExp2(false)} 
                    className="h-auto px-5 text-base bg-[#6db1bf] cursor-pointer hover:-translate-y-2 transition-transform duration-200 whitespace-normal wrap-break-word w-full text-center"
                  >
                    Pharmacienne responsable dans la dispensation d'oxygène médical <br/> (2015 - Aujourd'hui)
                  </Badge>
                  <Badge 
                    onMouseEnter={()=> setHoveredExp3(true)} 
                    onMouseLeave={()=> setHoveredExp3(false)}  
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
            </article>
          </section>
        </div>
      </BodyLayout>

    </div>
  )
}

export default QuiSuisJePage
