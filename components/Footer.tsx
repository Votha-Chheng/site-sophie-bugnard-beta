import Link from "next/link"
import { Separator } from "./ui/separator"

const Footer = () => {
  return (
    <footer className="w-full py-2.5 bg-main-theme text-white border-y-white border-y-2 font-nunito">
      <div className="flex justify-center gap-4">
        <Link href="/plan-du-site">Plan du site</Link>
        <span>|</span> 
        <Link href="/mentions-legales">Mentions légales</Link> 
        <span>|</span>
        <Link href="/politique-de-confidentialite">Politique de confidentialité & cookies</Link>
      </div>
      <Separator className="my-2 bg-white" />
      <p className="text-center">&copy; Avril 2026 - Site conçu par Votha Chheng</p>
    </footer>
  )
}

export default Footer
