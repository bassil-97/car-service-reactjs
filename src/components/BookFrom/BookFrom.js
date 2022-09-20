import React from "react";
import "./BookFrom.css";

import Modal from "../../UI/Modal";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useHttpClient } from "../../hooks/http-hook";
import { useAuth } from "../../hooks/auth-hook";

export default function BookFrom() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { token, login, logout, userId, user } = useAuth();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [serviceType, setServiceType] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [isBooked, setIsBooked] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setIsBooked(false);
    clearError();
  };

  const handleSelectedService = (e) => {
    let element = document.getElementById(e.target.id);
    let others = document.getElementsByClassName("service-item");

    for (let i = 0; i < others.length; i++) {
      others[i].classList.remove("selected-service");
    }

    element.classList.toggle("selected-service");
    setServiceType(e.target.id);
  };

  const bookService = async (e) => {
    e.preventDefault();
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/orders/create-order`,
        "POST",
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          address: address,
          date: date,
          time: time,
          serviceType: serviceType,
          userId: userId,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      if (responseData.booked) {
        setIsBooked(true);
        setOpen(true);
      }
    } catch (err) {
      setOpen(true);
    }
  };

  return (
    <>
      <Modal open={open} handleClose={handleClose} error={error} />
      {isBooked && (
        <Modal open={open} handleClose={handleClose} booked={isBooked} />
      )}
      <form className="row g-3" onSubmit={bookService}>
        <div className="col-md-6 form-floating">
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Bassil"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="col-md-6 form-floating">
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Alqadi"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="service-date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="service-date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="service-time" className="form-label">
            Time
          </label>
          <input
            type="time"
            className="form-control"
            id="service-time"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="service-type-container">
          <label htmlFor="service-type" className="form-label">
            Service type
          </label>
          <div className="row">
            <div className="col-md-4">
              <div
                className="service-item"
                id="inside-service"
                data-aos="zoom-in"
                data-aos-duration="800"
                onClick={(e) => handleSelectedService(e)}
              >
                <img
                  src="https://img.icons8.com/fluency/48/000000/automatic-car-wash.png"
                  alt="inside-washing"
                />
                <h6 className="mt-3 text-capitalize fw-bold">
                  inside cleaning
                </h6>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="service-item"
                id="outside-service"
                data-aos="zoom-in"
                data-aos-duration="900"
                onClick={(e) => handleSelectedService(e)}
              >
                <img
                  src="https://img.icons8.com/fluency/48/000000/car-cleaning.png"
                  alt="outside-washing"
                />
                <h6 className="mt-3 text-capitalize fw-bold">
                  outside cleaning
                </h6>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="service-item"
                id="both-service"
                data-aos="zoom-in"
                data-aos-duration="1000"
                onClick={(e) => handleSelectedService(e)}
              >
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/48/000000/external-car-wash-cleaning-flaticons-flat-flat-icons.png"
                  alt="both-washing"
                />
                <h6 className="mt-3 text-capitalize fw-bold">
                  inside & outside cleaning
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <button type="submit" className="btn btn-primary">
            Book Service
          </button>
        </div>
      </form>
      <div className="mt-4 d-flex align-items-center justify-content-center">
        {isLoading && <LoadingSpinner />}
      </div>
    </>
  );
}
