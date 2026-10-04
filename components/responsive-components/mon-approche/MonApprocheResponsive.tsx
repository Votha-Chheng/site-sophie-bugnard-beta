import Image from "next/image";

type Props = {

}

const MonApprocheResponsive = (props: Props) => {
  return (
    <main className='block hd:hidden medium:my-26 my-16'>
      <section>
        <div className="relative px-2 w-[95%] mx-auto">
          <div className="w-full h-full bg-linear-to-b from-transparent via-white/5 to-white absolute" />
          <Image 
            src={`/jpg/food-problems-small.jpg`} 
            alt="Illustration de l'approche de Sophie Bugnard" 
            width={500} 
            height={500} 
            className="rounded-xl mx-auto" 
          />
        </div>
        <div className="w-[96%] bg-brown-logo py-3.5 text-gray-100 self-center rounded-md mb-10 mx-auto -translate-y-7.5">
          <ul className="text-base phone:text-lg small:text-2xl phone:pl-5 pl-0 mx-7.5 font-ysabeau list-decimal space-y-2 tracking-wide phone:leading-7 leading-5.5 text-justify">
            <li className="list-disc">
              <span className="font-bold italic">Fatigue persistante</span>, <span className="font-bold  italic">som&shy;meil per&shy;tur&shy;bé</span>, <span className="font-bold  italic">va&shy;ria&shy;tions de poids</span>, <span className="font-bold  italic">bouf&shy;fées de chaleur</span>, <span className="font-bold  italic">sau&shy;tes d'hu&shy;meur</span>... La pré&shy;méno&shy;pause et la mé&shy;no&shy;pause peu&shy;vent bou&shy;le&shy;ver&shy;ser vo&shy;tre quo&shy;ti&shy;dien et vo&shy;tre con&shy;fian&shy;ce en vous.</li>
            <li className="list-disc"> 
              Ces périodes de transi&shy;tion mé&shy;ri&shy;tent une at&shy;ten&shy;tion par&shy;ti&shy;cu&shy;lière. <span className="font-bold italic">Pour&shy;tant, de nom&shy;breuses fem&shy;mes tra&shy;ver&shy;sent ces chan&shy;ge&shy;ments en se sen&shy;tant in&shy;com&shy;pri&shy;ses, fa&shy;ti&shy;guées ou dé&shy;con&shy;nec&shy;tées de leur corps.</span>
            </li>
            {/* <li className="list-disc">Vous désirez perdre du poids et vous ne savez pas par où commencer ?</li>  */}
            <li className="list-disc">
              <span className="font-bold italic">&Agrave; l'aide d'un ac&shy;compa&shy;gne&shy;ment nutri&shy;tion&shy;nel sur mesu&shy;re, bien&shy;veil&shy;lant et fon&shy;dé sur les der&shy;nières con&shy;nais&shy;san&shy;ces en nu&shy;tri&shy;tion</span>, re&shy;trou&shy;ver son éner&shy;gie, son équi&shy;li&shy;bre hor&shy;mo&shy;nal et son bien-être au quo&shy;ti&shy;dien re&shy;de&shy;vien&shy;nent pos&shy;si&shy;bles. 
              {/* Je vous propose un accompagnement nutritionnel sur mesure pour vous aider à retrouver énergie, équilibre hormonal et bien-être au quotidien. Grâce à une approche personnalisée, bienveillante et fondée sur les dernières connaissances en nutrition, vous pourrez reprendre confiance en votre corps et aborder cette nouvelle étape de votre vie avec sérénité et élégance. */}
            </li>
            {/* <li className="list-disc">Vous désirez perdre du poids et vous ne savez pas par où commencer ?</li>
            <li className="list-disc"> Vous avez déjà essayé de multiples régimes, du plus restrictif  jusqu'aux « ali&shy;ments à consommer à volonté », mais toujours sans résultats ?</li> */}
          </ul>
          <p className="text-center font-ysabeau tracking-wide text-white text-xl phone:text-2xl my-8 mx-1.5 font-bold italic">
            Reprenez confiance en votre corps pour aborder cette nouvelle étape de votre vie avec sérénité et élégance.
          </p>
          <p className="my-5 mx-2 mini:mx-5 px-5 py-2.5 tracking-wide text-base phone:text-lg text-black bg-white text-justify rounded-xl indent-5 font-lato mini:leading-8 leading-6">
            <span className="font-bold italic">Spécialisée en nutrition et santé méta&shy;bo&shy;li&shy;que fémi&shy;ni&shy;ne,</span> mon rô&shy;le à vos cô&shy;tés sera de vous ai&shy;der à <span className="font-bold italic">mieux com&shy;pren&shy;dre les chan&shy;ge&shy;ments méta&shy;bo&shy;li&shy;ques qui af&shy;fectent vo&shy;tre corps, puis à re&shy;trou&shy;ver un équi&shy;li&shy;bre méta&shy;bo&shy;lique dura&shy;ble</span>. Ensem&shy;ble, nous met&shy;trons en place des so&shy;lu&shy;tions adap&shy;tées à votre mo&shy;de de vie pour sou&shy;la&shy;ger les symptô&shy;mes hor&shy;mo&shy;naux et re&shy;trou&shy;ver vo&shy;tre vi&shy;ta&shy;li&shy;té. <span className="font-bold italic">Parce que cha&shy;que femme est unique, vo&shy;tre ac&shy;com&shy;pa&shy;gne&shy;ment l'est aussi.</span>
            
            {/* <span className="">Il devient impératif de stopper l’effet yo-yo, à terme vous mettez en danger votre santé !</span> En tant que conseillère en nutrition spécialisée dans les <span className="font-extrabold italic">5 facteurs du vivant (concept issu des neurosciences appliquées)</span>, je vous propose de retrouver le plaisir de manger sainement en étant libéré(e) de toute culpabilité et retrouver votre poids santé. */}
          </p>
          <p className="text-center font-ysabeau tracking-wide text-white text-xl phone:text-2xl my-8 font-bold italic">
            Offrez-vous l'accompagnement que vous méritez !
          </p>
        </div>
      </section>

      <section className="mx-auto w-full px-2.5 flex flex-col justify-center mb-12" >
        <h2 className="w-[75%] relative font-poiret-one tracking-wider font-bold phone:text-2xl text-xl bg-green-logo text-white border-green-logo px-5 py-2.5 rounded-t-xl phone:leading-8 leading-7">
          Choisir de ne plus subir, mais comprendre et agir.
          <div className="absolute -right-5 bottom-0 bg-green-logo w-5 h-5">
            <div className="bg-white w-6 h-5 rounded-bl-full"/>
          </div>
        </h2>
        <div className="bg-green-logo px-5 pb-5 rounded-b-xl rounded-tr-xl py-5">
          <div className="bg-white rounded-xl px-5 py-2.5">
            <p className="font-ysabeau mini:text-lg phone:text-xl phone:leading-10 mini:leading-8 leading-7 text-justify mini:indent-5 indent-3">
              J’analyse, avec vous, vos ha&shy;bi&shy;tu&shy;des ali&shy;men&shy;tai&shy;res, vos anté&shy;cé&shy;dents, vo&shy;tre ry&shy;thme de vie, votre re&shy;la&shy;tion à la nour&shy;ri&shy;tu&shy;re. 
            </p>
            <p className="font-ysabeau mini:text-lg phone:text-xl phone:leading-10 mini:leading-8 leading-7 text-justify mini:indent-5 indent-3">
              <span className="font-bold">
                Très é&shy;loigné des ré&shy;gi&shy;mes tra&shy;di&shy;tion&shy;nels, mon objectif est de vous apprendre à ré&shy;équi&shy;li&shy;brer vo&shy;tre ali&shy;men&shy;ta&shy;tion en gar&shy;dant le plai&shy;sir de man&shy;ger.</span> Ma prise en charge est 100% person&shy;nali&shy;sée : aucun cal&shy;cul de ca&shy;lorie. Rien n’est inter&shy;dit, tout est une no&shy;tion d’équi&shy;libre ! <span className="font-bold">Vos gri&shy;gno&shy;ta&shy;ges vont se trans&shy;for&shy;mer en col&shy;lations prises en pleine conscien&shy;ce </span> (mo&shy;ment par&shy;ti&shy;cu&shy;lier, on prend le temps mê&shy;me si c’est 5 mi&shy;nutes) : ils de&shy;vien&shy;nent un atout pour vo&shy;tre équi&shy;libre.
            </p>
          </div>
 
          <Image 
            src={`/jpg/approche-titre.jpg`} 
            alt="Illustration de l'approche de Sophie Bugnard" 
            width={450} 
            height={450} 
            className="rounded-xl border-white border-2 self-start mx-auto my-5" 
          />

          <div className="bg-white rounded-xl px-5 py-2.5 mt-5">
            <p className="font-ysabeau mini:text-lg phone:text-xl phone:leading-10 mini:leading-8 leading-7 text-justify mini:indent-5 indent-3">
              Vous allez compren&shy;dre pour&shy;quoi vous avez en&shy;vie de gri&shy;gno&shy;ter, pour&shy;quoi votre cen&shy;tre de la sa&shy;tiété est dé&shy;ré&shy;glé et pou&shy;voir y remé&shy;dier. En ré&shy;équi&shy;li&shy;brant vo&shy;tre ali&shy;men&shy;ta&shy;tion, vous per&shy;met&shy;tez à vo&shy;tre corps de rester en bon&shy;ne san&shy;té grâ&shy;ce à la « méde&shy;ci&shy;ne du corps » (mé&shy;ca&shy;nisme d’au&shy;to-gué&shy;rison spon&shy;ta&shy;né du corps). 
              {/* La min&shy;ceur sera une con&shy;sé&shy;quen&shy;ce de vo&shy;tre chan&shy;ge&shy;ment.  */}
              <span className="font-bold"> Vous êtes ac&shy;tri&shy;ce/ac&shy;teur de vo&shy;tre santé !</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 w-full mx-auto px-2.5 flex justify-center">
        <div>
          <h2 className=" text-center font-poiret-one font-bold phone:text-2xl text-2xl py-2 text-white tracking-wider bg-blue-logo rounded-t-xl">Mes spécificités</h2>
          <div className="bg-blue-logo px-5 pb-5 rounded-b-xl">
            <ul className="bg-white p-2.5 font-ysabeau mini:text-lg phone:text-xl phone:leading-10 mini:leading-8 leading-7 text-justify mini:indent-5 indent-3 rounded-xl space-y-1.5 relative overflow-hidden font-bold italic">
              <Image 
                src={`/jpg/pas_de_regime.jpg`} 
                alt="Illustration de l'approche de Sophie Bugnard"
                className="absolute z-10 opacity-20 object-cover"
                fill 
              /> 
              <li className="z-20"><span className="text-green-800">✔</span> Pas de ré&shy;gime ni de frustra&shy;tion, mais un ré&shy;équi&shy;li&shy;bra&shy;ge pour une action du&shy;ra&shy;ble</li>
              <li className="z-20"><span className="text-green-800">✔</span> Pas de balan&shy;ce ni de cal&shy;cul de ca&shy;lo&shy;ries</li>
              <li className="z-20"><span className="text-green-800">✔</span> Disponibilité entre les sé&shy;an&shy;ces</li>
              <li className="z-20"><span className="text-green-800">✔</span> Visite à domici&shy;le si be&shy;soin</li>
              <li className="z-20"><span className="text-green-800">✔</span> Expertise en tant que phar&shy;ma&shy;cien&shy;ne diplômée</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MonApprocheResponsive