import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex justify-between items-center gap-4">
        <NavLink to={"/home"} className="border rounded cursor-pointer px-2">
          Home
        </NavLink>
        <NavLink to={"/contact"} className="border rounded cursor-pointer px-2">
          Contact
        </NavLink>
        <NavLink to={"/about"} className="border rounded cursor-pointer px-2">
          About
        </NavLink>
      </div>

      <button>Login</button>
    </nav>
  );
};

export default Navbar;
