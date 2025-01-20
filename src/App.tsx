import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="container">
    <NavBar/>
    <div className="row">
<div className="col-3">
<SideBar/>
</div>
<div className="col-9">

<Outlet />
</div>
    </div>
    </div>

    </>
  );
}

export default App;
