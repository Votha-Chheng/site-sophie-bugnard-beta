import Image from 'next/image';
import Link from 'next/link';
import { ImBook } from 'react-icons/im';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

type Props = {}

const Livre = (props: Props) => {
  return (
    <>
      <section className={`mt-36 border-2 border-green-logo rounded-xl bg-white py-7.5 px-5 gap-x-10 hd:flex hidden`}>
        <div className='font-semibold min-w-3/5 pl-3.5 font-ysabeau -rotate-1'>
          <div className="flex items-center gap-x-2 mb-2">
            <ImBook className="text-green-logo" size={34} />
            <p className='bg-blue-logo w-fit px-2 py-1 rounded-md italic text-white tracking-wider text-xl'>Les secrets de la longévité en bonne santé - Une étude sur les zones bleues</p>
          </div>
          <p className='border-black border w-fit px-2 py-1 rounded-md text-black tracking-wider text-base not-italic font-lato font-normal self-end'>Ed. Fernand Lanore, 2024</p>
          <div className="flex gap-x-3.5">
            <Image src="/jpg/livre_couverture.jpg" alt="Couverture du livre" width={300} height={300} className="mt-4" />
            <p className="mt-5 text-lg text-justify leading-8">
              Quels sont les secrets de longévité de ces peuples sans cancer et affichant un faible taux de mortalité ? L'homme aurait une durée de vie maximale de cent vingt ans, mais l'espérance de vie n'est pas forcément l'espérance de santé ! Sophie Bugnard, Docteur en pharmacie et naturopathe, nous fait découvrir ici les différents modes de vie, l'alimentation et les fonctionnements intérieurs de ces fameuses "zones bleues", mais surtout, nous apprend comment nous pouvons les transposer dans nos sociétés occidentales stressées et malades. Il est encore possible de changer nos habitudes, de contrecarrer certaines intoxications en agissant maintenant et en étant pleinement acteur de notre santé afin de vieillir en meilleure forme.
            </p>
          </div>
        </div>
        <div className="min-w-2/5 flex justify-center mt-10">
          <div>
            <h2 className="text-2xl font-lato font-semibold mb-3.5">
              Retrouvez mon livre sur :
            </h2>
            <div className='flex items-center'>
              <IoIosArrowDroprightCircle size={24} className="text-green-logo mt-1" />
              <Link 
                className="flex items-center gap-x-2 mt-4 text-lg font-nunito rounded-md px-3 py-2 w-fit" 
                href="https://www.amazon.fr/secrets-long%C3%A9vit%C3%A9-bonne-sant%C3%A9-bleues/dp/2382731001" 
                target="_blank"
              >
                <Image src="/png/amazon-logo.png" alt="Logo Amazon" className="hover:scale-110 transition-transform duration-200" width={120} height={50} />
              </Link>
            </div>
            <div className='flex items-center'>
              <IoIosArrowDroprightCircle size={24} className="text-green-logo mt-1" />
              <Link 
                className="flex items-center gap-x-2 mt-4 text-lg font-nunito rounded-md px-3 py-2 w-fit" 
                href="https://www.fnac.com/a18860840/Sophie-Bugnard-Les-secrets-de-la-longevite-en-bonne-sante-Une-etude-sur-les-zones-bleues" 
                target="_blank"
              >
                <Image src="/png/fnac-logo.png" alt="Logo FNAC" className="hover:scale-110 transition-transform duration-200" width={120} height={50} />
              </Link>
            </div>
            <div className='flex items-center'>
              <IoIosArrowDroprightCircle size={24} className="text-green-logo mt-1" />
              <Link 
                className="flex items-center gap-x-2 mt-4 text-lg font-nunito rounded-md px-3 py-2 w-fit" 
                href="https://www.cultura.com/p-les-secrets-de-la-longevite-en-bonne-sante-une-etude-sur-les-zones-bleues-9782382731000.html" 
                target="_blank"
              >
                <Image src="/png/cultura-logo.png" alt="Logo Cultura" className="hover:scale-110 transition-transform duration-200" width={140} height={50} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`hidden small:flex hd:hidden border-2 border-green-logo rounded-xl mt-42 gap-x-2.5 py-5 px-2.5 mx-3`}>
        <div className='font-semibold pl-3.5 font-ysabeau -rotate-1'>
          <div className="flex items-center gap-x-2 mb-2">
            <ImBook className="text-green-logo" size={34} />
            <p className='bg-blue-logo w-fit px-2 py-1 rounded-md italic text-white tracking-wider text-xl'>Les secrets de la longévité en bonne santé - Une étude sur les zones bleues</p>
          </div>
          <p className='border-black border w-fit px-2 py-1 rounded-md text-black tracking-wider text-base not-italic font-lato font-normal self-end'>Ed. Fernand Lanore, 2024</p>
          <div className="flex gap-x-3.5">
            <Image src="/jpg/livre_couverture.jpg" alt="Couverture du livre" width={250} height={250} className="mt-4" />
            <p className="mt-5 text-sm medium:text-base text-justify medium:leading-7 leading-6">
              Quels sont les secrets de longévité de ces peuples sans cancer et affichant un faible taux de mortalité ? L'homme aurait une durée de vie maximale de cent vingt ans, mais l'espérance de vie n'est pas forcément l'espérance de santé ! Sophie Bugnard, Docteur en pharmacie et naturopathe, nous fait découvrir ici les différents modes de vie, l'alimentation et les fonctionnements intérieurs de ces fameuses "zones bleues", mais surtout, nous apprend comment nous pouvons les transposer dans nos sociétés occidentales stressées et malades. Il est encore possible de changer nos habitudes, de contrecarrer certaines intoxications en agissant maintenant et en étant pleinement acteur de notre santé afin de vieillir en meilleure forme.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 min-w-1/4">
          <div>
            <h2 className="text-base font-lato font-semibold mb-3.5">
              Retrouvez mon livre sur :
            </h2>
            <div className='flex items-center'>
              <IoIosArrowDroprightCircle size={20} className="text-green-logo mt-1" />
              <Link 
                className="flex items-center gap-x-2 mt-4 text-lg font-nunito rounded-md px-3 py-2 w-fit" 
                href="https://www.amazon.fr/secrets-long%C3%A9vit%C3%A9-bonne-sant%C3%A9-bleues/dp/2382731001" 
                target="_blank"
              >
                <Image src="/png/amazon-logo.png" alt="Logo Amazon" className="hover:scale-110 transition-transform duration-200" width={80} height={50} />
              </Link>
            </div>
            <div className='flex items-center'>
              <IoIosArrowDroprightCircle size={20} className="text-green-logo mt-1" />
              <Link 
                className="flex items-center gap-x-2 mt-4 font-nunito rounded-md px-3 py-2 w-fit" 
                href="https://www.fnac.com/a18860840/Sophie-Bugnard-Les-secrets-de-la-longevite-en-bonne-sante-Une-etude-sur-les-zones-bleues" 
                target="_blank"
              >
                <Image src="/png/fnac-logo.png" alt="Logo FNAC" className="hover:scale-110 transition-transform duration-200" width={80} height={50} />
              </Link>
            </div>
            <div className='flex items-center'>
              <IoIosArrowDroprightCircle size={20} className="text-green-logo mt-1" />
              <Link 
                className="flex items-center gap-x-2 mt-4 text-lg font-nunito rounded-md px-3 py-2 w-fit" 
                href="https://www.cultura.com/p-les-secrets-de-la-longevite-en-bonne-sante-une-etude-sur-les-zones-bleues-9782382731000.html" 
                target="_blank"
              >
                <Image src="/png/cultura-logo.png" alt="Logo Cultura" className="hover:scale-110 transition-transform duration-200" width={75} height={50} />
              </Link>
            </div>
          </div>
        </div>
      </section>

       {/* *********Phone*** */ }
      <section className={`block small:hidden border-2 border-green-logo rounded-xl mt-20 gap-x-2.5 py-5 px-2.5 mx-3`}>
        <div className='font-semibold pl-3.5 font-ysabeau -rotate-1'>
          <div className="flex items-center gap-x-2 mb-2">
            <ImBook className="text-green-logo" size={34} />
            <p className='bg-blue-logo w-fit px-2 py-1 rounded-md italic text-white tracking-wider text-xl'>Les secrets de la longévité en bonne santé - Une étude sur les zones bleues</p>
          </div>
          <p className='border-black border w-fit px-2 py-1 rounded-md text-black tracking-wider text-base not-italic font-lato font-normal self-end'>Ed. Fernand Lanore, 2024</p>

          <div className="">
            <Image src="/jpg/livre_couverture.jpg" alt="Couverture du livre" width={175} height={175} className="float-left mr-4" />
            <p className="mt-5 text-sm medium:text-base text-justify medium:leading-7 leading-6">
              Quels sont les secrets de longévité de ces peuples sans cancer et affichant un faible taux de mortalité ? L'homme aurait une durée de vie maximale de cent vingt ans, mais l'espérance de vie n'est pas forcément l'espérance de santé ! Sophie Bugnard, Docteur en pharmacie et naturopathe, nous fait découvrir ici les différents modes de vie, l'alimentation et les fonctionnements intérieurs de ces fameuses "zones bleues", mais surtout, nous apprend comment nous pouvons les transposer dans nos sociétés occidentales stressées et malades. Il est encore possible de changer nos habitudes, de contrecarrer certaines intoxications en agissant maintenant et en étant pleinement acteur de notre santé afin de vieillir en meilleure forme.
            </p>
          </div>
        </div>
        <div className="mt-7.5">
          <div>
            <h2 className="text-base text-center font-lato font-semibold">
              Retrouvez mon livre sur :
            </h2>
            <article className="flex justify-center gap-x-5">
              <div className='flex items-center'>
                <IoIosArrowDroprightCircle size={20} className="text-green-logo mt-1" />
                <Link 
                  className="flex items-center gap-x-2 mt-4 text-lg font-nunito rounded-md px-3 py-2 w-fit" 
                  href="https://www.amazon.fr/secrets-long%C3%A9vit%C3%A9-bonne-sant%C3%A9-bleues/dp/2382731001" 
                  target="_blank"
                >
                  <Image src="/png/amazon-logo.png" alt="Logo Amazon" className="hover:scale-110 transition-transform duration-200" width={80} height={50} />
                </Link>
              </div>
              <div className='flex items-center'>
                <IoIosArrowDroprightCircle size={20} className="text-green-logo mt-1" />
                <Link 
                  className="flex items-center gap-x-2 mt-4 font-nunito rounded-md px-3 py-2 w-fit" 
                  href="https://www.fnac.com/a18860840/Sophie-Bugnard-Les-secrets-de-la-longevite-en-bonne-sante-Une-etude-sur-les-zones-bleues" 
                  target="_blank"
                >
                  <Image src="/png/fnac-logo.png" alt="Logo FNAC" className="hover:scale-110 transition-transform duration-200" width={80} height={50} />
                </Link>
              </div>
              <div className='flex items-center'>
                <IoIosArrowDroprightCircle size={20} className="text-green-logo mt-1" />
                <Link 
                  className="flex items-center gap-x-2 mt-4 text-lg font-nunito rounded-md px-3 py-2 w-fit" 
                  href="https://www.cultura.com/p-les-secrets-de-la-longevite-en-bonne-sante-une-etude-sur-les-zones-bleues-9782382731000.html" 
                  target="_blank"
                >
                  <Image src="/png/cultura-logo.png" alt="Logo Cultura" className="hover:scale-110 transition-transform duration-200" width={75} height={50} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Livre