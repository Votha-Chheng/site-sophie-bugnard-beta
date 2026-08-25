import { create } from "zustand"

type MenuResponsiveState = {
  open: boolean;
  infosOpen: boolean;
  closeInfos: () => void;
  openInfos: () => void;
  toggleOpen: () => void;
  menuFocused: null | "mon-approche" | "qui-suis-je" | "tarifs" | "publications";
  setMenuFocused: (menu: null | "mon-approche" | "qui-suis-je" | "tarifs" | "publications") => void;
  selectedIcon: "phone" | "mail"| "map" | "clock" | "parking" | "rdv" | null;
  setSelectedIcon: (icon: "phone" | "mail"| "map" | "clock" | "parking" | "rdv" | null) => void;
}

export const useMenuResponsiveStore = create<MenuResponsiveState>((set) => ({
  selectedIcon: null,
  setSelectedIcon: (icon) => set({ selectedIcon: icon }),
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open, infosOpen: false, menuFocused: null })),
  infosOpen: false,
  closeInfos: () => set(({ infosOpen: false })),
  openInfos: () => set(({ infosOpen: true })),
  menuFocused: null,
  setMenuFocused: (menu) => set({ menuFocused: menu }),
})) 
