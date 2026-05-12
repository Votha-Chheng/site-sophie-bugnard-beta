import BodyLayout from "@/components/layouts/BodyLayout"
import TitleImage from "@/components/TitleImage"

const MonLivrePage = () => {
  return (
    <div>
      <TitleImage
        title="Les secrets de la longévité en bonne santé — Une étude sur les zones bleues"
        imgURL="/jpg/publications-titre.jpg" 
        bgPosition="0px -500px" 
        twWidth="w-275" 
        twFrameWidth="w-275" 
        topBracketClassName="-left-4 -top-2.5" 
        bottomBracketClassName="-right-3 -bottom-2.5"
        topCornerClassName="-top-1.5 right-1.5"
        bottomCornerClassName="-bottom-7.5 -left-3"
      />
      <BodyLayout className="min-h-screen w-360">
        <section className="mt-36">
          bvnbvnvnvbn
        </section>
      </BodyLayout>
    </div>
  )
}

export default MonLivrePage
