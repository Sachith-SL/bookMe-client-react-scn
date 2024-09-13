import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateUser from "./components/user/CreateUser";
import UpdateUser from "./components/user/UpdateUser";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Reservation from "./components/Reservation";
import ReservationList from "./components/ReservationList";
import FontAwasome from "./components/FontAwasome";
import AboutUs from "./components/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Reservation />,
      },
      {
        path: "/new",
        element: <CreateUser />,
      },
      {
        path: "/update/:id",
        element: <UpdateUser />,
      },
      {
        path: "/my-reservations",
        element: <ReservationList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about_us",
        element: <AboutUs />,
      }
    ],
    
    errorElement: <ErrorPage />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/fa",
    element: <FontAwasome />,
  },

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
