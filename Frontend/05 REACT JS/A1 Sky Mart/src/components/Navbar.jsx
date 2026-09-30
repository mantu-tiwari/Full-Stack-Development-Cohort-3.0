import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { MyShop } from "../context/MyContext";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartProduct, setCurrentPage } = useContext(MyShop);
  let navigate = useNavigate()

  const commingSoon = () => {
    toast.error("Feature Comming Soon");
  };

  return (
    <header className="  sticky top-0 z-50 bg-[#090909]/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-lime-400 flex items-center justify-center">
              <i className="fa-solid fa-bolt text-black text-lg cursor-pointer"></i>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Sky<span className="text-lime-400">Mart</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "text-lime-400 font-medium"
                  : "text-white font-medium ";
              }}
              end
              to={"/main"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "text-lime-400 font-medium"
                  : "text-white font-medium ";
              }}
              to={"/main/shop"}
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "text-lime-400 font-medium"
                  : "text-white font-medium ";
              }}
              to={"/main/about"}
            >
              About
            </NavLink>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-xl text-white hover:text-lime-400">
              <i className="fa-regular fa-heart"></i>
            </button>
            <button
              onClick={() => {
                navigate('/main/cart')
              }}
              className="cursor-pointer relative text-xl text-white hover:text-lime-400"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="absolute -top-2 -right-3 bg-lime-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartProduct.length}
              </span>
            </button>
            <button className="text-xl text-white hover:text-lime-400">
              <i className="fa-regular fa-user"></i>
            </button>
            <button
              onClick={() => {
                toast.error("Logout Successfully");
                localStorage.setItem("isLoggedIn", "false");
                navigate('/')
              }}
              className="bg-lime-400 hover:bg-lime-300 text-black px-5 py-2 rounded-full font-semibold transition"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-white"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#111111]">
          <nav className="flex flex-col px-6 py-6 gap-5">
            <a href="#" className="text-white hover:text-lime-400 transition">
              Home
            </a>
            <a href="#" className="text-white hover:text-lime-400 transition">
              Shop
            </a>
            <a href="#" className="text-white hover:text-lime-400 transition">
              About
            </a>
            <hr className="border-zinc-700" />
            <button
              onClick={() => {
                commingSoon();
              }}
              className="text-left text-white"
            >
              <i className="fa-regular fa-heart mr-3"></i>
              Wishlist
            </button>
            <button
              onClick={() => {
                commingSoon();
              }}
              className="text-left text-white"
            >
              <i className="fa-solid fa-cart-shopping mr-3"></i>
              Cart
            </button>
            <button
              onClick={() => {
                commingSoon();
              }}
              className="text-left text-white"
            >
              <i className="fa-regular fa-user mr-3"></i>
              Profile
            </button>
            {/* <button onClick={() => {
                commingSoon()
            }} className="bg-lime-400 text-black py-3 rounded-xl font-semibold mt-2">
              Login
            </button> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
