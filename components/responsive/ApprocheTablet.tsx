import Image from 'next/image';
import React from 'react'

type Props = {}

const ApprocheTablet = (props: Props) => {
  return (
    <div className='medium:block hidden hd:hidden relative w-300 h-275 mx-auto'>
      <section className="flex mt-16 mb-38 justify-between items-start gap-x-5">
        <div className="h-fit border-8 relative rounded-4xl border-brown-logo overflow-hidden">
          <Image src="/jpg/portrait-sophie-bugnard-2.jpeg" width={488} height={400} alt="Sophie Bugnard, docteure en pharmacie, conseillère en nutrition"/>
        </div>
        <article className="flex flex-col gap-y-5 min-w-3/5">
          <div className="relative">
            {/* <FrameRoundCorner width={600} height={435} className="absolute -top-28 -z-10"/> */}
            <p className="bg-white font-ysabeau text-xl text-justify indent-3 leading-7 border-2 border-green-logo rounded-2xl px-5 py-3">
              Conseillère en nutrition à Montpellier, <span className="font-bold">spécialisée dans le ré&shy;équilibrage alimentaire des femmes en période de ménopause</span>, j’accompagne celles qui souhaitent perdre du poids ou éviter d’en pren&shy;dre grâce à une alimentation saine, adaptée et person&shy;nalisée. 
            </p>
            {/* <p className="bg-white font-ysabeau text-xl text-justify w-160 mt-1.5 ml-18">
              <span className="font-bold">Forte d'une solide formation en pharmacologie</span>, mon expertise en compléments alimentaires me permet également de proposer des solutions naturelles et sécurisées pour répondre à vos besoins spécifiques.
            </p> */}
          </div>

          <ul className="border-2 border-blue-logo rounded-2xl bg-white font-ysabeau text-xl text-justify px-5 py-3">
            <p>Les avantages de ma double expertise font que :</p>
            {/* <li>▶&nbsp;Je possède une vision globale de la santé. </li> */}
            <li>▶&nbsp;Je suis en capacité de <b>détecter les interactions entre médicaments et compléments alimentaires</b> (certains nutri&shy;ments influencent l’efficacité des traitements).</li>
            <li>▶&nbsp;J’ai un statut reconnu dans le système de santé, et <b>peux me mettre en lien avec votre médecin traitant</b>.</li>
            <li>▶&nbsp;J’ai une approche scientifique rigoureuse. </li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default ApprocheTablet