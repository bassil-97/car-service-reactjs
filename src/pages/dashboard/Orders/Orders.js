import React, { useEffect, useState } from "react";
import "./Orders.css";

import { useHttpClient } from "../../../hooks/http-hook";

import OrderItem from "../../../components/OrderItem/OrderItem";
import GiftsList from "../../../components/GiftItem/GiftsList";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export default function Orders({ userPoints }) {
  const { isLoading, sendRequest } = useHttpClient();
  const storedData = JSON.parse(localStorage.getItem("userData"));

  const [fetchedOrders, setFetchedOrders] = useState([]);
  const [fetchedGifts, setFetchedGifts] = useState([]);

  const fetchOrders = async () => {
    const responseData = await sendRequest(
      process.env.REACT_APP_BACKEND_URL + "/orders"
    );
    setFetchedOrders(responseData.orders);
  };

  const fetchUserGifts = async () => {
    const responseData = await sendRequest(
      process.env.REACT_APP_BACKEND_URL +
        `/users/user-gifts/${storedData.userId}`
    );
    setFetchedGifts(responseData.gifts);
  };

  const deleteOrder = async (orderId) => {
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/orders/delete-order/${orderId}`,
        "DELETE"
      );
    } catch (err) {}
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
    fetchUserGifts();
  }, []);

  return (
    <div className="user-orders">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <OrderItem
              title={"inside orders"}
              data={fetchedOrders?.filter(
                (order) =>
                  order.userId === storedData.userId &&
                  order.serviceType === "inside-service"
              )}
              isLoading={isLoading}
              deleteOrder={deleteOrder}
            />
          </div>
          <div className="col-lg-4">
            <OrderItem
              title={"outside orders"}
              data={fetchedOrders?.filter(
                (order) =>
                  order.userId === storedData.userId &&
                  order.serviceType === "outside-service"
              )}
              isLoading={isLoading}
              deleteOrder={deleteOrder}
            />
          </div>
          <div className="col-lg-4">
            <OrderItem
              title={"inside & outside orders"}
              data={fetchedOrders?.filter(
                (order) =>
                  order.userId === storedData.userId &&
                  order.serviceType === "both-service"
              )}
              isLoading={isLoading}
              deleteOrder={deleteOrder}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6">
            <h4>
              <CardGiftcardIcon /> My Gifts ({fetchedGifts.length})
            </h4>
            <div>
              <GiftsList gifts={fetchedGifts} isLoading={isLoading} />
            </div>
          </div>
          <div className="col-lg-6">
            <h4>
              <LoyaltyIcon /> My Points
            </h4>
            <div className="user-points-container">
              <h3>{userPoints} pts</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
