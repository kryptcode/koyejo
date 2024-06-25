import { create } from "zustand";

type State = {
  activeComponent: string;
};

type Action = {
  updateActiveComponent: (activeComponent: State["activeComponent"]) => void;
};

export const useActiveStore = create<State & Action>((set) => ({
  activeComponent: "home",
  updateActiveComponent: (activeComponent) => set(() => ({ activeComponent: activeComponent })),
}));

interface StoreState {
  value: string | number;
  setValue: (newValue: string | number) => void;
}

export const useArchiveStore = create<StoreState>((set) => ({
  value: '/',
  setValue: (newValue) => set({ value: newValue }),
}));