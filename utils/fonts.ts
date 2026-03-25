import { Cagliostro, Cormorant_Infant, Geist, Geist_Mono, Hurricane, Lato, Lavishly_Yours, Manrope, Nothing_You_Could_Do, Nunito, Poiret_One, Quattrocento_Sans, Square_Peg, Ysabeau } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const lavishlyYours = Lavishly_Yours({
  weight: [ "400"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  variable: "--next-font-lavishly-yours",
})

export const squarePeg = Square_Peg({
  weight: [ "400"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  variable: "--next-font-square-peg",
})

export const ysabeau = Ysabeau({
  weight: [ "400", "100", "200", "300", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--next-font-ysabeau",
})

export const cormorantInfant = Cormorant_Infant({
  weight:["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--next-font-cormorant-infant",
})

export const poiretOne = Poiret_One({
  weight:["400"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  variable: "--next-font-poiret-one",
})

export const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"],
  variable: "--next-font-nunito",
})

export const lato = Lato({
  weight: ["400", "300", "700", "900", "100"],
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"],
  variable: "--next-font-lato",
})

export const hurricane = Hurricane({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  variable: "--next-font-hurricane",
})
