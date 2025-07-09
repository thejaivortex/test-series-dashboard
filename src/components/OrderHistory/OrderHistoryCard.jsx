import React from "react";

const OrderHistoryCard = ({
  orderId,
  purchaseDate,
  bundleName,
  amountPaid,
  status,
  onDownloadReceipt,
}) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-4">
    <div>
      <p className="text-sm text-gray-600">Order ID: <span className="font-semibold">{orderId}</span></p>
      <p className="text-sm text-gray-500">Date: {purchaseDate}</p>
      <p className="text-md font-semibold">{bundleName}</p>
      <p className="text-sm text-gray-700">Amount Paid: <span className="font-bold">₹{amountPaid}</span></p>
      <p className={`text-sm font-bold ${status === "Paid" ? "text-green-600" : "text-red-600"}`}>Status: {status}</p>
    </div>
    <button
      className="mt-2 md:mt-0 bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
      onClick={onDownloadReceipt}
    >
      Download Receipt
    </button>
  </div>
);

export default OrderHistoryCard;
