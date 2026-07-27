import React from "react";

const Navbar = ({ setIsCartOpen = { setIsCartOpen } }) => {
  return (
    <div className="flex gap-4 justify-center bg-red-100 p-4">
      <h1
        onClick={() => {
          setIsCartOpen(false);
        }}
        className="text-lg border px-4 py-1 rounded-lg font-semibold bg-red-800 text-white cursor-pointer"
      >
        Home
      </h1>
      <h1
        onClick={() => {
          setIsCartOpen(true);
        }}
        className="text-lg border px-4 py-1 rounded-lg font-semibold bg-red-800 text-white cursor-pointer"
      >
        Cart
      </h1>
    </div>
  );
};

export default Navbar;
