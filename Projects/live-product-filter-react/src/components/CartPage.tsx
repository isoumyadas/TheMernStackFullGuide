import { useCartLength } from "@/utils/store";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const CartPage = () => {
  const cartItems = useCartLength((state) => state.cartItems);
  const updateCartItems = useCartLength((state) => state.updateCart);
  const addItemToCart = useCartLength((state) => state.addToCart);
  const removeAllItemsFromCart = useCartLength(
    (state) => state.removeAllCartCount
  );

  if (cartItems.length === 0) {
    return <p> Your Cart is Empty</p>;
  }

  const totalItemsPrice = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="bg-gray-500 min-h-full p-5 flex flex-col gap-9">
      <div className=" flex gap-9">
        <label className="font-bold text-white bg-black rounded-full p-2">
          Your Total Price: ${Math.floor(totalItemsPrice)}
        </label>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => removeAllItemsFromCart()}
              className="cursor-pointer text-white bg-red-800 rounded-full p-1"
            >
              <TrashIcon />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Remove all products</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="container mx-auto flex items-center flex-wrap gap-5">
        {cartItems.map((item) => (
          <li key={item.id} className="list-none">
            <Card className="w-sm max-h-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img className="w-20" src={item.image} alt={item.title} />
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <p className="rounded-md bg-blue-400 p-3 font-bold text-white">
                    ${item.price}
                  </p>
                  <div className="flex gap-5 bg-black font-bold rounded-full text-white p-2">
                    <MinusIcon
                      className="cursor-pointer"
                      onClick={() => updateCartItems(item)}
                    />{" "}
                    {item.quantity}
                    <PlusIcon
                      className="cursor-pointer"
                      onClick={() => addItemToCart(item)}
                    />
                  </div>
                </div>
              </CardFooter>
            </Card>
          </li>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
