import React from "react";
import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  let isAuthincated = JSON.parse(localStorage.getItem("isLoggedIn"));
  if (!isAuthincated) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default MainProtected;
