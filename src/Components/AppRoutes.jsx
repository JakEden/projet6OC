import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Logement from "../Pages/Logement"; // Import the ApartmentDetail component
import Notfound from "../Pages/Notfound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/apartments/:id" element={<Logement />} />{" "}
      {/* Add this route for ApartmentDetail */}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default AppRoutes;
