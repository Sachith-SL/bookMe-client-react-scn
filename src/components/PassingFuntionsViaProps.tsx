import { useState } from "react";

interface userList {
  id: string;
  customerName: string;
}

interface Props {
  myList: userList[];
  heading: string;
  onSelectItem: (item: userList) => void;
}

function PassingFuntionsViaProps({ myList, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group container">
        {myList.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item.customerName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PassingFuntionsViaProps;
