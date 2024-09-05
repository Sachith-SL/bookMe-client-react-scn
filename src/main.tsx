import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReadUsers from "./components/ReadUsers";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReadUsers />,
    children: [
      {
        path: "/:id",
        element: <UpdateUser />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/new",
    element: <CreateUser />,
  },
  {
    path: "/update/:id",
    element: <UpdateUser />,
  }

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
