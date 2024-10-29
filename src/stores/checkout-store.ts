import { create } from "zustand";

type States = {
  name: string;
  lastName: string;
  phone: string;
  address: {
    street: string;
    complement?: string | undefined;
    district: string;
    zipCode: string;
    city: string;
    stateUF: string;
  };
};

type Actions = {
  setName: (name: States["name"]) => void;
  setLastName: (lastName: States["lastName"]) => void;
  setPhone: (phone: States["phone"]) => void;
  setAddress: (address: States["address"]) => void;

  saveLocalStorageFormContact: () => void;
  loadLocalStorageFormContact: () => void;

  saveLocalStorageFormAddress: () => void;
  loadLocalStorageFormAddress: () => void;
};

const saveFormContactLocalStorage = (data: {
  name: States["name"];
  lastName: States["lastName"];
  phone: States["phone"];
}) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("form-contact", JSON.stringify(data));
  }
};

const loadFormContactLocalStorage = (): {
  name: States["name"];
  lastName: States["lastName"];
  phone: States["phone"];
} | null => {
  if (typeof window !== "undefined") {
    const saveFormDataContact = localStorage.getItem("form-contact");
    return saveFormDataContact ? JSON.parse(saveFormDataContact) : null;
  }
  return null;
};

const saveFormAddressLocalStorage = (data: { address: States["address"] }) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("form-address", JSON.stringify(data));
  }
};

const loadFormAddressLocalStorage = (): {
  address: States["address"];
} | null => {
  if (typeof window !== "undefined") {
    const saveFormDataAddress = localStorage.getItem("form-address");
    return saveFormDataAddress ? JSON.parse(saveFormDataAddress) : null;
  }
  return null;
};

const initialState: States = {
  name: "",
  lastName: "",
  phone: "",
  address: {
    street: "",
    complement: "",
    district: "",
    zipCode: "",
    city: "",
    stateUF: "",
  },
};

export const useCheckoutStore = create<States & Actions>()((set) => ({
  ...initialState,
  setName: (name) => set((state) => ({ ...state, name })),
  setLastName: (lastName) => set((state) => ({ ...state, lastName })),
  setPhone: (phone) => set((state) => ({ ...state, phone })),
  setAddress: (address) => set((state) => ({ ...state, address })),

  saveLocalStorageFormContact: () => {
    set((state) => {
      const formData = {
        name: state.name,
        lastName: state.lastName,
        phone: state.phone,
      };
      saveFormContactLocalStorage(formData);
      return state;
    });
  },

  loadLocalStorageFormContact: () => {
    const savedData = loadFormContactLocalStorage();
    if (savedData) {
      set({
        name: savedData.name,
        lastName: savedData.lastName,
        phone: savedData.phone,
      });
    }
  },

  saveLocalStorageFormAddress: () => {
    set((state) => {
      const formData = {
        address: state.address,
      };
      saveFormAddressLocalStorage(formData);
      return state;
    });
  },

  loadLocalStorageFormAddress: () => {
    const savedData = loadFormAddressLocalStorage();
    if (savedData) {
      set({
        address: savedData.address,
      });
    }
  },
}));
