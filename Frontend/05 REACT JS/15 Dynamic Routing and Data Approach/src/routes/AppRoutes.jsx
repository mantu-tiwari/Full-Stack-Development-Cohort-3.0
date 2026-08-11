import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/about"
          element={
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/detail/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
