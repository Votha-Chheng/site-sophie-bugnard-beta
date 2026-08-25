import { GraduationCap, BookOpen } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaBook } from 'react-icons/fa6';
import { FiBook } from 'react-icons/fi';
import { GiDiploma } from 'react-icons/gi';

type Props = {}

const TimeLine = (props: Props) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered2, setHovered2] = useState<boolean>(false)
  const [hovered3, setHovered3] = useState<boolean>(false)
  
  return (
    <section>
      <div className="relative w-360 h-10">
        {/* <div
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
        </p> */}

        <div className="absolute left-25 -top-25 w-fit -translate-x-1/2 font-ysabeau leading-5">
          <div className="relative ml-3 w-60">
            <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 pb-1.5 bg-white rounded-md text-center invisible`}>
              <p className="font-bold flex justify-center gap-x-1.5">Doctorat en pharmacie</p>
              <p className="">Université Descartes - Paris V - <span className="font-bold font-lato text-xs">2002</span></p>
            </div>
            <div 
              className={`text-base transition-all duration-200 border-black border-2 px-1.5 bg-white rounded-md absolute bottom-0 overflow-hidden text-center cursor-pointer ${hovered ? "h-full": "h-8"}`}
              onMouseEnter={()=> setHovered(true)} 
              onMouseLeave={()=> setHovered(false)} 
            >
              <p className="font-bold flex gap-x-1.5 justify-center"><span className="">Doctorat en pharmacie</span></p>
              <p className="">Université Descartes, Paris V - <span className="font-bold font-lato text-xs">2002</span></p>
            </div>
          </div>
        </div>
        {/* <div
          onMouseEnter={()=> setHovered(true)} 
          onMouseLeave={()=> setHovered(false)} 
          className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-15 -top-5 h-10 w-10 rounded-full bg-green-logo mt-2.5 translate-x-1/2"
        /> */}
        <div
          onMouseEnter={()=> setHovered(true)} 
          onMouseLeave={()=> setHovered(false)} 
          className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-15 -top-5 h-10 w-10 rounded-full border-2 border-green-logo bg-white mt-2.5 translate-x-1/2 flex items-center justify-center"
        >
          <GraduationCap size={30} color="#000000"/>
        </div>

        <div className="absolute left-112 -top-31 w-fit -translate-x-1/2 font-ysabeau leading-5">
          <div className="relative ml-3 w-64">
            <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 pb-1.5 bg-white rounded-md text-center invisible`}>
              <p className="font-bold flex gap-x-1.5 justify-center"><span className="">Certificat en naturopathie</span></p>
              <p className="">Faculté Libre de Médecines Naturelles et d’Ethnomédecine, Paris 14 - <span className="font-bold font-lato text-xs">2022</span></p> 
            </div>
            <div 
              className={`text-base transition-all duration-200 border-black border-2 px-1.5 bg-white rounded-md absolute bottom-0 overflow-hidden text-center cursor-pointer ${hovered2 ? "h-full": "h-8"}`}
              onMouseEnter={()=> setHovered2(true)} 
              onMouseLeave={()=> setHovered2(false)} 
            >
              <p className="font-bold flex gap-x-1.5 justify-center"><span className="">Certificat en naturopathie</span></p>
              <p className="">Faculté Libre de Médecines Naturelles et d’Ethnomédecine, Paris 14 - <span className="font-bold font-lato text-xs">2022</span></p> 
            </div>
          </div>
        </div>
        <div 
          onMouseEnter={()=> setHovered2(true)} 
          onMouseLeave={()=> setHovered2(false)} 
          className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-104 -top-5 h-10 w-10 rounded-full border-2 border-green-logo bg-white mt-2.5 translate-x-1/2 flex items-center justify-center"
        >
          <GiDiploma size={30} color="#000000"/>
        </div>

        <div className="absolute left-210 -top-25 w-fit -translate-x-1/2 font-ysabeau leading-5">
          <div className="relative ml-3 w-82">
            <div className={`text-base transition-all duration-200 border-black border-2 px-1.5 pb-1.5 bg-white rounded-md text-center invisible`}>
              <p className="font-bold flex gap-x-1.5 justify-center"><span className="">Certification en nutrition et diététique</span></p>
              <p className="">Ecole 5.3 : Nutrition, Santé et Sport, Montpellier - <span className="font-bold font-lato text-xs">2024</span></p>
            </div>
            <div 
              className={`text-base transition-all duration-200 border-black border-2 px-1.5 bg-white rounded-md absolute bottom-0 overflow-hidden text-center cursor-pointer ${hovered3 ? "h-full": "h-8"}`}
              onMouseEnter={()=> setHovered3(true)} 
              onMouseLeave={()=> setHovered3(false)} 
            >
              <p className="font-bold flex gap-x-1.5 justify-center"><span className="">Certification en nutrition et diététique</span></p>
              <p className="">Ecole 5.3 : Nutrition, Santé et Sport, Montpellier - <span className="font-bold font-lato text-xs">2024</span></p>
            </div>
          </div>
        </div>
        <div 
          onMouseEnter={()=> setHovered3(true)} 
          onMouseLeave={()=> setHovered3(false)} 
          className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-200 -top-5 h-10 w-10 rounded-full border-2 border-green-logo bg-white mt-2.5 translate-x-1/2 flex items-center justify-center"
        >
          <GiDiploma size={30} color="#000000"/>
        </div>
        <div 
          className={`
            ${/*(hoveredExp3 || hoveredExp2) ? "mt-8 w-60" : "w-48 mt-0"*/""}
            absolute left-302 top-10 -translate-x-1/2 font-ysabeau leading-5 text-center border-black border-2 px-1.5 py-1.5 rounded-md hover:scale-105 cursor-pointer transition-all duration-200 bg-white`}
        >
          <Link className="hover:opacity-75" href={`/publications`} >
          <p className="font-bold flex gap-x-1.5 justify-center"><span className="">Publication du livre :</span></p> <p><span className="font-bold">"Les secrets de la longévité en bonne santé"</span>, éd. Lanore - <b>2024</b></p></Link>
        </div>
        <div 
          className="absolute cursor-pointer hover:scale-110 transition-transform duration-200 z-20 left-292 -top-5 h-10 w-10 rounded-full border-2 border-green-logo bg-white mt-2.5 translate-x-1/2 flex items-center justify-center"
        >
          <FiBook size={25} color="#000000"/>
        </div>

        <div className="absolute left-355 -top-12">
          {/* <p className="-rotate-z-45 text-lg font-bold -translate-y-5 -translate-x-1 font-ysabeau">Aujourd'hui</p> */}
          <div className="h-10 w-10 bg-green-logo mt-9.5" style={{ clipPath: "polygon(100% 47%, 0 0, 0 100%)"}} />
        </div>
        <div className="w-full h-5 bg-green-logo rounded-xl static" />
      </div>            
    </section>
  )
}

export default TimeLine