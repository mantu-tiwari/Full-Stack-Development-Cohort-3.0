import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Route, Routes } from "react-router";
import Details from "../components/Details";
import Company from "../components/Company";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company/>} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
