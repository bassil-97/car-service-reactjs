import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import BookService from "./pages/BookService/BookService";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";

import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";

function App() {
  const { token, login, logout, userId } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<BookService />} />
        <Route path="/dashboard/*" element={<Dashboard />} exact />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    );
  }

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        {routes}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
