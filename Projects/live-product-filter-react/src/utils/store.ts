import type { Product } from "@/types";
import { create } from "zustand";

export const useCartLength = create((set) => ({
  cartItems: [],
  //   increaseCartCount: () => set((state) => ({ cart: state.cart + 1 })),
  //   decreaseCartCount: () => set((state) => ({ cart: state.cart - 1 })),
  addToCart: (product: Product) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex > -1) {
        // If items exists, increase quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return { cartItems: updatedCartItems };
      } else {
        // If item is new, add it with quantity 1
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }
    }),
  updateCart: (product: Product) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );
      const updatedCartItems = [...state.cartItems];
      if (updatedCartItems[existingItemIndex].quantity <= 1) {
        console.log("hello");
        const filteredItems = state.cartItems.filter(
          (item) => item.id !== updatedCartItems[existingItemIndex].id
        );

        const filteredUpdatedItems = [...filteredItems];

        return { cartItems: filteredUpdatedItems };
      }
      updatedCartItems[existingItemIndex].quantity -= 1;
      return { cartItems: updatedCartItems };
    }),
  removeAllCartCount: () =>
    set((state) => {
      return (state.cartItems.length = 0);
    }),
}));
