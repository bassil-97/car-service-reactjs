import React, { useEffect, useState } from "react";
import "./Gifts.css";

import { useHttpClient } from "../../../hooks/http-hook";
import { useAuth } from "../../../hooks/auth-hook";
import GiftItem from "../../../components/GiftItem/GiftItem";
import LoadingSpinner from "../../../UI/LoadingSpinner";

export default function Gifts({ userPoints, fetchUserData }) {
  const { isLoading, sendRequest } = useHttpClient();
  const { token, login, logout, userId } = useAuth();

  const [giftsList, setGiftsList] = useState([]);

  useEffect(() => {
    const fetchGiftsList = async () => {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/gifts`
      );

      setGiftsList(responseData["gifts"]);
    };
    fetchGiftsList();
  }, [sendRequest]);

  const redeemGift = async (giftId) => {
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/gifts/redeem-gift`,
        "POST",
        JSON.stringify({
          userId: userId,
          giftId: giftId,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      fetchUserData();
    } catch (err) {}
  };

  return (
    <div className="user-gifts-page">
      <div className="container-fluid">
        <div className="user-gifts-header">
          <h5 className="text-capitalize">
            you can redeem your points for a free service
          </h5>
          <h6>your points ({userPoints})</h6>
        </div>
        {isLoading && (
          <div className="center mt-5">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && (
          <div className="user-gifts-list">
            {giftsList?.map((gift) => (
              <GiftItem
                key={gift.id}
                {...gift}
                redeemGift={redeemGift}
                userPoints={userPoints}
                fetchUserData={fetchUserData}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
