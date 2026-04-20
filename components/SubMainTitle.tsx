import Link from 'next/link'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

type SubMainTitleProps = {
  className?: string
}

const SubMainTitle = (props: SubMainTitleProps) => {
  const { className="" } = props

  return (
    <div className={`absolute left-1/2 -translate-x-1/2 w-120 text-green-logo text-center pr-10 font-ysabeau text-xl font-bold tracking-wide italic ${className}`}>
      <div className="relative w-fit mb-5">
        <p>
          ...à travers une approche personnalisée, bienveillante, et faite de petits pas solides pour enraciner vos progrès.
        </p>
        <ImQuotesLeft className="absolute -top-2.5 left-7.5" size={20}/>
        <ImQuotesRight className="absolute -bottom-2.5 right-20" size={20} />
      </div>
      <Link 
        href="/mon-livre" 
        className="text-white font-ysabeau text-base font-normal bg-main-theme not-italic px-2.5 py-1 rounded-xl hover:bg-green-lotext-green-logo transition-colors duration-100"
      >
        Mon approche
      </Link>
    </div>
  )
}

export default SubMainTitle