'use client'

import BodyLayout from "@/components/layouts/BodyLayout"
import PageTitle from "@/components/PageTitle"

const MonApprochePage = () => {
  return (
    <BodyLayout className="min-h-screen w-360">
      <PageTitle className="-translate-x-1/2 left-1/2 top-12">
        <div className="w-fit ml-5">
          <p className="z-40 text-[44px] tracking-tight leading-20 font-bold italic">
            Ne pas combler les besoins nutritionnels de votre organisme le met en état de stress.
          </p>
          <p className="z-40 text-2xl tracking-tight leading-24 font-bold italic text-right absolute -bottom-15 right-10">
            Dr Yann ROUGIER
          </p>
        </div>
      </PageTitle>
      
      <BodyLayout className="absolute top-100">
        <section>
          Notre système nerveux contrôle notre métabolisme (système digestif, système hormonal et immunitaire). Grace aux neurosciences appliquées, à l’aide d’outils très simples, nous pouvons agir sur notre système nerveux et ainsi rééquilibrer notre corps. 
        </section>
        <section>
          Vous désirez perdre du poids et vous ne savez pas par où commencer. Vous avez déjà essayé de multiples régimes, du plus restrictif  jusqu'aux « aliments à consommer à volonté », mais toujours sans résultats. 
          Il devient impératif de stopper l’effet yo-yo, à terme vous mettez en danger votre santé !
          En tant que conseillère en nutrition spécialisée dans les 5 facteurs du vivant (issu des neurosciences appliquées), je vous propose de retrouver le plaisir de manger sainement en étant libéré(e) de toute culpabilité et retrouver votre poids santé.
          J’analyse, avec vous, vos habitudes alimentaires, vos antécédents, votre rythme de vie, votre relation à la nourriture. 
          Très éloigné des régimes traditionnels, mon objectif est de vous apprendre à rééquilibrer votre alimentation en gardant le plaisir de manger. 
          Ma prise en charge est 100% personnalisée. Aucun calcul de calorie.
          Rien n’est interdit, tout est une notion d’équilibre ! 
          Vos grignotages vont se transformer en collations prises en pleine conscience (moment particulier, on prend le temps même si c’est 5 min) ils deviennent un atout pour votre équilibre.
          Vous allez comprendre pourquoi vous avez envie de grignoter, pourquoi votre centre de la satiété est déréglé et pouvoir y remédier.
          En rééquilibrant votre alimentation vous permettez à votre corps de rester en bonne santé grâce à la « médecine du corps » (mécanisme d’auto-guérison spontané du corps). La minceur sera une conséquence de votre changement.
          Vous êtes actrices – acteurs de votre santé

        </section>
      </BodyLayout>
    </BodyLayout>


  )
}

export default MonApprochePage
