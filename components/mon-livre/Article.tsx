import { NewspaperIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

type Props = {}

const Article = (props: Props) => {
  return (
    <>
      <section className={`my-16 border-2 border-green-logo rounded-xl bg-white py-7.5 px-5 hd:mx-0 mx-3 medium:flex hidden gap-x-10`}>
        <div className='font-semibold min-w-3/5 pl-3.5 font-ysabeau -rotate-1'>
          <div className="flex items-center gap-x-2 mb-2">
            <NewspaperIcon className="text-green-logo" size={34} />
            <p className='bg-blue-logo w-fit px-2 py-1 rounded-md text-white tracking-wider text-xl'>Interview et regard d'experte pour un article intitulé <span className="font-bold italic">Les Zones bleues</span>, par Élisabeth de LA MORANDIÈRE</p>
          </div>
          <p className='border-black border w-fit px-2 py-1 rounded-md text-black tracking-wider text-base italic font-lato font-normal self-end'>Top santé magazine n°428 (03/04/2026)</p>
          <div className="flex gap-x-3.5">
            <Image src="/jpg/article-top-sante-small.jpg" alt="Couverture du livre" width={750} height={750} className="mt-4" />
          </div>
        </div>
        <div className='mt-16 min-w-1/5'>
          <h2 className="text-2xl font-lato font-semibold mb-3.5">
            Retrouvez cette article en ligne sur le site de <i>Top Santé</i> :
          </h2>
          <div className='flex items-center'>
            <IoIosArrowDroprightCircle size={24} className="text-green-logo mt-1" />
            <Link 
              className="flex items-center gap-x-2 mt-4 text-lg font-nunito rounded-md px-3 py-2 w-fit" 
              href="https://www.kiosquemag.com/titres/top-sante/sommaire/428" 
              target="_blank"
            >
              <Image src="/webp/top-sante-468.webp" alt="Logo Amazon" className="hover:scale-110 transition-transform duration-200" width={120} height={50} />
            </Link>
          </div>
        </div>
      </section>

      {/* *****Phone*** */}
      <section className={`my-16 border-2 border-green-logo rounded-xl bg-white py-7.5 px-5 hd:mx-0 mx-3 medium:hidden block gap-x-10`}>
        <div className='font-semibold min-w-3/5 pl-3.5 font-ysabeau -rotate-1'>
          <div className="flex items-center gap-x-2 mb-2">
            <NewspaperIcon className="text-green-logo" size={34} />
            <p className='bg-blue-logo w-fit px-2 py-1 rounded-md text-white tracking-wider text-xl'>Interview et regard d'experte pour un article intitulé <span className="font-bold italic">Les Zones bleues</span>, par Élisabeth de LA MORANDIÈRE</p>
          </div>
          <p className='border-black border w-fit px-2 py-1 rounded-md text-black tracking-wider text-base italic font-lato font-normal self-end'>Top santé magazine n°428 (03/04/2026)</p>
          <div className="flex justify-center gap-x-3.5">
            <Image src="/jpg/article-top-sante-small.jpg" alt="Couverture du livre" width={750} height={750} className="mt-4" />
          </div>
        </div>
        <div className='mt-16 min-w-1/5'>
          <h2 className="text-xl font-lato font-semibold mb-3.5 text-center">
            Retrouvez cette article en ligne sur le site de <i>Top Santé</i> :
          </h2>
          <div className='flex items-center justify-center'>
            <IoIosArrowDroprightCircle size={24} className="text-green-logo mt-1" />
            <Link 
              className="flex items-center gap-x-2 mt-4 text-lg font-nunito rounded-md px-3 py-2 w-fit" 
              href="https://www.kiosquemag.com/titres/top-sante/sommaire/428" 
              target="_blank"
            >
              <Image src="/webp/top-sante-468.webp" alt="Logo Amazon" className="hover:scale-110 transition-transform duration-200" width={120} height={50} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Article