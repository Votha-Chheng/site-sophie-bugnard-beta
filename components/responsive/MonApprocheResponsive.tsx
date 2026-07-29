import Image from "next/image";

type Props = {

}

const MonApprocheResponsive = (props: Props) => {
  return (
    <main className='block small:hidden my-16'>
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
          <ul className="text-lg small:text-2xl phone:pl-5 pl-2 mx-7.5 font-ysabeau list-decimal space-y-2 tracking-wide phone:leading-7 leading-6 text-justify">
            <li className="list-disc">
              <span className="font-bold italic">Fatigue persistante</span>, <span className="font-bold  italic">sommeil perturbé</span>, <span className="font-bold  italic">va&shy;ria&shy;tions de poids</span>, <span className="font-bold  italic">bouf&shy;fées de chaleur</span>, <span className="font-bold  italic">sau&shy;tes d'hu&shy;meur</span>... La pré&shy;méno&shy;pause et la mé&shy;no&shy;pause peuvent boule&shy;ver&shy;ser votre quo&shy;ti&shy;dien et votre confian&shy;ce en vous.</li>
            <li className="list-disc"> 
              Ces périodes de transi&shy;tion méri&shy;tent une at&shy;ten&shy;tion par&shy;ti&shy;cu&shy;lière. <span className="font-bold italic">Pour&shy;tant, de nom&shy;breuses fem&shy;mes tra&shy;versent ces chan&shy;ge&shy;ments en se sen&shy;tant in&shy;com&shy;pri&shy;ses, fa&shy;ti&shy;guées ou dé&shy;con&shy;nec&shy;tées de leur corps.</span>
            </li>
            {/* <li className="list-disc">Vous désirez perdre du poids et vous ne savez pas par où commencer ?</li>  */}
            <li className="list-disc">
              <span className="font-bold italic">&Agrave; l'aide d'un ac&shy;compa&shy;gne&shy;ment nutri&shy;tion&shy;nel sur mesu&shy;re, bien&shy;veil&shy;lant et fon&shy;dé sur les der&shy;nières con&shy;nais&shy;sances en nu&shy;tri&shy;tion</span>, re&shy;trou&shy;ver son éner&shy;gie, son équi&shy;li&shy;bre hor&shy;mo&shy;nal et son bien-être au quo&shy;ti&shy;dien re&shy;de&shy;vien&shy;nent pos&shy;si&shy;bles. <span className="font-bold italic">Reprenez confiance en votre corps pour aborder cette nouvelle étape de votre vie avec sérénité et élégance.</span>
              {/* Je vous propose un accompagnement nutritionnel sur mesure pour vous aider à retrouver énergie, équilibre hormonal et bien-être au quotidien. Grâce à une approche personnalisée, bienveillante et fondée sur les dernières connaissances en nutrition, vous pourrez reprendre confiance en votre corps et aborder cette nouvelle étape de votre vie avec sérénité et élégance. */}
            </li>
            {/* <li className="list-disc">Vous désirez perdre du poids et vous ne savez pas par où commencer ?</li>
            <li className="list-disc"> Vous avez déjà essayé de multiples régimes, du plus restrictif  jusqu'aux « ali&shy;ments à consommer à volonté », mais toujours sans résultats ?</li> */}
          </ul>
          
          <p className="my-5 mx-5 px-5 py-2.5 tracking-wide text-base phone:text-lg text-black bg-white text-justify rounded-xl indent-5 font-lato leading-8">
            <span className="font-bold italic">Spécialisée en nutrition hormonale et métabolisme féminin</span>, mon rôle à vos côtés sera de vous aider à <span className="font-bold italic">mieux comprendre les changements métaboliques qui affectent votre corps</span>, puis à retrouver un équilibre métabolique durable. Ensemble, nous mettrons en place des solutions adaptées à votre mode de vie pour soulager les symptômes hormonaux et retrouver votre vitalité. <span className="font-bold italic">Parce que chaque femme est unique, votre accompagnement l'est aussi.</span>
            
            {/* <span className="">Il devient impératif de stopper l’effet yo-yo, à terme vous mettez en danger votre santé !</span> En tant que conseillère en nutrition spécialisée dans les <span className="font-extrabold italic">5 facteurs du vivant (concept issu des neurosciences appliquées)</span>, je vous propose de retrouver le plaisir de manger sainement en étant libéré(e) de toute culpabilité et retrouver votre poids santé. */}
          </p>
            <p className="text-center font-ysabeau tracking-wide text-white text-xl phone:text-2xl my-8 font-bold italic">
              Offrez-vous l'accompagnement que vous méritez !
            </p>
        </div>
      </section>

      <section className="mx-auto w-full px-2.5 flex flex-col justify-center mb-12" >
        <h2 className="w-[75%] relative font-poiret-one tracking-wider font-bold phone:text-2xl text-xl bg-green-logo text-white text-center border-green-logo px-5 py-2.5 rounded-t-xl phone:leading-8 leading-7">
          Choisir de ne plus subir, mais comprendre et agir à la place.
          <div className="absolute -right-5 bottom-0 bg-green-logo w-5 h-5">
            <div className="bg-white w-6 h-5 rounded-bl-full"/>
          </div>
        </h2>
        <div className="bg-green-logo px-5 pb-5 rounded-b-xl rounded-tr-xl py-5">
          <div className="bg-white rounded-xl px-5 py-2.5">
            <p className="font-ysabeau text-lg phone:text-xl phone:leading-10 leading-8 text-justify indent-5">
              J’analyse, avec vous, vos habitudes ali&shy;men&shy;tai&shy;res, vos anté&shy;cé&shy;dents, votre ry&shy;thme de vie, votre re&shy;la&shy;tion à la nour&shy;ri&shy;tu&shy;re. 
            </p>
            <p className="font-ysabeau text-lg phone:text-xl phone:leading-10 leading-8 text-justify indent-5">
              <span className="font-bold">
                Très é&shy;loigné des ré&shy;gi&shy;mes tra&shy;di&shy;tion&shy;nels, mon objectif est de vous apprendre à rééquilibrer votre ali&shy;men&shy;ta&shy;tion en gar&shy;dant le plaisir de man&shy;ger.</span> Ma prise en charge est 100% person&shy;nali&shy;sée : aucun cal&shy;cul de ca&shy;lorie. Rien n’est inter&shy;dit, tout est une no&shy;tion d’équi&shy;libre ! <span className="font-bold">Vos grigno&shy;ta&shy;ges vont se transfor&shy;mer en col&shy;lations prises en pleine conscien&shy;ce </span> (mo&shy;ment par&shy;ticulier, on prend le temps mê&shy;me si c’est 5 mi&shy;nutes) : ils devien&shy;nent un atout pour vo&shy;tre équi&shy;libre.
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
            <p className="font-ysabeau text-lg phone:text-xl phone:leading-10 leading-8 text-justify indent-5">
              Vous allez comprendre pourquoi vous avez envie de grignoter, pourquoi votre centre de la satiété est déréglé et pouvoir y remédier. En rééquilibrant votre alimentation, vous permettez à votre corps de rester en bonne santé grâce à la « médecine du corps » (mécanisme d’auto-guérison spontané du corps). La minceur sera une conséquence de votre changement. <span className="font-bold">Vous êtes actrice/acteur de votre santé !</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 w-full mx-auto px-2.5 flex justify-center">
        <div>
          <h2 className=" text-center font-poiret-one font-bold phone:text-2xl text-2xl py-2 text-white tracking-wider bg-blue-logo rounded-t-xl">Mes spécificités</h2>
          <div className="bg-blue-logo px-5 pb-5 rounded-b-xl">
            <ul className="bg-white p-2.5 font-ysabeau text-lg phone:text-xl phone:leading-10 leading-8 text-justify indent-3 rounded-xl space-y-1 relative overflow-hidden font-bold italic">
              <Image 
                src={`/jpg/pas_de_regime.jpg`} 
                alt="Illustration de l'approche de Sophie Bugnard"
                className="absolute z-10 opacity-20 object-cover"
                fill 
              /> 
              <li className="z-20"><span className="text-green-800">✔</span> Pas de régime ni de frustration, mais un rééquilibrage pour une action durable</li>
              <li className="z-20"><span className="text-green-800">✔</span> Pas de balance ni de calcul de calories</li>
              <li className="z-20"><span className="text-green-800">✔</span> Disponibilité entre les séances</li>
              <li className="z-20"><span className="text-green-800">✔</span> Visite à domicile si besoin</li>
              <li className="z-20"><span className="text-green-800">✔</span> Expertise en tant que pharmacienne diplômée</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MonApprocheResponsive