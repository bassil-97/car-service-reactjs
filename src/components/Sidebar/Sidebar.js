import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

import { AuthContext } from "../../context/auth-context";

export default function Sidebar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const body = document.querySelector("body");
    let sidebar = body.querySelector(".sidebar");
    let toggle = body.querySelector(".toggle");
    let modeSwitch = body.querySelector(".toggle-switch");
    let modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });

    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
      } else {
        modeText.innerText = "Dark mode";
      }
    });
  }, []);

  const logout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <nav className="sidebar close">
      <header>
        <div className="image-text">
          <span className="image">
            {/*<!--<img src="logo.png" alt="">--> */}
            <img
              src="https://img.icons8.com/fluency/48/000000/automatic-car-wash.png"
              alt="logo"
            />
          </span>

          <div className="text logo-text">
            <span className="name">Washing</span>
            <span className="profession">Cleaning App</span>
          </div>
        </div>

        <i className="bx bx-chevron-right toggle"></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/dashboard/">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/dashboard/gifts">
                <i className="bx bx-gift icon"></i>
                <span className="text nav-text">Gifts</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/dashboard/profile">
                <i className="bx bx-user-circle icon"></i>
                <span className="text nav-text">Profile</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="" onClick={logout}>
            <i className="bx bx-log-out icon"></i>
            <span className="text nav-text">Logout</span>
          </li>

          <li className="mode">
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">Dark mode</span>

            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}
