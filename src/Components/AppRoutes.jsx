import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Logement from "../Pages/Logement";
import Notfound from "../Pages/Notfound";

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
