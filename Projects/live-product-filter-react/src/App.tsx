import { useEffect, useMemo, useState } from "react";
import { Spinner } from "./components/ui/spinner";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import { type Product } from "./types";
import { ShoppingCart } from "lucide-react";
import { useCartLength } from "./utils/store";
import { useNavigate } from "react-router";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const cartItems = useCartLength((state) => state.cartItems);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAllProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const finalData = await res.json();
      setProducts(finalData);
      setLoading(false);
    }

    fetchAllProducts();
  }, []);

  // To make it sync | using useMemo will only re-calculate this list if one of the dependencies changes, this is good for optimization.

  const filteredProducts = useMemo(() => {
    return products
      .filter((prod) => {
        if (selectedCategory && selectedCategory !== "all") {
          return prod.category === selectedCategory;
        }

        return true; // If "all" or no category, return all products.
      })
      .filter((prod) => {
        if (searchTerm) {
          return prod.title.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return true; // If no search term, return all products.
      });
  }, [products, selectedCategory, searchTerm]);

  return loading ? (
    <Spinner className="flex justify-center items-center" />
  ) : (
    <div className="w-full scroll-smooth bg-gray-400">
      <div className="container mx-auto py-2">
        <div className="flex items-center gap-9">
          <SearchBar onSearchChange={setSearchTerm} />
          <CategoryFilter onCategoryChange={setSelectedCategory} />
          <span className="flex gap-2 font-bold">
            <ShoppingCart
              className="cursor-pointer"
              onClick={() => navigate("cart-page")}
            />
            <p>{cartItems.length}</p>
          </span>
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
