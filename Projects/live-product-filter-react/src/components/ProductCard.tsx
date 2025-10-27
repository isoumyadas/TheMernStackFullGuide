import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCartIcon, StarIcon } from "lucide-react";
import { type Product } from "@/types";
import { useCartLength } from "@/utils/store";

const ProductCard = ({ prod }: { prod: Product }) => {
  // const increaseCartCount = useCartLength((state) => state.increaseCartCount);
  const addItemToCart = useCartLength((state) => state.addToCart);
  const handleCart = () => {
    addItemToCart(prod);
  };

  return (
    <div>
      <Card className="w-2xl">
        <CardHeader>
          <CardTitle>{prod.title}</CardTitle>
          <CardDescription>{prod.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <img className="w-30" src={prod.image} alt={prod.title} />
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-5">
            <p className="rounded-md bg-blue-400 p-3 font-bold text-white">
              ${prod.price}
            </p>
            <p className="rounded-md bg-black p-3 font-bold text-white flex gap-3">
              <StarIcon className=" fill-amber-300 text-black" />
              {prod.rating.rate}
            </p>
          </div>

          <button
            className="cursor-pointer flex gap-3 bg-amber-600 p-3 rounded-full font-bold text-white"
            onClick={handleCart}
          >
            <ShoppingCartIcon />
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
