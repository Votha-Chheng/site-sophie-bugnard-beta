import { Quote } from "lucide-react"
import Image from "next/image"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"

type MainTitleProps = {
  className?: string
}

const MainTitle = (props: MainTitleProps) => {
  const {className = "top-0 left-0"} = props

  return (
    <section className={`absolute ${className}`}>
      <div className={`relative text-mauve-shadow font-ysabeau font-bold`}>
        <div className='absolute -rotate-2 -bottom-10 -left-12 w-36 h-24 rounded-bl-full border-r-transparent border-b-8 border-l-8 border-mauve-shadow'/>
        <div className='absolute -top-5 -rotate-2 -right-12 w-36 h-24 rounded-tr-full border-t-8 border-r-8 border-mauve-shadow'/>
        <ImQuotesLeft className="absolute -top-5 -left-14" size={50}/>
        <ImQuotesRight  className="absolute -bottom-8 -right-14" size={50} />
        <div className="w-fit">
          <p 
            className="z-40 text-5xl tracking-tight leading-24 text-center font-bold italic"
          >
            Remodeler son alimentation 
          </p>
          {/* <Image src="/svg/logo-transparent.svg" width={100} height={100} alt="Alicaments" className="mx-auto"/> [text-shadow:0.6px_0_currentColor,-0.6px_0_currentColor,0_0.6px_currentColor,0_-0.6px_currentColor]*/}
          <p 
            className="z-40 text-5xl tracking-tight text-center leading-24 font-bold italic"
          >
            pour soulager la ménopause...
          </p>
        </div>
      </div>
    </section>
  )
}

export default MainTitle