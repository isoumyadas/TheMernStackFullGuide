import React, { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  // Handle errors in state
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController(); //(semicolon should be given at start when using IFFE)
    // Handle with IFFE
    (async () => {
      try {
        setError(false);
        const response = await axios.get(`/api/products?search=${search}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled: ", error.message);
          return;
        }
        console.log("Error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();

    //cleanup method (to unmount the component)
    return () => {
      controller.abort();
    };
  }, [search]);

  return { products, error, loading, search, setSearch };
};

export default useProducts;
