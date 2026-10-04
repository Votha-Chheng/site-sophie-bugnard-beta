import BodyLayout from "@/components/layouts/BodyLayout"
import Article from "@/components/mon-livre/Article";
import Livre from "@/components/mon-livre/Livre";
import PageTitlePhone from "@/components/responsive-components/PageTitlePhone";
import TitleImage from "@/components/TitleImage"

const MonLivrePage = () => {
  return (
    <div>
      <TitleImage
        title="Les secrets de la longévité en bonne santé"
        imgURL="/jpg/publications-titre.jpg" 
        bgPosition="0px -500px" 
        twWidth="w-210" 
        twFrameWidth="w-210" 
        topBracketClassName="-left-4 -top-2.5" 
        bottomBracketClassName="-right-3 -bottom-2.5"
        topCornerClassName="-top-1.5 right-1.5"
        bottomCornerClassName="-bottom-7.5 -left-3"
        marginTopTitleTw="mt-3.5"
      />
      <PageTitlePhone 
        imgURL="/jpg/publications-titre.jpg" 
        bgPosition="0px -400px" 
        title="Les secrets de la longévité en bonne santé"
      />
      <BodyLayout className="min-h-screen hd:w-360">
        <Livre/>
        <Article/>
      </BodyLayout>
    </div>
  )
}

export default MonLivrePage
