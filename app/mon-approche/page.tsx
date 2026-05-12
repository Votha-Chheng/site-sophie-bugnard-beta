'use client'

import BodyLayout from "@/components/layouts/BodyLayout"
import TitleImage from "@/components/TitleImage"
import Image from "next/image";
import { CiWarning } from "react-icons/ci"

const MonApprochePage = () => {
  return (
    <div>
      <TitleImage
        title="Mieux manger pour bien vivre."
        imgURL="/jpg/accueil-titre.jpg" 
        bgPosition="0px -350px" 
        twWidth="w-212" 
        twFrameWidth="w-215" 
        topBracketClassName="-left-4 -top-2.5" 
        bottomBracketClassName="-right-3 -bottom-2.5"
        topCornerClassName="-top-1.5 right-1.5"
        bottomCornerClassName="-bottom-7.5 -left-3"
        marginTopTitleTw="mt-7.5"
        frameHeightTw="h-48"
      />
      <BodyLayout className="min-h-screen">
        {/* <section className="mt-28 w-360 mx-auto">
          <h2 className="font-bold text-xl flex items-center gap-x-2"><CiWarning/>Accentuer la spécialisation sur la ménopause</h2>
          <p className="my-5">
            Notre système nerveux contrôle notre métabolisme (système digestif, système hormonal et immunitaire). Grace aux neurosciences appliquées, à l’aide d’outils très simples, nous pouvons agir sur notre système nerveux et ainsi rééquilibrer notre corps. 
          </p>
          
        </section> */}
        <section className="w-360 mx-auto mt-16 flex justify-center items-center">
          <div className="relative ml-12">
            <div className="w-full h-full bg-linear-to-r from-transparent via-white/5 to-white absolute" />
              <Image 
                src={`/jpg/food-problems-3.jpg`} 
                alt="Illustration de l'approche de Sophie Bugnard" 
                width={300} 
                height={300} 
                className="rounded-xl" 
              />
          </div>
          <div className="w-full bg-brown-logo py-3.5 text-gray-100 self-center rounded-md -translate-x-5">
            <ul className="text-2xl pl-5 mx-7.5 font-poiret-one list-decimal space-y-3.5 font-bold tracking-wide">
              <li className="list-disc">Vous désirez perdre du poids et vous ne savez pas par où commencer ?</li>
              <li className="list-disc"> Vous avez déjà essayé de multiples régimes, du plus restrictif  jusqu'aux « ali&shy;ments à consommer à volonté », mais toujours sans résultats ?</li>
            </ul>
            
            <p className="my-5 mx-5 px-5 py-2.5 font-cormorant-infant tracking-wide text-[23px] bg-white text-brown-logo text-justify font-bold italic">
              <span className="">Il devient impératif de stopper l’effet yo-yo, à terme vous mettez en danger votre santé !</span> En tant que conseillère en nutrition spécialisée dans les <span className="font-extrabold italic">5 facteurs du vivant (concept issu des neurosciences appliquées)</span>, je vous propose de retrouver le plaisir de manger sainement en étant libéré(e) de toute culpabilité et retrouver votre poids santé.
            </p>
          </div>
        </section>

        <section className="mb-12 w-340 mx-auto px-16 -mt-2.5">
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
    </BodyLayout>
    </div>


  )
}

export default MonApprochePage
