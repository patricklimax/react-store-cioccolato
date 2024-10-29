import { create } from "zustand";

type States = {
  paymentMethod: string;
};

type Actions = {
  setPaymentMethod: (paymentMethod: States["paymentMethod"]) => void;
  saveLocalStoragePaymentMethod: () => void;
  loadLocalStoragePaymentMethod: () => void;
};

const savePaymentMethodLocalStorage = (
  paymentMethod: States["paymentMethod"],
) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("payment-method", JSON.stringify(paymentMethod));
  }
};

const loadPaymentMethodLocalStorage = (): {
  paymentMethod: States["paymentMethod"];
} | null => {
  if (typeof window !== "undefined") {
    const savePaymentMethod = localStorage.getItem("payment-method");
    return savePaymentMethod ? JSON.parse(savePaymentMethod) : null;
  }
  return null;
};

export const usePaymentMethodStore = create<States & Actions>()((set) => ({
  paymentMethod: "",
  setPaymentMethod: (paymentMethod) =>
    set((state) => ({ ...state, paymentMethod })),

  saveLocalStoragePaymentMethod: () => {
    set((state) => {
      savePaymentMethodLocalStorage(state.paymentMethod);
      return state;
    });
  },

  loadLocalStoragePaymentMethod: () => {
    const savedData = loadPaymentMethodLocalStorage();
    if (savedData) {
      set({
        paymentMethod: savedData.paymentMethod,
      });
    }
  },
}));
