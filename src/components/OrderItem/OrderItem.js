import React from "react";
import "./OrderItem.css";

import OrdersList from "./OrdersList";

export default function OrderItem({ title, data, isLoading, deleteOrder }) {
  return (
    <div className="order-item">
      <h4>
        {title} ({data.length})
      </h4>
      <div className="user-orders-list w-100 mt-2">
        <OrdersList
          orders={data}
          deleteOrder={deleteOrder}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
