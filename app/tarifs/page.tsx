import BodyLayout from '@/components/layouts/BodyLayout'
import Image from 'next/image'

const TarifsPage = () => {
  return (
    <BodyLayout className='min-h-auto w-300 pt-16 pb-36'>
      {/* <div className='absolute top-7.5 -rotate-2 -right-12 w-36 h-24 rounded-tr-full border-t-8 border-r-8 border-mauve-shadow'/>
      <div className='absolute -rotate-2 -left-16 bottom-12 w-36 h-24 rounded-bl-full border-r-transparent border-b-8 border-l-8 border-mauve-shadow'/> */}
      <section>
        <table className='w-full text-left border-separate border-spacing-0 border border-main-theme rounded-t-xl overflow-hidden font-lato table-fixed'>
          <thead className='bg-main-theme text-white'>
            <tr>
              <th colSpan={3} className='pt-5 pb-3 tracking-wide'>
                <h2 className='text-2xl text-center mb-2.5'>Séance individuelle (1h15)</h2>
                <p className='text-lg text-center font-ysabeau tracking-tight font-normal pb-2'> Bilan personnalisé pour évaluer vos habitudes, vous apporter des conseils alimentaires adaptés et définir un plan d’actions sur mesure en vue d'un suivi complet.</p>
              </th>
            </tr>
          </thead>
          <tbody className='bg-white font-ysabeau'>
            <tr className='border-2 border-main-theme h-16'>
              <td className='px-5 py-2 font-lato tracking-wide border w-full h-14 border-main-theme'>
                <div className='flex w-full min-h-full justify-between'>
                  <div className='self-start pt-2.5 font-bold'>Consultation à mon cabinet</div>
                  <div className='self-end pb-2'>70 €</div>
                </div>
              </td>
              <td className='px-5 py-4 font-lato tracking-wide border border-main-theme h-14'>
                <div className='flex gap-x-2 w-full min-h-full justify-between h-16'>
                  <div className='self-start font-bold'>Consultation en ligne <i>(rendez-vous en visio ou téléphone, sans déplacement)</i></div>
                  <div className='self-end min-w-9 '>45 €</div>
                </div>
              </td>
              <td className='px-5 py-4 font-lato tracking-wide border border-main-theme h-14'>
                <div className='flex gap-x-2 w-full min-h-full justify-between h-16'>
                  <div className='self-start font-bold'>Consultation à votre domicile <i>(sur Montpellier et agglomération)</i></div>
                  <div className='self-end min-w-9 '>80 €</div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='px-7.5 py-4 font-lato tracking-wide border border-main-theme pb-10'>
                <p className='mb-1.5'>Cette 1ère consultation est un bilan nutritionnel approfondi et complet qui comprend :</p>
                <ul className='pl-5 list-disc space-y-1.5'>
                  <li>l'étude de vos habitudes alimentaires et de votre rythme de vie grâce à des questionnaires envoyés en amont.</li>
                  <li>l'analyse technique avec le calcul de votre IMC et de votre poids santé, suivie d'une analyse nutritionnelle avec une interprétation de votre carnet alimentaire.</li>
                  <li>l'analyse de vos objectifs et de vos besoins en tenant compte de vos antécédents et vos habitudes.</li> 
                  <li>la mise en place d’un programme personnalisé d'alimentation grâce à des outils visuels très faciles à suivre.</li>
                  <li>des conseils ciblés sur votre mode de vie.</li>
                  <li>des fiches conseils envoyées pour mémoriser les recommandations.</li>
                </ul>
              </td>
            </tr>
          </tbody>
          <thead className='bg-main-theme text-white'>
            <tr>
              <th colSpan={3} className='px-5 pt-5 pb-3 tracking-wide border-t-8 border-black'>
                <h2 className='text-2xl text-center mb-2.5'>Consultations de suivi (45min)</h2>
              </th>
            </tr>
          </thead>
          <tbody className='bg-white font-ysabeau'>
            <tr className='border-2 border-main-theme h-16'>
              <td className='px-5 py-2 font-lato tracking-wide border w-full h-14 border-main-theme'>
                <div className='flex w-full min-h-full justify-between'>
                  <div className='self-start pt-2.5 font-bold'>Consultation à mon cabinet</div>
                  <div className='self-end pb-2'>50 €</div>
                </div>
              </td>
              <td className='px-5 py-4 font-lato tracking-wide border border-main-theme h-14'>
                <div className='flex gap-x-2 w-full min-h-full justify-between h-16'>
                  <div className='self-start font-bold'>Consultation en ligne <i>(rendez-vous en visio ou téléphone, sans déplacement)</i></div>
                  <div className='self-end min-w-9 '>50 €</div>
                </div>
              </td>
              <td className='px-5 py-4 font-lato tracking-wide border border-main-theme h-14'>
                <div className='flex gap-x-2 w-full min-h-full justify-between h-16'>
                  <div className='self-start font-bold'>Consultation à votre domicile <i>(sur Montpellier et agglomération)</i></div>
                  <div className='self-end min-w-9 '>50 €</div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='px-7.5 py-4 font-lato tracking-wide border border-main-theme pb-10'>
                <p className='mb-1.5'>Ces consultations de suivi ont pour principaux objectifs :</p>
                <ul className='pl-5 list-disc space-y-1.5'>
                  <li>d'évaluer les bénéfices apportés et les difficultés rencontrées.</li>
                  <li>de réajuster les recommandations si besoin.</li>
                  <li>de décrypter les étiquettes alimentaires si besoin.</li> 
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        Programme 3 mois : 120€/mois : 1 séance par semaine pour un suivi intensif et progressif pour adopter de nouvelles habitudes durables et atteindre vos objectifs. Si besoin, accompagnement quotidien par téléphone (appel ou sms, whatsapp…) .
      </section>
      <section className='border-mauve-shadow border-2 rounded-bl-xl rounded-tr-xl px-5 pt-4 pb-5 mt-5 bg-white font-lato text-lg flex items-center gap-x-3'>
        <Image src="/svg/info.svg" alt="Info" width={50} height={50}/>
        <p className='italic tracking-wide'>
          La consultation en Nutrition Santé Durable ne constitue pas une prise en charge médicale mais un accompagnement dans une <b>démarche de prévention et d’optimisation du capital santé</b>. <span className='underline underline-offset-4 font-bold'>Seul votre médecin est habilité à réaliser un diagnostic médical</span>.
        </p>
      </section>
    </BodyLayout>
  )
}

export default TarifsPage
