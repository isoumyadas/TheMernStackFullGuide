import Layout from "./Layout";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { CheckoutProvider } from "./contexts/CheckoutContext";
import { useState } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Products />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

function App() {
  const [checkouts, setCheckouts] = useState([]);

  function addCheckout(product) {
    // console.log("Prd:", product);
    // remember whenever you take data from object use spread operator
    setCheckouts((prevCheckout) => [...prevCheckout, { ...product }]);
    // console.log("the chec: ", checkouts);
  }

  function deleteCheckout(id) {
    setCheckouts((prevProduct) => prevProduct.filter((prev) => prev.id !== id));
  }

  return (
    <CheckoutProvider value={{ checkouts, addCheckout, deleteCheckout }}>
      <RouterProvider router={router} />
    </CheckoutProvider>
  );
}

export default App;
