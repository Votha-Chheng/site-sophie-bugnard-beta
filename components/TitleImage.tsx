
import BgTitleIlmage from './BgTitleIlmage';
import PageTitle from './PageTitle';
import BgTitleImageMedium from './responsive/BgTitleImageMedium';

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
  textSizeTw?: string;
  marginTopTitleTw?: string;
  frameHeightTw?: string;
  bgPositionMedium?: string;
}

const TitleImage = (props: Props) => {
  const {title, imgURL, bgPosition, twWidth, twFrameWidth, topBracketClassName, bottomBracketClassName, topCornerClassName, bottomCornerClassName, textSizeTw, marginTopTitleTw="", frameHeightTw="h-58", bgPositionMedium} = props

  return (
    <section className={`w-full h-64 relative small:block hidden`}>
      <BgTitleIlmage imgURL={imgURL} bgPosition={bgPosition || "0px -540px"}/>
      <BgTitleImageMedium imgURL={imgURL} bgPosition={bgPositionMedium || "0px 0px"}/>
      <PageTitle 
        title={title} 
        twWidth={twWidth} 
        twFrameWidth={twFrameWidth} 
        topBracketClassName={topBracketClassName} 
        bottomBracketClassName={bottomBracketClassName} 
        topCornerClassName={topCornerClassName} 
        bottomCornerClassName={bottomCornerClassName} 
        textSizeTw={textSizeTw}
        marginTopTitleTw={marginTopTitleTw}
        frameHeightTw={frameHeightTw}
      />
    </section>
  )
}

export default TitleImage