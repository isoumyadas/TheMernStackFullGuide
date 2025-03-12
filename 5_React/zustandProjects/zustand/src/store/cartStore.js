import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [], // for what you're doing

  //actions
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productID) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productID),
    })),
  clearCart: () => set({ cart: [] }),
}));
