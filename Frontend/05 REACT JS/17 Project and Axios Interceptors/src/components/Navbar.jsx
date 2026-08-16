import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import ProductPage from "../pages/ProductPage";
import { AuthShop } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {

  const {setLoggedInData} = useContext(AuthShop)

  return (
    <div className="flex flex-col items-center justify-between p-4 border-r-2  h-screen">
      <h1>LOGO</h1>
      <div className="flex flex-col gap-4 items-center ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border rounded-lg px-2 font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border rounded-lg px-2 font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
          to={"/main/user"}
        >
          User
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border rounded-lg px-2 font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
          to={"/main/product"}
        >
          Product
        </NavLink>
      </div>
      <button onClick={() => {
          localStorage.removeItem('loggedInUser')
          setLoggedInData(null)
          toast.success('Logged Out Successfully')
      }} className="rounded-lg border px-2 cursor-pointer">Logout</button>
    </div>
  );
};

export default Navbar;
