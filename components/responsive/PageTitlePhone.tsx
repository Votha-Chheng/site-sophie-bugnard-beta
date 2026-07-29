import React from 'react'
import { Separator } from '../ui/separator';

type Props = {
  imgURL: string;
  bgPosition?: string;
  title: string;
}

const PageTitlePhone = (props: Props) => {
  const { imgURL, bgPosition, title } = props;

  return (
    <section className={`small:hidden block relative`}>
      <div className='overflow-hidden w-full h-24'>
        <div className='w-full h-full opacity-75 absolute top-0 left-0' style={{backgroundImage: `url(${imgURL})`, backgroundSize: 'cover', backgroundPosition: bgPosition}}/>
      </div>
      <div className={`relative w-full`}>
        <div style={{clipPath: "polygon(100% 0, 0% 100%, 100% 100%)"}} className="bg-white h-7.5 -top-7.5 left-0 absolute w-full"/>
        <h2 className="text-2xl text-center bg-white font-ysabeau text-green-logo font-bold px-2.5 italic tracking-wide pt-1"> {title} </h2>
        <div className="mt-5 w-1/3 absolute h-1 bg-brown-logo -translate-x-1/2 left-1/2 rounded-2xl"/>
      </div>
    </section>
  )
}

export default PageTitlePhone