import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContextProvider } from "./context/MyContext.jsx";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./router/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AppRoutes />
    <Toaster position="top-right" />
  </ContextProvider>,
);
