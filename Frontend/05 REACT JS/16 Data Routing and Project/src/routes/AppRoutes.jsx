import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Intro from "../pages/Intro";
import Services from "../pages/Services";
import Category from "../pages/Category";
import MainLayout from "../layout/MainLayout";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Intro />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/category",
          element: <Category />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
