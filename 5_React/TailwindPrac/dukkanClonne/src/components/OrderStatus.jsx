import React from "react";

function OrderStatus() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4  flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="border rounded  outline-none border-gray-300 flex items-center text-gray-900 px-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="search"
            id="default-search"
            className="block w-80 p-2 ps-10"
            placeholder="Order ID or transactions ID"
            required
          />
        </div>

        <div className="flex gap-3">
          <div className="flex border border-gray-300 p-2 gap-2 items-center font-medium">
            Sort
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </div>
          <div className="border border-gray-300 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="">
        <table className="min-w-full">
          <colgroup>
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead className="text-[#4D4D4D]">
            <tr className="bg-[#F2F2F2]">
              <th class="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">
                Order ID
              </th>
              <th class="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Status
              </th>
              <th class="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Transaction ID
              </th>
              <th class="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Refund Date
              </th>
              <th class="px-3 py-[10px] text-right text-sm font-medium tracking-wider rounded-r">
                Order Amount
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-[#E6E6E6]">
            <tr class="text-sm">
              <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                <span class="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                Successful
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹1125.00
              </td>
              <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
            </tr>
            <tr class="text-sm">
              <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281210
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                <span class="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                Processing
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX789012
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Tomorrow, 10:00 AM
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹950.50
              </td>
              <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
            </tr>
            <tr class="text-sm">
              <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281211
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                <span class="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                Successful
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX345678
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Yesterday, 3:30 PM
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹750.00
              </td>
              <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
            </tr>
            <tr class="text-sm">
              <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281212
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                <span class="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                Successful
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX901234
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 11:20 AM
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹2000.00
              </td>
              <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
            </tr>
            <tr class="text-sm">
              <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281213
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                <span class="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                Processing
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX567890
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Tomorrow, 9:00 AM
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹1800.00
              </td>
              <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
            </tr>
            <tr class="text-sm">
              <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281214
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                <span class="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                Processing
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX098765
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Yesterday, 2:00 PM
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹500.00
              </td>
              <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
            </tr>
            <tr class="text-sm">
              <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281215
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                <span class="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                Successful
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX456789
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 10:30 AM
              </td>
              <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹3000.00
              </td>
              <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderStatus;
