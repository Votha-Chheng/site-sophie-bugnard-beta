import Image from 'next/image';
import Link from 'next/link';

const LogoSmallDevice = () => {
  return (
    <section className="min-w-fit mx-auto hd:mx-0 hd:hidden block pt-1">
      <Link href={`/versionalt`} className={`flex items-center justify-center gap-x-2`} >
        <Image src={`/svg/logo.svg`} alt='Logo Sophie Bugnard' width={45} height={45} />
        <div className="w-full translate-y-1">
          <h1 className={`font-cormorant-infant text-blue-logo font-bold text-2xl leading-5`} >
            Dr Sophie BUGNARD
          </h1>
          <h2 className={`font-ysabeau text-brown-logo font-bold tracking-tight text-base`}>Conseillère nutrition spécialiste de la ménopause</h2>
          {/* <h2 className={`font-ysabeau text-green-logo font-bold tracking-wide text-sm`}>Nutrition <span className='text-brown-logo'>•</span> Santé <span className='text-brown-logo'>•</span> Ménopause</h2> */}
        </div>
      </Link>
    </section>
  )
}

export default LogoSmallDevice