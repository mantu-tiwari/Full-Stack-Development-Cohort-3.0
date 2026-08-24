import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";

const AppRoutes = () => {
  let dispatch = useDispatch();

  // hydrate user function
  let hydrateUser = () => {
    console.log("Hydrate user is calling.....");
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      toast.error("unAutharized user");
      return;
    }
    dispatch(addUser(loggedInUser));
  };
  useEffect(() => {
    hydrateUser();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
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
      path: "/main",
      element: <MainProtected/>,
      children: [
        {
          path: '',
          element: <MainLayout/>,
          children: [
            {
              path: '',
              element: <Home/>
            }
          ]
        }
      ]
      
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
