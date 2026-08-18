import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
let About = lazy(() => import("../pages/About")); // this will help to reload this page only when the user click to this page
let Contact = lazy(() => import("../pages/Contact")); // code spilliting
import App from "../App";

// jisme lazy statement use hota hai usme <Suspense><Suspense/> ka use karke loading animation use kar sakte hai

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "/about",
          element: (
            // fallback ke help se loading animation laga sakte hai
            <Suspense fallback={<h1>Loading....</h1>}> 
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
