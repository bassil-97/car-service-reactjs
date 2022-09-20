import React from "react";
import "./ClientReviewItem.css";

export default function ClientReviewItem({ name, avatar, review }) {
  return (
    <div className="client-review-item" data-aos="zoom-in">
      <img src={avatar} className="avatar" alt="client-review" />
      <img
        src="https://img.icons8.com/ultraviolet/50/000000/quote-right.png"
        className="quotes-icon"
        alt="quotes"
      />
      <p className="mb-4">{review}</p>
      <h6 className="mb-0 fw-bold">- {name} -</h6>
    </div>
  );
}
