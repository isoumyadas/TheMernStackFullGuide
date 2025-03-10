import { createContext, useContext } from "react";

export const CheckoutContext = createContext({
  checkouts: [],
  addCheckout: () => {},
  deleteCheckout: () => {},
});

export const CheckoutProvider = CheckoutContext.Provider;

export const useCheckout = () => {
  return useContext(CheckoutContext);
};
