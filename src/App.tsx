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

function App() {
  const [count, setCount] = useState(0);

  const [isVisible, setVisible] = useState(false);

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

  const handleOnClick = () => {
    setVisible(true);
    console.log("Clicked");
  };

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
    </>
  );
}

export default App;
