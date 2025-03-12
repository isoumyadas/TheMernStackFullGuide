import { PRODUCTS } from "./products";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <h1>Learning Zustand | Ecomm</h1>
      <br />
      <ProductList products={PRODUCTS} />
      <Cart />
    </>
  );
}

export default App;
