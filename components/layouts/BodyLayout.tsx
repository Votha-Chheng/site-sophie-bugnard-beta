import React, { ReactNode } from 'react'

type BodyLayoutProps = {
  children: ReactNode;
  className?: string;
}

const BodyLayout = (props: BodyLayoutProps) => {
  const {children, className="w-6xl"} = props

  return (
    <main className={`relative mt-5 lg:mt-10 xl:mt-0 mx-auto ${className ?? ''}`}>
      {children}
    </main>
  )
}

export default BodyLayout