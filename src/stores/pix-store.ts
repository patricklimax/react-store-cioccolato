import { create } from "zustand";

type States = {
  pixCode: string;
};

type Actions = {
  setPixCode: (pixCode: States["pixCode"]) => void;
  saveLocalStoragePixCode: () => void;
  loadLocalStoragePixCode: () => void;
};

const savePixCodeLocalStorage = (pixCode: States["pixCode"]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("pix-code", JSON.stringify(pixCode));
  }
};

const loadPixCodeLocalStorage = (): {
  pixCode: States["pixCode"];
} | null => {
  if (typeof window !== "undefined") {
    const savePixCode = localStorage.getItem("pix-code");
    return savePixCode ? JSON.parse(savePixCode) : null;
  }
  return null;
};

export const usePixStore = create<States & Actions>()((set) => ({
  pixCode: "",
  setPixCode: (pixCode) => set((state) => ({ ...state, pixCode })),

  saveLocalStoragePixCode: () => {
    set((state) => {
      savePixCodeLocalStorage(state.pixCode);
      return state;
    });
  },

  loadLocalStoragePixCode: () => {
    const savedData = loadPixCodeLocalStorage();
    if (savedData) {
      set({
        pixCode: savedData.pixCode,
      });
    }
  },
}));
