import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { type Product } from "@/types";

const ProductCard = ({ prod }: { prod: Product }) => {
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
          <p className="rounded-md bg-blue-400 p-3 font-bold text-white">
            ${prod.price}
          </p>
          <p className="rounded-md bg-black p-3 font-bold text-white flex gap-3">
            <StarIcon className=" fill-amber-300 text-black" />
            {prod.rating.rate}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
