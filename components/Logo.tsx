import Image from 'next/image'
import Link from 'next/link'


type Props = {}

const Logo = (props: Props) => {
  return (
    <section className="min-w-fit phone:mx-auto mx-0 hd:mx-0 hd:block hidden">
      <Link href={`/versionalt`} className={`flex items-end justify-center gap-x-2 pt-0 hd:pt-1`} >
        <Image src={`/svg/logo.svg`} alt='Logo Sophie Bugnard' width={50} height={50} />
        <div className="w-full">
          <h1 className={`font-cormorant-infant text-blue-logo font-bold text-3xl translate-y-1`} >
            Dr Sophie BUGNARD
          </h1>
          <h2 className={`font-ysabeau text-brown-logo font-bold tracking-tight text-base`}>Conseillère nutrition spécialiste de la ménopause</h2>
          {/* <h2 className={`font-ysabeau text-green-logo font-bold tracking-wide text-xl`}>Nutrition <span className='text-brown-logo'>•</span> Santé <span className='text-brown-logo'>•</span> Ménopause</h2> */}
        </div>
      </Link>
    </section>
  ) 
}

export default Logo