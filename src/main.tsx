import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReadUsers from "./components/user/ReadUsers";
import CreateUser from "./components/user/CreateUser";
import UpdateUser from "./components/user/UpdateUser";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Reservation from "./components/Reservation";
import ReservationList from "./components/ReservationList";
import PlayingCard from "./components/PlayingCard";

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
      }
    ],
    
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/playing-card",
    element: <PlayingCard />,
  }

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
