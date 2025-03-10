import React from "react";
import { useCheckout } from "../contexts/CheckoutContext";

function Checkout() {
  const { checkouts, deleteCheckout } = useCheckout();

  return (
    <div className="flex flex-wrap flex-col my-6 gap-4">
      {checkouts.length === 0 ? (
        <p className="text-black text-5xl text-center font-bold ">
          Cart is Empty
        </p>
      ) : (
        checkouts.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-2xl rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105 w-full flex justify-between gap-5"
          >
            <img
              src={item.images[0]}
              className="h-32 w-32 object-cover rounded-md "
            />

            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-800">
                {item.title}
                {item.tags[0] ? <span> #{item.tags[0]} </span> : ""}
                {item.tags[1] ? <span> #{item.tags[1]} </span> : ""}
              </p>
              <p className="text-lg font-bold text-blue-600 mt-2">
                ${item.price}
              </p>
              <button
                className="mt-3 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => {
                  alert(`Product removed from cart`);
                  deleteCheckout(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Checkout;
