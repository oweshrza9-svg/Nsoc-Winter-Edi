import { create } from "zustand";

interface UiState {
  snowEnabled: boolean;
  setSnowEnabled: (enabled: boolean) => void;
  toggleSnow: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  snowEnabled: true,
  setSnowEnabled: (enabled) => set({ snowEnabled: enabled }),
  toggleSnow: () => set((state) => ({ snowEnabled: !state.snowEnabled })),
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}));
