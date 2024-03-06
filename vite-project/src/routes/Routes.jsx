// Routes.jsx
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/login";
import { UserContext } from "../context/UserContext";

function Navigator() {
  return (
    <UserContext.Consumer>
      {(contexto) => (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={contexto.logado ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      )}
    </UserContext.Consumer>
  );
}

export default Navigator;
