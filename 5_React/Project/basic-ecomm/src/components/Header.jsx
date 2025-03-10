import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <div className="flex justify-between p-6 items-center bg-gray-300">
      <img
        src="https://www.svgrepo.com/show/535119/a.svg"
        className="h-10 w-10"
      />
      <div className="flex gap-6">
        <Link
          to=""
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
          Products
        </Link>
        <Link
          to="/checkout"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Header;
