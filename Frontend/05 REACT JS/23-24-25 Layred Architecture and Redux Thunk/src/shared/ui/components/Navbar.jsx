import React from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-12 font-semibold bg-gray-700 text-white">
      <h1>Logo</h1>
      <div className="flex gap-4 cursor-pointer text-lg">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-400" : "";
          }}
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-400" : "";
          }}
          to={"/main/product"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-400" : "";
          }}
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>

      <div className=" flex gap-4 cursor-pointer ">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-400" : "";
          }}
          to={"/main/cart"}
        >
          <ShoppingCart />
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-400" : "";
          }}
          to={"/main/order"}
        >
          <Box />
        </NavLink>
      </div>

      <button className="cursor-pointer px-4 py-2 rounded-lg bg-red-700">
        LogOut
      </button>
    </div>
  );
};

export default Navbar;
