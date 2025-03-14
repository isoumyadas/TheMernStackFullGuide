import React from "react";

function TransactionsText() {
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="text-xl font-semibold">
        <p>Transactions | This Month</p>
      </div>
      <div className="flex gap-3 ">
        <div className="bg-gray-200 px-4 py-2 rounded-3xl text-gray-500 font-medium">
          Payouts (22){" "}
        </div>
        <div className="px-4 py-2 rounded-3xl bg-[#146EB4] text-white font-medium">
          Refunds (6){" "}
        </div>
      </div>
    </div>
  );
}

export default TransactionsText;
