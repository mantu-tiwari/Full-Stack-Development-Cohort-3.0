import React from "react";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  let isAdmin = false;
  if (!isAdmin) {
    console.log("hey i am running");
    return <Navigate to={"/home"} />;
  }

  return children;
};

export default ProtectedRoutes;
