import { create } from "zustand"

type ColorPickerState = {
  bgColor: {name: string, hex: string};
  updateBgColor: (bgColor: {name: string, hex: string}) => void
}

export const useColorPickerStore = create<ColorPickerState>((set) => ({
  bgColor: {name: "periwinkle", hex: "#e3d7ff"},
  updateBgColor: (bgColor: {name: string, hex: string}) => {
    set({bgColor})
  },
}))