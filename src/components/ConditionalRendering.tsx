// this is for loop a list and display example

function ConditionalRendering() {
  const list = [
    {
      id: "001",
      customerName: "Sanju",
    },
    {
      id: "002",
      customerName: "Iraj",
    },
  ];

  const getList = () => (list.length === 0 ? <p>No item is found</p> : null);

  return (
    <>
      <div className="container">
        <h1>List</h1>
        <p>{getList()}</p>
        <p>{list.length === 0 && <p>No item is found</p>}</p>
        <ul className="list-group">
          {list.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.id} - {item.customerName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ConditionalRendering;
