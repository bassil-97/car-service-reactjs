import React, { useState } from "react";
import "./GiftItem.css";

import GiftModal from "../../UI/GiftModal";

export default function GiftItem({ name, points, id, redeemGift, userPoints }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="gift-item">
      <GiftModal
        open={open}
        handleClose={handleClose}
        name={name}
        id={id}
        points={points}
        redeemGift={redeemGift}
      />
      <lottie-player
        src="https://assets2.lottiefiles.com/private_files/lf30_a4mKwA.json"
        background="transparent"
        speed="1"
        style={{ width: "90px", height: "90px" }}
        autoplay
      ></lottie-player>
      <h5 className="fw-bold mt-3">{name}</h5>
      <small className="fw-bold">{points} pts</small>
      {userPoints >= points ? (
        <button
          className="mt-4 btn btn-primary text-capitalize"
          onClick={handleOpen}
        >
          get gift
        </button>
      ) : (
        <button className="mt-4 btn" disabled>
          you don't have enough points
        </button>
      )}
    </div>
  );
}
