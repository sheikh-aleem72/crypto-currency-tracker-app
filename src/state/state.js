import { create } from "zustand";
import { fetchCoinData } from "../services/fetchCoinData";

const store = create((set, get) => ({
  coinData: null,
  currency: "usd",
  setCurrency: (newCurrency) =>
    set((state) => {
      return {
        ...state,
        currency: newCurrency,
      };
    }),
  fetchCoinData: async (currency) => {
    console.log("currency", currency);
    const data = await fetchCoinData(currency);
    set({ coinData: data });
  },
}));

export default store;
