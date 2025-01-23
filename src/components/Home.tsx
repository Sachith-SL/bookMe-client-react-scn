import React, { useEffect, useState } from "react";
import { getAllUsers, getAuthtoken } from "../api/UserService";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [data, setData] = useState();

  const handleGetUser = async () => {
    try {
      const data = await getAllUsers(getAuthtoken());
      setData(data.message);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div>
      <p>Home</p>
      <p>{data}</p>
    </div>
  );
}

export default Home;
