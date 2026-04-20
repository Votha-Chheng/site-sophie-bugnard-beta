import { create } from "zustand"

type ColorPickerState = {
  bgColor: {name: string, hex: string};
  updateBgColor: (bgColor: {name: string, hex: string}) => void
}

export const useColorPickerStore = create<ColorPickerState>((set) => ({
  bgColor: {name: "frozen water", hex: "#e9fff9"},
  updateBgColor: (bgColor: {name: string, hex: string}) => {
    set({bgColor})
  },
}))