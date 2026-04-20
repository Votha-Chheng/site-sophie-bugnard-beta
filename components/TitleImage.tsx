
import PageTitle from './PageTitle';

type Props = {
  title: string;
  imgURL: string;
  bgPosition?: string;
  twWidth?: string;
  twFrameWidth?: string;
  topBracketClassName?:string;
  bottomBracketClassName?: string;
  topCornerClassName?: string;
  bottomCornerClassName?: string;
}

const TitleImage = (props: Props) => {
  const {title, imgURL, bgPosition, twWidth, twFrameWidth, topBracketClassName, bottomBracketClassName, topCornerClassName, bottomCornerClassName} = props

  return (
    <section className={`w-full h-64 relative`}>
      <div className='overflow-hidden w-full h-64 '>
        <div className='w-full h-full opacity-75 absolute top-0 left-0' style={{backgroundImage: `url(${imgURL})`, backgroundSize: 'cover', backgroundPosition: bgPosition}}/>
      </div>
      <PageTitle 
        title={title} 
        twWidth={twWidth} 
        twFrameWidth={twFrameWidth} 
        topBracketClassName={topBracketClassName} 
        bottomBracketClassName={bottomBracketClassName} 
        topCornerClassName={topCornerClassName} 
        bottomCornerClassName={bottomCornerClassName} 
      />
    </section>
  )
}

export default TitleImage