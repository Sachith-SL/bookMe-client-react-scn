// this is for loop a list and display example

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem : (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}:Props) {
  const list = [
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

  // const handleClick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={selectedIndex ===index ?"list-group-item active":"list-group-item"}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
