import { useState } from "react";

function ManagingState() {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

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
  return (
    <>
      <ul className="list-group container">
        {list.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item.customerName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ManagingState;
