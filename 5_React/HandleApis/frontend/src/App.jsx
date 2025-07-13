import "./App.css";
import useProducts from "../hooks/useProducts";

function App() {
  const { loading, error, products, search, setSearch } = useProducts();
  if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Enter the product name"
        // value={search} binds the input's value to the search state, making it a controlled component — this is a common pattern in React for managing form inputs.
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Number of Products are: {products.length}</p>
    </>
  );
}

export default App;
