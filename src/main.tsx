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
import ContentArea from "./components/ContentArea";
import Test from "./components/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ContentArea />,
      },
      {
        path: "/new",
        element: <CreateUser />,
      },
      {
        path: "/read",
        element: <ReadUsers />,
      },
      {
        path: "/read/update/:id",
        element: <UpdateUser />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path:"/test",
    element: <Test />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
