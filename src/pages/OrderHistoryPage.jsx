import React from "react";
import OrderHistoryCard from "../components/OrderHistory/OrderHistoryCard";

const mockOrders = [
  {
    id: "ORD123456",
    purchaseDate: "2025-05-21",
    bundleName: "SSC CGL 2025 Full Test Series",
    amountPaid: 499,
    status: "Paid",
  },
  {
    id: "ORD123457",
    purchaseDate: "2025-06-01",
    bundleName: "SBI Clerk Prelims Test Series",
    amountPaid: 299,
    status: "Paid",
  },
  {
    id: "ORD123458",
    purchaseDate: "2025-06-18",
    bundleName: "UPSC Prelims Mock Series",
    amountPaid: 999,
    status: "Failed",
  },
];

const OrderHistoryPage = () => (
  <div className="max-w-2xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">Order History</h2>
    {mockOrders.map(order => (
      <OrderHistoryCard
        key={order.id}
        orderId={order.id}
        purchaseDate={order.purchaseDate}
        bundleName={order.bundleName}
        amountPaid={order.amountPaid}
        status={order.status}
        onDownloadReceipt={() => alert(`Downloading receipt for ${order.id}`)}
      />
    ))}
  </div>
);

export default OrderHistoryPage;
