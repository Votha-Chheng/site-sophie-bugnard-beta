'use client'

import { useColorPickerStore } from '@/stores/colorPickerStore';

type Props = {
  className?: string;
}

const ColorPicker = ({className}: Props) => {

  const colors = [
    {name: "periwinkle", hex: "#e3d7ff"},
    {name: "frosted mint", hex: "#c4e7d4"},
    {name: "dust grey", hex: "#d3d0cb"},
    {name: "alabaster grey", hex: "#d8dbe2"},
    {name: "cherry blossom", hex: "#f7b2bd"},
    {name: "frozen water", hex: "#e9fff9"},
    {name: "pale slate", hex: "#bdb4bf"},
    {name: "powder blue", hex: "#98c1d9"},
    {name: "light cyan", hex: "#e0fbfc"},
    {name: "royal gold", hex: "#f9db6d"},
    {name: "almond silk", hex: "#f7d1cd"},
    {name: "lime cream", hex: "#e9eb87"},
    {name: "tea green", hex: "#dde8b9"},
    {name: "soft apricot", hex: "#fcd0a1"},
    {name: "muted olive", hex: "#aabd8c"},
    {name: "celadon light", hex: "#b8d8ba"},
    {name: "celadon lighter", hex: "#baf3d1"},

  ]

  const {updateBgColor} = useColorPickerStore()

  return (
    <div className={`${className ?? '' } absolute`}>
      <div className='p-2 bg-black w-fit space-y-1 rounded-lg'>
        {colors.map((color) => (
          <div 
            className='flex items-center gap-x-2 cursor-pointer' 
            key={color.name}
            onClick={() => updateBgColor(color)}
          >
            <div
              className="w-5 h-5 rounded-lg"
              style={{backgroundColor: color.hex}}
              
            />
            <p className='text-white text-xs'>{color.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorPicker