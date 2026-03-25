import { ReactNode } from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

type PageTitleProps = {
  className?: string
  children: ReactNode
}

const PageTitle = (props: PageTitleProps) => {
  const { className = "top-0 left-0", children } = props

  return (
    <section className={`absolute ${className}`}>
      <div className={`relative text-mauve-shadow font-ysabeau font-bold`}>
        <div className='absolute -rotate-2 -bottom-10 -left-12 w-36 h-24 rounded-bl-full border-r-transparent border-b-8 border-l-8 border-mauve-shadow'/>
        <div className='absolute -top-5 -rotate-2 -right-12 w-36 h-24 rounded-tr-full border-t-8 border-r-8 border-mauve-shadow'/>
        <ImQuotesLeft className="absolute -top-5 -left-14" size={50}/>
        <ImQuotesRight  className="absolute -bottom-8 -right-14" size={50} />
        {children}
      </div>
    </section>
  )
}

export default PageTitle