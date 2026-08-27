import React from "react";
import { NavLink } from "react-router";
import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-dark text-light py-4 px-8">
      <h1>Sky Dart</h1>
      <div className="flex gap-4  font-semibold text-lg">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-400" : "";
          }}
          to={"/home"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-400" : "";
          }}
          to={"/home/shop"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-400" : "";
          }}
          to={"/home/about"}
        >
          About
        </NavLink>
      </div>
      <div className="flex gap-4 cursor-pointer">
        <h1>
          Hey, <span className="text-yellow-400">User</span>
        </h1>
        <button>Cart</button>
        <LogOut />
      </div>
    </div>
  );
};

export default Navbar;
