import React from "react";
import { useState, useEffect, useCallback } from "react";
import Card from "./sub-components/Card";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error(`Error Fethcing data: `, err));
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-evenly my-6 gap-4">
        <Card products={products} />
      </div>
    </>
  );
}

export default Products;
