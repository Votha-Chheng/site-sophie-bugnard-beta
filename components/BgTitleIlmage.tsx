import React from 'react'

type Props = {
  imgURL: string;
  bgPosition: string;
}

const BgTitleIlmage = (props: Props) => {
  const { imgURL, bgPosition } = props;

  return (
    <div className='overflow-hidden w-full h-64 medium:block hidden'>
      <div className='w-full h-full opacity-75 absolute top-0 left-0' style={{backgroundImage: `url(${imgURL})`, backgroundSize: 'cover', backgroundPosition: bgPosition}}/>
    </div>
  )
}

export default BgTitleIlmage