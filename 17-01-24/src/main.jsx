import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./routes/Page404/page404";
import Homepage from "./routes/Homepage/homepage";
import "./index.css";
import Product from "./routes/Product/product";
import About from "./routes/About/about";
import Contacts from "./routes/Contacts/contacts";
import styles from "./index.module.scss";

const router = createBrowserRouter([
  {
    path: "/", // Rotta statica
    element: <Homepage />,
    errorElement: <Page404 />,
  },
  {
    path: "products/:productId", // Rotta dinamica
    element: <Product />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
