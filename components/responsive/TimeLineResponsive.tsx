import { GraduationCap } from 'lucide-react';
import { FiBook } from 'react-icons/fi';
import { GiDiploma } from 'react-icons/gi';
import Link from 'next/link';
import {Badge} from '../ui/badge';

type Props = {}

const TimeLineResponsive = (props: Props) => {
  return (
    <section className="ml-7.5 mr-2.5 relative mb-12">
      <div className="w-5 h-96 bg-green-logo rounded-xl mb-20"/>
      <div className="absolute w-10 h-10 bg-white border-2 border-green-logo rounded-full top-0 -left-2.5 flex items-center justify-center">
        <GraduationCap size={30} color="#000000"/>
      </div>
      <div className="absolute w-10 h-10 bg-white border-2 border-green-logo rounded-full top-30 -left-2.5 flex items-center justify-center">
        <GiDiploma size={30} color="#000000"/>
      </div>
      <div className="absolute w-10 h-10 bg-white border-2 border-green-logo rounded-full top-60 -left-2.5 flex items-center justify-center">
        <GiDiploma size={30} color="#000000"/>
      </div>
      <div className="absolute w-10 h-10 bg-white border-2 border-green-logo rounded-full top-90 -left-2.5 flex items-center justify-center">
        <FiBook size={25} color="#000000"/>
      </div>
      <div className={`absolute text-sm duration-200 border-black border-2 px-1.5 pb-1.5 w-72 bg-white rounded-md text-center font-ysabeau left-10 top-0`}>
        <p className="font-bold flex gap-x-1.5 justify-center"><span className="">Doctorat en pharmacie</span></p>
        <p className="">Université Descartes, Paris V - <span className="font-bold font-lato text-xs">2002</span></p>
      </div>
      <div className={`absolute text-sm duration-200 border-black border-2 px-1.5 pb-1.5 w-72 bg-white rounded-md text-center font-ysabeau left-10 top-26`}>
        <p className="font-bold flex gap-x-1.5 justify-center"><span className="">Certification en nutrition et diététique</span></p>
        <p className="">Faculté Libre de Médecines Naturelles et d’Ethnomédecine, Paris 14 - <span className="font-bold font-lato text-xs">2022</span></p>
      </div>
      <div className={`absolute text-sm duration-200 border-black border-2 px-1.5 pb-1.5 w-72 bg-white rounded-md text-center font-ysabeau left-10 top-56`}>
        <p className="font-bold flex gap-x-1.5 justify-center"><span className="">Certification en nutrition et diététique</span></p>
        <p className="">Ecole 5.3 : Nutrition, Santé et Sport, Montpellier - <span className="font-bold font-lato text-xs">2024</span></p>
      </div>
      <div className={`w-72 absolute left-10 top-86 font-ysabeau leading-5 text-center text-sm border-black border-2 px-1.5 py-1.5 rounded-md hover:scale-105 cursor-pointer transition-all duration-200 bg-white`}>
        <Link className="hover:opacity-75" href={`/publications`} >
          <p className="font-bold flex gap-x-1.5 justify-center">
            <span className="">Publication du livre :</span></p> <p><span className="font-bold italic">"Les secrets de la longévité en bonne santé"</span>, éd. Lanore - <b>2024</b>
          </p>
        </Link>
      </div>
    </section>
  )
}

export default TimeLineResponsive 