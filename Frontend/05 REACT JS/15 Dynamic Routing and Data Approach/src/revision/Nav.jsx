import React, { useState } from "react";
import Home from "./Home";
import About from "./About";

const Nav = ({ setToggle }) => {
  return (
    <div className="flex justify-between p-4">
      <h1>Logo</h1>
      <div className="flex justify-between gap-4 ">
        <h1
          onClick={() => {
            setToggle("home");
          }}
          className="border rounded-lg px-2 cursor-pointer"
        >
          Home
        </h1>
        <h1
          onClick={() => {
            setToggle("about");
          }}
          className="border rounded-lg px-2 cursor-pointer"
        >
          About
        </h1>
        <h1
          onClick={() => {
            setToggle("contact");
          }}
          className="border rounded-lg px-2 cursor-pointer"
        >
          contact
        </h1>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Nav;
