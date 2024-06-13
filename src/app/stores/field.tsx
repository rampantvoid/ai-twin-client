import { create } from "zustand";

type Store = {
  field: string | null;
  setField: (field: string) => void;
};

export const useField = create<Store>()((set) => ({
  field: null,
  setField: (field) => set({ field }),
}));
