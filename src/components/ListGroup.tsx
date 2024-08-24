// this is for loop a list and display example

function ListGroup() {
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
          <li key={index} className="list-group-item">
            {item.id} - {item.customerName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
