import type { Product } from "@/types";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex items-start justify-start flex-wrap gap-10">
      {products.map((prod) => (
        <li key={prod.id} className="list-none">
          <ProductCard prod={prod} />
        </li>
      ))}
    </div>
  );
};

export default ProductList;
