import { Quote } from "lucide-react"
import Image from "next/image"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import PageTitle from "./PageTitle"

type MainTitleProps = {
  className?: string
}

const MainTitle = (props: MainTitleProps) => {
  const {className = "top-0 left-0"} = props

  return (
    <PageTitle className={className} >
      <div className="w-fit">
        <p className="z-40 text-5xl tracking-tight leading-20 text-center font-bold italic">
          Remodeler son alimentation 
        </p>
        <p className="z-40 text-5xl tracking-tight text-center leading-20 font-bold italic">
          pour soulager la ménopause...
        </p>
      </div>
    </PageTitle>
  )
}

export default MainTitle