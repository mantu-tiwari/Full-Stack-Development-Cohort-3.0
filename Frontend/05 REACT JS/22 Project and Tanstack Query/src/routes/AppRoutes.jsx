import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Shop from "../pages/Shop";
import About from "../pages/About";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { toast } from "react-toastify";
import AuthProtected from "./protected/AuthProtected";
import MainProtected from "./protected/MainProtected";

const AppRoutes = () => {
  let dispatch = useDispatch();
  const lsLoginData = JSON.parse(localStorage.getItem("loginData"));
  const hydration = () => {
    if (!lsLoginData) {
      toast.error("UnAuthaurized User");
      return;
    }
    dispatch(addUser(lsLoginData));
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
      path: "/home",
      element: <MainProtected />,
      children: [
        {
          path: "/home",
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
