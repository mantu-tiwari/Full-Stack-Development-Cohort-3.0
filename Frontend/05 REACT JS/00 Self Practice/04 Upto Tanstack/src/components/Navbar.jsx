import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-700 text-white">
      <h1>LOGO</h1>
      <div className="flex gap-4 justify-between items-center px-4 text-xl font-semibold">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-400" : "";
          }}
          end
          to={"/main"}
        >
          Home
        </NavLink>
        <NavLink className={({isActive}) => {
            return isActive ? 'text-yellow-400' : ''
        }} to={"/main/shop"}>Shop</NavLink>
        <NavLink className={({isActive}) => {
            return isActive ? 'text-yellow-400' : ''
        }} to={"/main/about"}>About</NavLink>
      </div>
      <button>LogOut</button>
    </div>
  );
};

export default Navbar;
