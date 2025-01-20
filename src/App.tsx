import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReservationList from "./components/ReservationList";
import AxioGet from "./components/AxioGet";
import ListGroup from "./components/ListGroup";
import ConditionalRendering from "./components/ConditionalRendering";
import HandlingEvent from "./components/HandlingEvent";
import ManagingState from "./components/ManagingState";
import PassingDataViaProps from "./components/PassingDataViaProps";
import PassingFuntionsViaProps from "./components/PassingFuntionsViaProps";
import PassingChildren from "./components/PassingChildren";
import Button from "./components/Button";
import Alert from "./components/Alert";
import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);

  const [isVisible, setVisible] = useState(false);
  const [isVisible2, setVisible2] = useState(true);

  const userList = [
    {
      id: "001",
      customerName: "Sanju",
    },
    {
      id: "002",
      customerName: "Iraj",
    },
    {
      id: "003",
      customerName: "Pawan",
    },
  ];

  const handleSelectItem = (item: any) => {
    console.log(item);
  };

  const handleOnClick1 = () => {
    setVisible(false);
  };
  const handleOnClick2 = () => {
    setVisible2(false);
  };
  const handleOnClick = () => {
    setVisible(true);
    console.log("Clicked");
  };

  let items = ["New York","San Francisco", "Tokyo"]

  return (
    <>
      {/* <ReservationList /> */}
      {/* <AxioGet/> */}
      {/* <ListGroup/> */}
      {/* <ConditionalRendering/> */}
      {/* <HandlingEvent/> */}
      {/* <ManagingState/> */}
      {/* <PassingDataViaProps heading="List" myList={userList}/> */}
      {/* <PassingFuntionsViaProps heading="List" myList={userList} onSelectItem={handleSelectItem}/> */}
      {/* <PassingChildren>
        <h6>This is a <span> <i>danger</i></span> alert—check it out</h6>
        </PassingChildren> */}

      {isVisible && (
        <Alert color="danger" onClick={handleOnClick1}>
          fucking awsomee
        </Alert>
      )}

      <Button onClick={handleOnClick} color="info">
        My Button
      </Button>

      {isVisible2 && (
      <Alert 
        color="primary"
        onClick={handleOnClick2}
        >
       <h1>Aha Patiyo... Kohomada?</h1>
      </Alert>
)}
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}

    </>
  );
}

export default App;
