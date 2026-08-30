import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import toast from "react-hot-toast";
import AuthProtected from "./protected/AuthProtected";
import MainProtected from "./protected/MainProtected";

const AppRoutes = () => {
  let dispatch = useDispatch();
  let getLsLoginData = JSON.parse(localStorage.getItem("lsLoginUserData"));
  const hydration = () => {
    if (!getLsLoginData) {
      toast.error("unAutharized access");
    }
    dispatch(addUser(getLsLoginData));
  };
  useEffect(() => {
    hydration();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: "about",
              element: <About />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
