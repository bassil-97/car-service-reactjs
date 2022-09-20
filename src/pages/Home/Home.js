import React, { useEffect, useState } from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { useHttpClient } from "../../hooks/http-hook";
import { useAuth } from "../../hooks/auth-hook";

import { Container } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import PricingCard from "../../components/PricingCard/PricingCard";
import ClientReviewItem from "../../components/ClientReviewItem/ClientReviewItem";

export default function Home() {
  const { sendRequest } = useHttpClient();
  const { token, login, logout, userId, user } = useAuth();

  const [pricingPackages, setPricingPackaging] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/pricing`
      );

      setPricingPackaging(responseData["packages"]);
    };
    fetchPackages();
  }, [sendRequest]);

  return (
    <>
      <Container
        className="home-container"
        maxWidth={false}
        disableGutters
        sx={{ minHeight: "100vh" }}
      >
        <Navbar logout={logout} />
        <div className="container">
          <div className="row w-100">
            <div
              className="col-lg-6 d-flex align-items-start justify-content-center flex-column home-page-content"
              data-aos="zoom-in"
            >
              <h3 className="mb-4">
                detailing <b>wash</b> with <b>personal touch</b>
              </h3>
              <h5 className="text-capitalize mb-4">
                from express details to full inside & out
              </h5>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
              <button className="btn text-capitalize" type="button">
                <Link to="/register" className="get-started-link">
                  get started
                </Link>
              </button>
            </div>
            <div
              className="col-lg-6 d-flex align-items-center justify-content-center"
              data-aos="zoom-in"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_wwcdjc1c.json"
                background="transparent"
                speed="1"
                style={{ width: "600px", height: "600px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </Container>
      <div className="car-wash-services">
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-12">
              <div className="car-wash-header">
                <h5 className="mb-4 text-capitalize">what we do</h5>
                <h1 className="text-uppercase section-title">
                  the future of car wash and repairing
                </h1>
              </div>
              <div className="car-wash-services-list">
                <ServiceItem
                  title="automated wash"
                  description={
                    "we guarantee you the best car wash experience, expecptional service"
                  }
                  imgURL={"https://img.icons8.com/fluency/38/228BE6/car.png"}
                />
                <ServiceItem
                  title="vacuum clean"
                  description={
                    "we guarantee you the best car wash experience, expecptional service"
                  }
                  imgURL={
                    "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/38/000000/external-vacuum-cleaning-flaticons-lineal-color-flat-icons-3.png"
                  }
                />
                <ServiceItem
                  title="break fixing"
                  description={
                    "we guarantee you the best car wash experience, expecptional service"
                  }
                  imgURL={
                    "https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/38/000000/external-break-car-parts-and-service-icongeek26-outline-colour-icongeek26.png"
                  }
                />
                <ServiceItem
                  title="battery replacement"
                  description={
                    "we guarantee you the best car wash experience, expecptional service"
                  }
                  imgURL={
                    "https://img.icons8.com/parakeet/38/000000/experimental-car-battery-parakeet.png"
                  }
                />
                <ServiceItem
                  title="car diagnostic"
                  description={
                    "we guarantee you the best car wash experience, expecptional service"
                  }
                  imgURL={
                    "https://img.icons8.com/officel/38/000000/tire-iron.png"
                  }
                />
                <ServiceItem
                  title="oil change"
                  description={
                    "we guarantee you the best car wash experience, expecptional service"
                  }
                  imgURL={
                    "https://img.icons8.com/nolan/38/engine-oil-level.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-packages">
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-12">
              <div className="pricing-package-header">
                <h5 className="mb-4 text-capitalize">our packages</h5>
                <h1 className="text-uppercase section-title">
                  pick a plan that's right for you
                </h1>
              </div>
              <div className="pricing-list" data-aos="fade-left">
                {pricingPackages?.map((card, index) => (
                  <PricingCard key={index} card={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clients-reviews">
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-12">
              <div className="client-reviews-header">
                <h5 className="mb-4 text-capitalize">Clients reviews</h5>
                <h1 className="text-uppercase section-title">
                  our clients reviews are important for us
                </h1>
              </div>
              <div className="clients-reviews-list">
                <ClientReviewItem
                  name="Daniel Pringle"
                  avatar={
                    "https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/testimonial-3.jpg"
                  }
                  review={
                    "Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque."
                  }
                />
                <ClientReviewItem
                  name="Billy Adams"
                  avatar={
                    "https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/testimonial-1.jpg"
                  }
                  review={
                    "Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque."
                  }
                />
                <ClientReviewItem
                  name="Daniel Pringle"
                  avatar={
                    "https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/testimonial-3.jpg"
                  }
                  review={
                    "Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
