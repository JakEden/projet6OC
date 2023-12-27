import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Notfound from "../pages/Notfound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/apartments/:id" element={<Logement />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default AppRoutes;
