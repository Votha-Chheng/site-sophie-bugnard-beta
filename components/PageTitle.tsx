import { ReactNode } from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

type PageTitleProps = {
  className?: string
  title : string
  twWidth?: string
  twFrameWidth?: string
  textSizeTw?: string
  topBracketClassName?:string
  bottomBracketClassName?: string
  topCornerClassName?: string
  bottomCornerClassName?: string
  marginTopTitleTw: string
  frameHeightTw: string
}

const PageTitle = (props: PageTitleProps) => {
  const { 
    title, 
    className = "top-0 left-0", 
    twWidth = "w-200", 
    twFrameWidth = "w-217.5", 
    topBracketClassName="", 
    bottomBracketClassName="", 
    topCornerClassName="", 
    bottomCornerClassName="",
    textSizeTw = "text-6xl",
    marginTopTitleTw,
    frameHeightTw
  } = props

  return (
    <section className={`${className} absolute top-24 left-1/2 -translate-x-1/2 ${twWidth}`}>
      <div className={`h-full ${twFrameWidth} absolute bg-white -z-10 -rotate-z-2 rounded-4xl`} />
      <div className={`${twWidth} ${frameHeightTw} z-20 pt-7.5 pl-14`}>
        <p className={`${textSizeTw} ${marginTopTitleTw} leading-20 font-ysabeau font-bold italic text-green-logo`}>
          {title}
        </p>
        <ImQuotesLeft color='#419D78' className={`absolute ${topBracketClassName}`} size={50}/>
        <ImQuotesRight color='#419D78' className={`absolute ${bottomBracketClassName}`} size={50} />
        <div className={`absolute ${topCornerClassName} -rotate-2 w-32 h-24 rounded-tr-4xl border-t-8 border-r-8 border-brown-logo`} />
        <div className={`absolute ${bottomCornerClassName} -rotate-z-2  w-32 h-24 rounded-bl-4xl border-r-transparent border-b-8 border-l-8 border-brown-logo`} />
      </div>
    </section>
  )
}

export default PageTitle 