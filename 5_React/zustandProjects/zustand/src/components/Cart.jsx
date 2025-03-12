import React from "react";
import { useCartStore } from "../store/cartStore";

function Cart() {
  // setting up this all to use
  //   const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
  //     cart: state.cart,
  //     removeFromCart: state.removeFromCart,
  //     clearCart: state.clearCart,
  //   }));

  // When using Zustand's selector pattern, avoid returning an object unless you memoize it with shallow comparison.

  // This creates a new object on every render, even if cart, removeFromCart, and clearCart haven't changed.

  // Since the object reference changes every time, Zustand thinks the state has changed and forces unnecessary re-renders.

  // ==============================================================

  // This is much safer approach to use
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  // ==============================================================

  // or you can use this method too
  // const { cart, removeFromCart, clearCart } = useCartStore();

  // ==============================================================

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0
        ? "Noting there"
        : cart.map((product) => (
            <div key={product.id}>
              <span>{product.title}</span>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
}

export default Cart;
