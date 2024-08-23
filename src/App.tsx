import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReservationList from "./components/ReservationList";
import MyComponent from "./components/MyComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ReservationList /> */}
      <MyComponent/>
    </>
  );
}

export default App;
