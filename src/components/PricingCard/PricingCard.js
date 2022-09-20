import React from "react";
import "./PricingCard.css";

export default function PricingCard({ card }) {
  return (
    <div
      className={`${card.type === "startup" && "card-startup"} pricing-card`}
    >
      <h6>
        <img src={card.icon} /> {card.type}
      </h6>
      <h2 className="mb-0 mt-3">
        <span className="text-muted">$</span>
        {card.price}
        <sub>/ per month</sub>
      </h2>
      <div className="package-benifits">
        <small className="fw-bold">This package includes:</small>
        <div className="items">
          {card?.benifites.map((el, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-start gap-2 mb-3"
            >
              <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/18/000000/external-approved-checkmark-symbol-to-verify-the-result-basic-shadow-tal-revivo.png" />
              <h6 className="benifit-item text-muted mb-0"> {el}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
