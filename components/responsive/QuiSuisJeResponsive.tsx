import Image from "next/image";
import TimeLineResponsive from "./TimeLineResponsive";
import { Badge } from "../ui/badge";

type Props = {}

const QuiSuisJeResponsive = (props: Props) => {
  return (
    <main className="relative h-auto phone:hidden block py-12">
      <div className="relative mb-5 px-5">
        {/* <FrameRoundCorner width={600} height={425} className="absolute -top-28 -z-10"/> */}
        <p className="bg-white font-ysabeau text-base text-justify mt-7.5 indent-3 leading-6">
          Conseillère en nutrition à Montpellier, <span className="font-bold">spécialisée dans le ré&shy;équilibrage alimentaire des femmes en période de ménopause</span>, j’accompagne celles qui souhaitent perdre du poids ou éviter d’en pren&shy;dre grâce à une alimentation saine, adaptée et person&shy;nalisée. 
        </p>
        {/* <p className="bg-white font-ysabeau text-xl text-justify w-160 mt-1.5 ml-18">
          <span className="font-bold">Forte d'une solide formation en pharmacologie</span>, mon expertise en compléments alimentaires me permet également de proposer des solutions naturelles et sécurisées pour répondre à vos besoins spécifiques.
        </p> */}
      </div>
      <div className="w-56 h-44 border-4 mx-auto relative rounded-lg border-brown-logo overflow-x-hidden mb-7.5">
        <Image src="/jpg/portrait-sophie-bugnard-4.jpg" fill objectFit="cover" alt="Médicaments"/>
      </div>
      <ul className="h-auto border-2 border-blue-logo rounded-2xl bg-white font-ysabeau text-base text-justify px-5 py-3 mx-2.5 mb-12">
        <p>Les avantages de ma double expertise font que :</p>
        {/* <li>▶&nbsp;Je possède une vision globale de la santé. </li> */}
        <li>▶&nbsp;Je suis en capacité de <b>détecter les interactions entre médicaments et compléments alimentaires</b> (certains nutri&shy;ments influencent l’efficacité des traitements).</li>
        <li>▶&nbsp;J’ai un statut reconnu dans le système de santé, et <b>peux me mettre en lien avec votre médecin traitant</b>.</li>
        <li>▶&nbsp;J’ai une approche scientifique rigoureuse. </li>
      </ul>
      <TimeLineResponsive/>
      <section className="flex gap-x-1 ml-0 mr-2.5 mb-10">
        <p className="[writing-mode:vertical-lr] [text-orientation:mixed] rotate-180 font-extrabold font-lato tracking-wide text-3xl text-center">EXP&Eacute;RIENCES</p>
        <div className="flex flex-col items-start gap-y-5 w-115">
          <Badge
            className="px-5 text-sm bg-[#7e9181] cursor-pointer hover:-translate-y-2 transition-transform duration-200 whitespace-normal wrap-break-word w-full text-center"
          >
            Pharmacienne responsable chez LFB Biomédicaments (2002 - 2013)
          </Badge>
          <Badge 
            className="h-auto px-5 text-sm bg-[#6db1bf] cursor-pointer hover:-translate-y-2 transition-transform duration-200 whitespace-normal wrap-break-word w-full text-center"
          >
            Pharmacienne responsable dans la dispensation d'oxygène médical <br/> (2015 - Aujourd'hui)
          </Badge>
          <Badge 
            className="px-5 py-1.5 bg-[#3ba99c] text-sm cursor-pointer hover:-translate-y-2 transition-transform duration-200 whitespace-normal wrap-break-word w-full text-center"
          >
            Conseillère en nutrition libérale (2024 - Aujourd'hui)
          </Badge>
        </div>
      </section>
      <section className="flex gap-x-1.5 mr-2.5 mb-7.5">
        <p className="[writing-mode:vertical-lr] rotate-180 font-extrabold font-lato tracking-wide text-3xl text-center">FORMATION</p>
        <p className="bg-white px-2.5 font-ysabeau text-base text-justify outline-2 outline-brown-logo indent-5 tracking-wider rounded-xl py-2">
          J’ai été formée par le <span className="font-bold">Dr Yann Rougier</span>, spécialiste en nutrition et neuro&shy;sciences appliquées, cofondateur de l’<b>École 5.3</b> et auteur de nombreux ouvrages à succès. Ses enseignements constituent <span className="font-bold">un socle scien&shy;ti&shy;fique et fiable</span>, garantissant des ateliers fondés sur des méthodes sérieuses et éprouvées.
        </p>
      </section>
    </main>
  )
}

export default QuiSuisJeResponsive