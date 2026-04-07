import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Logo = (props: Props) => {
  return (
    <section className="min-w-fit">
      <Link href={`/versionalt`} className={`flex items-center justify-center gap-x-1.5`} >
        <Image src={`/png/logo-3.png`} className={``}  alt='Logo Sophie Bugnard' width={65} height={65} />
        <div className="w-full pt-1">
          <h1 className={`font-cormorant-infant text-main-theme font-bold text-4xl`} >
            Dr Sophie BUGNARD
          </h1>
          <h2 className={`font-ysabeau text-mauve-shadow font-bold tracking-wider text-xl`}>Nutrition | Santé | Ménopause</h2>
        </div>
      </Link>
    </section>
  )
}

export default Logo