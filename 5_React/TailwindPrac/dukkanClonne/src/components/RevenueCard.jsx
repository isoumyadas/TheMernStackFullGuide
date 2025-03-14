import React from "react";

function RevenueCard({ title, orderCount, amount, nextPaymentDate, date }) {
  return (
    <div>
      {nextPaymentDate && date ? (
        <div className="bg-[#146EB4] hover:bg-[#0E4F82] text-white rounded-lg shadow-md flex flex-col gap-3">
          <div className="p-5 flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              {title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-3xl"> ₹ {amount} </div>

              {orderCount ? (
                <div className="flex gap-1 text-white font-medium underline cursor-pointer items-end">
                  <div>{orderCount ? `${orderCount} Orders` : null}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.8"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-between bg-[#0E4F82] py-3 px-6 rounded-md">
            <p className="font-medium">{nextPaymentDate}</p>
            <p className="font-medium ">{date}</p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded shadow-md p-4 flex flex-col gap-3 h-fit">
          <div className="text-gray-700 flex gap-2 items-center">
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-3xl"> ₹ {amount} </div>

            {orderCount ? (
              <div className="flex gap-1 text-blue-600 font-medium underline cursor-pointer items-end">
                <div>{orderCount ? `${orderCount} Orders` : null}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.8"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default RevenueCard;
