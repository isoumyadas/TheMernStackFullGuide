import React from "react";

function Overview() {
  return (
    <div className="flex justify-between  py-4 px-4 ">
      <p className="text-2xl font-medium ">Overview</p>
      <div className="flex gap-2 bg-white shadow-lg border border-gray-300 py-2 px-3 rounded-md">
        <p>This Month</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Overview;
