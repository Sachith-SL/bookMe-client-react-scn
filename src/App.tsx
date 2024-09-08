import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="container">
    <NavBar/>
    <Outlet />
    </div>

    </>
  );
}

export default App;
