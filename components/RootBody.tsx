'use client'

import { useColorPickerStore } from '@/stores/colorPickerStore'
import React from 'react'

type RootBodyProps = {
  children: React.ReactNode
  className? : string
}

const RootBody = ({ children, className="" }: RootBodyProps) => {
  const {bgColor} = useColorPickerStore()

  return (
    <div style={{backgroundColor: bgColor.hex}} className={`${className} relative w-full h-full`}>
      {children}
    </div>
  )
}

export default RootBody