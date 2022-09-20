import React from "react";
import "./BookService.css";

import BookFrom from "../../components/BookFrom/BookFrom";
import BackButton from "../../UI/BackButton";

export default function BookService() {
  return (
    <div className="book-service">
      <div className="back-button-wrapper">
        <BackButton />
      </div>
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-lg-6 book-service-desc" data-aos="fade-right">
            <div className="book-service-header">
              <h2>Book Service</h2>
              <BookFrom />
            </div>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in"
          >
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_jcikwtux.json"
              background="transparent"
              speed="1"
              style={{ width: "600px", height: "600px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}
