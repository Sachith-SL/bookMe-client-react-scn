import { useState } from "react";
import "./App.css";
import ReadUsers from "./components/ReadUsers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReadUsers />
    </>
  );
}

export default App;
