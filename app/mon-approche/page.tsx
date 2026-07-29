'use client'

import BodyLayout from "@/components/layouts/BodyLayout"
import MonApprocheResponsive from "@/components/responsive/MonApprocheResponsive";
import PageTitlePhone from "@/components/responsive/PageTitlePhone";
import TitleImage from "@/components/TitleImage"
import Image from "next/image";

const MonApprochePage = () => {
  return (
    <div>
      <TitleImage
        //title="Mieux manger pour bien vivre."
        title="Mieux manger, mieux vivre."
        imgURL="/jpg/accueil-titre.jpg" 
        bgPosition="0px -350px" 
        twWidth="w-212" 
        twFrameWidth="w-215" 
        topBracketClassName="-left-4 -top-2.5" 
        bottomBracketClassName="-right-3 -bottom-2.5"
        topCornerClassName="-top-1.5 right-1.5"
        bottomCornerClassName="-bottom-7.5 -left-3"
        marginTopTitleTw="mt-8"
        frameHeightTw="h-48"
      />
      <PageTitlePhone 
        imgURL="/jpg/accueil-titre.jpg" 
        bgPosition="0px -50px" 
        title="Mieux manger, mieux vivre."
      />
      <MonApprocheResponsive/>
      <BodyLayout className="min-h-screenb small:block hidden">
        {/* <section className="mt-28 w-360 mx-auto">
          <h2 className="font-bold text-xl flex items-center gap-x-2"><CiWarning/>Accentuer la spécialisation sur la ménopause</h2>
          <p className="my-5">
            Notre système nerveux contrôle notre métabolisme (système digestif, système hormonal et immunitaire). Grace aux neurosciences appliquées, à l’aide d’outils très simples, nous pouvons agir sur notre système nerveux et ainsi rééquilibrer notre corps. 
          </p>
          
        </section> */}
        {/* Vous ne vous reconnaissez plus tout à fait ? Fatigue persistante, sommeil perturbé, variations de poids, bouffées de chaleur, sautes d'humeur... La préménopause et la ménopause peuvent bouleverser votre quotidien et votre confiance en vous. */}

        {/* Spécialisée en nutrition féminine, je vous accompagne avec une approche personnalisée pour mieux comprendre les changements de votre corps et retrouver un équilibre durable. Ensemble, nous mettons en place des solutions adaptées à votre mode de vie afin de soulager les symptômes hormonaux, retrouver votre vitalité et vous permettre de vivre cette étape avec sérénité.

        Parce que chaque femme est unique, votre accompagnement l'est aussi.

        

        ET

        

        La préménopause et la ménopause sont des périodes de transition qui méritent une attention particulière. Pourtant, de nombreuses femmes traversent ces changements en se sentant incomprises, fatiguées ou déconnectées de leur corps.

        Je vous propose un accompagnement nutritionnel sur mesure pour vous aider à retrouver énergie, équilibre hormonal et bien-être au quotidien. Grâce à une approche personnalisée, bienveillante et fondée sur les dernières connaissances en nutrition, vous pourrez reprendre confiance en votre corps et aborder cette nouvelle étape de votre vie avec sérénité et élégance.

        Offrez-vous l'accompagnement que vous méritez. */}
        <section className="w-360 mx-auto mt-28 flex justify-center mb-10">
          <div className="relative ml-12 mt-5">
            <div className="w-full h-full bg-linear-to-r from-transparent via-white/5 to-white absolute" />
            <Image 
              src={`/jpg/food-problems-3.jpg`} 
              alt="Illustration de l'approche de Sophie Bugnard" 
              width={500} 
              height={500} 
              className="rounded-xl" 
            />
          </div>
          <div className="w-full bg-brown-logo py-3.5 text-gray-100 self-center rounded-md mb-10 -translate-x-5">
            <ul className="text-2xl pl-5 mx-7.5 font-ysabeau list-decimal space-y-3.5 tracking-wide">
              <li className="list-disc">
                <span className="font-bold italic">Fatigue persistante</span>, <span className="font-bold  italic">sommeil perturbé</span>, <span className="font-bold  italic">variations de poids</span>, <span className="font-bold  italic">bouffées de chaleur</span>, <span className="font-bold  italic">sautes d'humeur</span>... La préménopause et la ménopause peuvent bouleverser votre quotidien et votre confiance en vous.</li>
              <li className="list-disc"> 
                Ces périodes de transition méritent une attention particulière. <span className="font-bold italic">Pourtant, de nombreuses femmes traversent ces changements en se sentant incomprises, fatiguées ou déconnectées de leur corps.</span>
              </li>
              {/* <li className="list-disc">Vous désirez perdre du poids et vous ne savez pas par où commencer ?</li>  */}
              <li className="list-disc">
                <span className="font-bold italic">&Agrave; l'aide d'un accompagnement nutritionnel sur mesure, bienveillant et fondé sur les dernières connaissances en nutrition</span>, retrouver son énergie, son équilibre hormonal et son bien-être au quotidien redeviennent possibles. <span className="font-bold italic">Reprenez confiance en votre corps pour aborder cette nouvelle étape de votre vie avec sérénité et élégance.</span>
                {/* Je vous propose un accompagnement nutritionnel sur mesure pour vous aider à retrouver énergie, équilibre hormonal et bien-être au quotidien. Grâce à une approche personnalisée, bienveillante et fondée sur les dernières connaissances en nutrition, vous pourrez reprendre confiance en votre corps et aborder cette nouvelle étape de votre vie avec sérénité et élégance. */}
              </li>
              {/* <li className="list-disc">Vous désirez perdre du poids et vous ne savez pas par où commencer ?</li>
              <li className="list-disc"> Vous avez déjà essayé de multiples régimes, du plus restrictif  jusqu'aux « ali&shy;ments à consommer à volonté », mais toujours sans résultats ?</li> */}
            </ul>
            
            <p className="my-5 mx-5 px-5 py-2.5 tracking-wide text-xl text-black bg-white text-justify rounded-xl indent-5 font-lato leading-8">
              <span className="font-bold italic">Spécialisée en nutrition hormonale et métabolisme féminin</span>, mon rôle à vos côtés sera de vous aider à <span className="font-bold italic">mieux comprendre les changements métaboliques qui affectent votre corps</span>, puis à retrouver un équilibre métabolique durable. Ensemble, nous mettrons en place des solutions adaptées à votre mode de vie pour soulager les symptômes hormonaux et retrouver votre vitalité. <span className="font-bold italic">Parce que chaque femme est unique, votre accompagnement l'est aussi.</span>
              
              {/* <span className="">Il devient impératif de stopper l’effet yo-yo, à terme vous mettez en danger votre santé !</span> En tant que conseillère en nutrition spécialisée dans les <span className="font-extrabold italic">5 facteurs du vivant (concept issu des neurosciences appliquées)</span>, je vous propose de retrouver le plaisir de manger sainement en étant libéré(e) de toute culpabilité et retrouver votre poids santé. */}
            </p>
             <p className="text-center font-ysabeau tracking-wide text-white text-4xl my-8 font-bold italic">
              Offrez-vous l'accompagnement que vous méritez !
             </p>
          </div>
        </section>

        <section className="mb-12 w-340 mx-auto px-16 mt-0">
          <h2 className="ml-auto font-poiret-one tracking-wide font-bold text-[38px] bg-green-logo text-white w-200 text-right border-x-8 border-t-8 border-green-logo px-5 rounded-t-xl leading-12">
            Choisir de ne plus subir, mais comprendre et agir à la place <span className="font-lato font-normal">!</span>
          </h2>
          <div className="bg-green-logo rounded-tl-xl rounded-b-xl px-7.5 py-5 flex-col items-start">
            <div className="flex gap-x-5">
              <div className="bg-white rounded-t-xl py-2.5 w-full relative">
                <div className="absolute -right-5 bottom-0 bg-white w-5 h-5">
                  <div className="bg-green-logo w-5 h-5 rounded-bl-full"/>
                </div>
                <p className="px-5 font-ysabeau text-xl leading-10 text-justify indent-5">
                  J’analyse, avec vous, vos habitudes alimentaires, vos antécédents, votre rythme de vie, votre relation à la nourriture. <span className="font-bold">Très éloigné des régimes traditionnels, mon objectif est de vous apprendre à rééquilibrer votre alimentation en gardant le plaisir de manger.</span> Ma prise en charge est 100% personnalisée. Aucun calcul de calorie. Rien n’est interdit, tout est une notion d’équilibre ! <span className="font-bold">Vos grignotages vont se transformer en collations prises en pleine conscience (moment particulier, on prend le temps même si c’est 5 minutes) : ils deviennent un atout pour votre équilibre.</span> 
                </p>
              </div>
              <Image 
                src={`/jpg/approche-titre.jpg`} 
                alt="Illustration de l'approche de Sophie Bugnard" 
                width={475} 
                height={475} 
                className="rounded-xl border-white border-2 self-start" 
              />
            </div>
            <div  className="bg-white rounded-b-xl rounded-tr-xl py-2.5 w-full">
              <p className="px-5 font-ysabeau text-xl leading-10 text-justify indent-5">
                Vous allez comprendre pourquoi vous avez envie de grignoter, pourquoi votre centre de la satiété est déréglé et pouvoir y remédier. En rééquilibrant votre alimentation, vous permettez à votre corps de rester en bonne santé grâce à la « médecine du corps » (mécanisme d’auto-guérison spontané du corps). La minceur sera une conséquence de votre changement. <span className="font-bold">Vous êtes actrice/acteur de votre santé !</span>
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12 w-340 mx-auto px-16 -mt-2.5 flex justify-center">
          <div>
            <h2 className=" text-center font-poiret-one tracking-wide font-bold text-[38px] py-2 text-white bg-blue-logo rounded-t-xl">Mes spécificités</h2>
            <div className="bg-blue-logo px-5 pb-5 rounded-b-xl">
              <ul className="bg-white p-5 font-ysabeau text-xl leading-10 text-justify indent-5 rounded-xl space-y-1 relative overflow-hidden font-bold italic">
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
      </BodyLayout>
    </div>
  )
}

export default MonApprochePage
