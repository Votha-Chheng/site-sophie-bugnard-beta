import React from 'react'

type Props = {

}

const TarifsResponsive = (props: Props) => {
  return (
    <main className='medium:hidden block w-full h-full relative px-5'>
      <h2 className='text-2xl text-center my-5 font-ysabeau text-green-logo font-bold'>Tarifs</h2>
      <div className="my-10">
        <section className='bg-green-logo rounded-t-xl p-3.5 text-white font-lato tracking-wide'>
          <h2 className='text-lg text-center mb-2.5 font-bold'>Séance individuelle (1h15)</h2>
          <p className='phone:text-base text-sm text-center font-ysabeau font-normal pb-2 tracking-wide'> 
            Bilan personnalisé pour évaluer vos habitudes, vous apporter des conseils alimentaires adaptés et définir un plan d’actions sur mesure en vue d'un suivi complet.
          </p>
        </section>

        <section className='flex phone:text-lg text-sm'>
          <div className="flex flex-col border-l border-green-logo">
            <div className="p-1.5 flex flex-col border-b border-green-logo grow">
              <div className='self-start font-bold'>Consultation à mon cabinet</div>
              <div className='self-end'>50 €</div>
            </div>
            <div className="p-1.5 flex flex-col border-b border-green-logo grow">
              <div className='self-start font-bold'>Consultation en ligne <i>(rendez-vous en visio ou téléphone, sans déplacement)</i></div>
              <div className='self-end'>45 €</div>
            </div>

            <div className="p-1.5 flex flex-col border-b border-green-logo grow">
              <div className='self-start font-bold'>Consultation à votre domicile <i>(sur Montpellier et agglomération)</i></div>
              <div className='self-end'>80 €</div>
            </div>
          </div>
          <div className="px-2.5 py-1.5 border-x border-b border-green-logo text-xs">
            <p className='mb-1.5'>Cette 1ère consultation est un bilan nutritionnel approfondi et complet qui comprend :</p> 
            <ul className='pl-5 list-disc space-y-1.5'> 
              <li>l'étude de vos habitudes alimentaires et de votre rythme de vie grâce à des questionnaires envoyés en amont.</li>
              <li>l'analyse technique avec le calcul de votre IMC et de votre poids santé, suivie d'une analyse nutritionnelle avec une interprétation de votre carnet alimentaire.</li>
              <li>l'analyse de vos objectifs et de vos besoins en tenant compte de vos antécédents et vos habitudes.</li> 
              <li>la mise en place d’un programme personnalisé d'alimentation grâce à des outils visuels très faciles à suivre.</li>
              <li>des conseils ciblés sur votre mode de vie.</li>
              <li>des fiches conseils envoyées pour mémoriser les recommandations.</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="my-10">
        <section className='bg-blue-logo rounded-t-xl p-3.5 text-white font-lato tracking-wide'>
          <h2 className='text-lg text-center mb-2.5 font-bold'>Consultations de suivi (45min)</h2>
        </section>

        <section className='flex phone:text-lg text-sm'>
          <div className="flex flex-col border-l border-blue-logo">
            <div className="p-1.5 flex flex-col border-b border-blue-logo grow">
              <div className='self-start font-bold'>Consultation à mon cabinet</div>
              <div className='self-end'>50 €</div>
            </div>
            <div className="p-1.5 flex flex-col border-b border-blue-logo grow">
              <div className='self-start font-bold'>Consultation en ligne <i>(rendez-vous en visio ou téléphone, sans déplacement)</i></div>
              <div className='self-end'>50 €</div>
            </div>

            <div className="p-1.5 flex flex-col border-b border-blue-logo grow">
              <div className='self-start font-bold'>Consultation à votre domicile <i>(sur Montpellier et agglomération)</i></div>
              <div className='self-end'>50 €</div>
            </div>
          </div> 
          <div className="px-2.5 py-1.5 border-x border-b border-blue-logo text-xs">
            <p className='mb-1.5'>Ces consultations de suivi ont pour principaux objectifs :</p>
            <ul className='pl-5 list-disc space-y-1.5'>
              <li>d'évaluer les bénéfices apportés et les difficultés rencontrées.</li>
              <li>de réajuster les recommandations si besoin.</li>
              <li>de décrypter les étiquettes alimentaires si besoin.</li> 
            </ul>
          </div>
        </section>
      </div>

      <div className="my-10">
        <section className='bg-brown-logo rounded-t-xl p-3.5 text-white font-lato tracking-wide'>
          <h2 className='text-lg text-center mb-2.5 font-bold'>Programme intensif sur 3 mois</h2>
        </section>

        <section className='flex phone:text-lg text-sm '>
          <div className="flex flex-col border-x border-b border-brown-logo">
            <p className='mb-1.5 font-ysabeau medium:text-xl text-base tracking-wide font-bold self-start py-2.5 px-3.5'>
              Le programme se déroule sur 3 mois avec 1 séance par semaine pour un suivi intensif et progressif. Il s'agira d'adopter de nouvelles habitudes durables et d'atteindre une série de micro-objectifs. Si besoin, un accompagnement quotidien par téléphone (appel ou SMS, Whatsapp…) pourra être mis en place.
            </p>
            <p className='font-ysabeau text-lg self-end pb-2.5 pr-2'>120 <span className='text-base'>€/mois</span></p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default TarifsResponsive