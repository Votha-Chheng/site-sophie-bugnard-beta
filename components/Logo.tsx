import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {
  return (
    <section className="min-w-fit">
      <div className={`flex items-center justify-center gap-x-1.5`} >
        <Image src={`/png/logo.png`} className={``}  alt='Logo Sophie Bugnard' width={65} height={65} />
        <div className="w-full pt-1">
          <h1 className={`font-cormorant-infant text-main-theme font-bold text-4xl`} >
            Dr Sophie BUGNARD
          </h1>
          <h2 className={`font-ysabeau text-dusty-rose font-bold tracking-wider text-xl`}>Nutrition | Santé | Ménopause</h2>
        </div>
      </div>
    </section>
  )
}

export default Logo