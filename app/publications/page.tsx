import BodyLayout from "@/components/layouts/BodyLayout"
import Article from "@/components/mon-livre/Article";
import Livre from "@/components/mon-livre/Livre";
import PageTitlePhone from "@/components/responsive/PageTitlePhone";
import TitleImage from "@/components/TitleImage"
import { ArrowRight, NewspaperIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImBook } from "react-icons/im";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const MonLivrePage = () => {
  return (
    <div>
      <TitleImage
        title="Les secrets de la longévité en bonne santé"
        imgURL="/jpg/publications-titre.jpg" 
        bgPosition="0px -500px" 
        twWidth="w-220" 
        twFrameWidth="w-220" 
        topBracketClassName="-left-4 -top-2.5" 
        bottomBracketClassName="-right-3 -bottom-2.5"
        topCornerClassName="-top-1.5 right-1.5"
        bottomCornerClassName="-bottom-7.5 -left-3"
        marginTopTitleTw="mt-7.5"
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
