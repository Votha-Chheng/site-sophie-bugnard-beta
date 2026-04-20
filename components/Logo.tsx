import Image from 'next/image'
import Link from 'next/link'


type Props = {}

const Logo = (props: Props) => {
  return (
    <section className="min-w-fit">
      <Link href={`/versionalt`} className={`flex items-end justify-center gap-x-2 pt-1`} >
        <Image src={`/svg/logo.svg`} className={``}  alt='Logo Sophie Bugnard' width={50} height={50} />
        <div className="w-full translate-y-1">
          <h1 className={`font-cormorant-infant text-blue-logo font-bold text-3xl`} >
            Dr Sophie BUGNARD
          </h1>
          <h2 className={`font-ysabeau text-green-logo font-bold tracking-wide text-xl`}>Nutrition <span className='text-brown-logo'>•</span> Santé <span className='text-brown-logo'>•</span> Ménopause</h2>
        </div>
      </Link>
    </section>
  )
}

export default Logo