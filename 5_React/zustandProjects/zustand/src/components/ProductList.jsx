import React from "react";
import { useCartStore } from "../store/cartStore";

function ProductList({ products }) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
