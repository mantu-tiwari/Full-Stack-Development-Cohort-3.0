import React from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[1fr_5fr] ">
      <Navbar />
      <div className="p-4 overflow-auto h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
