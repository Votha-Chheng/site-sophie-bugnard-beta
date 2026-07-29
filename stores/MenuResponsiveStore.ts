import { create } from "zustand"

type MenuResponsiveState = {
  open: boolean;
  toggleOpen: () => void;
  menuFocused: null | "mon-approche" | "qui-suis-je" | "tarifs" | "publications";
  setMenuFocused: (menu: null | "mon-approche" | "qui-suis-je" | "tarifs" | "publications") => void;
}

export const useMenuResponsiveStore = create<MenuResponsiveState>((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
  menuFocused: null,
  setMenuFocused: (menu) => set({ menuFocused: menu }),
})) 
