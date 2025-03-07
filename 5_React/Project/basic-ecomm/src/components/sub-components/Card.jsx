import React from "react";

function Card({ products }) {
  if (!products) {
    return <p>Loading Data....</p>; // Handling missing data gracefully
  }
  return (
    <>
      {products.products ? (
        products.products.map(
          (
            product // you can add ? to check if the data is available or not or else you can use if condition or ternary operator.
          ) => (
            <div
              key={product.id}
              className="bg-white shadow-2xl rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105 w-full sm:w-64 flex flex-col gap-5 justify-center"
            >
              <img
                src={product.images[0]}
                className="h-32 w-32 object-cover rounded-md self-center"
              />
              <div className="mt-3">
                <p className="text-lg font-semibold text-gray-800">
                  {product.title}
                  {product.tags[0] ? <span> #{product.tags[0]} </span> : ""}
                  {product.tags[1] ? <span> #{product.tags[1]} </span> : ""}
                </p>
                <p className="text-lg font-bold text-blue-600 mt-2">
                  ${product.price}
                </p>
                <button
                  className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                  onClick={() => {
                    alert(`${product.title} Added to Checkout`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )
        )
      ) : (
        <p>Loading Products...</p>
      )}
    </>
  );
}

export default Card;
