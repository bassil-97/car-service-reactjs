import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import { Routes, Route } from "react-router-dom";

import { useHttpClient } from "../../hooks/http-hook";
import { useAuth } from "../../hooks/auth-hook";

import Sidebar from "../../components/Sidebar/Sidebar";
import Avatar from "../../UI/Avatar";

// User dashboard Routes
import Orders from "./Orders/Orders";
import Account from "./Account/Account";
import Gifts from "./Gifts/Gifts";

// Admin dashboard Routes
import Users from "./Admin/Users/Users";

import moment from "moment";

export default function Dashboard() {
  const { sendRequest } = useHttpClient();
  const { userRole } = useAuth();
  const [userPoints, setUserPoints] = useState();

  const fetchUserData = async () => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    const responseData = await sendRequest(
      process.env.REACT_APP_BACKEND_URL + `/users/${storedData.userId}`
    );
    setUserPoints(responseData.user.points);
  };

  let routes;
  if (userRole === "user") {
    routes = (
      <Routes>
        <Route index element={<Orders userPoints={userPoints} />} />
        <Route path="/dashboard" element={<Orders userPoints={userPoints} />} />
        <Route
          path="/gifts"
          element={
            <Gifts userPoints={userPoints} fetchUserData={fetchUserData} />
          }
        />
        <Route path="/profile" element={<Account />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route index element={<Users />} />
        <Route path="/dashboard" element={<Users />} />
        <Route
          path="/gifts"
          element={
            <Gifts userPoints={userPoints} fetchUserData={fetchUserData} />
          }
        />
        <Route path="/profile" element={<Account />} />
      </Routes>
    );
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="home">
        <div className="dashboard-user-menu">
          <div>
            <h4 className="mb-1">
              welcome to dashboard {localStorage.getItem("username")}
            </h4>
            <h6>{moment().format("MMM Do YY")}</h6>
          </div>
          <Avatar name={localStorage.getItem("username")} />
        </div>
        {routes}
      </div>
    </div>
  );
}
