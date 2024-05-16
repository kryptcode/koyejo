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
