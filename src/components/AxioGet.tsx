import React, { useState, useEffect } from "react";
import axios from "axios";

const AxioGet = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an Axios instance if needed, or use axios directly.
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080/api/reservations", // replace with your API base URL
    });

    axiosInstance
      .get("") // replace with your endpoint
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // empty dependency array to run once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AxioGet;
