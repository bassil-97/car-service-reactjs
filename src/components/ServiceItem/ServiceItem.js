import React from "react";
import "./ServiceItem.css";

export default function ServiceItem({ title, imgURL, description }) {
  return (
    <div className="service-item-container" data-aos="zoom-in">
      <div className="service-icon-wrapper">
        <img src={imgURL} alt="car-icon" className="service-icon" />
      </div>
      <div className="service-item-content">
        <h5 className="text-capitalize fw-bold mb-3">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
