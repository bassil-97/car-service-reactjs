import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

export default function Navbar({ logout }) {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          washing
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                why Carwash
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                packages
              </Link>
            </li>
          </ul>
          <div className="main-user-info">
            <img
              src="https://img.icons8.com/fluency/38/000000/username.png"
              alt="user-logo"
            />
            <h6 className="mb-0">welcome {userName}</h6>
            <button className="btn btn-primary ms-3" onClick={logout}>
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
