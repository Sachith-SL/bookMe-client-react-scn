import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

interface User {
  id: number;
  name: string;
  mobile: string;
  isLoyalty: string;
}

function ReadUsers() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Create an Axios instance if needed, or use axios directly.
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/users", // replace with your API base URL
  });

  const deleteUser = (id) => {
    console.log(`delete ${id}`);
    axiosInstance
      .delete(`/${id}`)
      .then(() => {
        console.log("delete successfull");
      })
      .catch(() => {
        console.log("error in delete");
      });
  };

  useEffect(() => {
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
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Loyalty Status</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data != null &&
              data.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.mobile}</td>
                  <td>
                    {user.isLoyalty === "Y" ? (
                      <span className="badge bg-success text-wrap text-warning">
                        Loyalty Customer
                      </span>
                    ) : (
                      <span className="badge bg-info text-wrap text-danger">
                        Normal Customer
                      </span>
                    )}
                  </td>
                  <td>
                    <NavLink
                      to={`/${user.id}`}
                      className={({ isActive }) => {
                        return isActive
                          ? "btn btn-warning"
                          : "btn btn-secondary";
                      }}
                    >
                      Edit
                    </NavLink>
                  </td>
                  <td>
                    <Link
                      to={"/"}
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            <Outlet />
          </tbody>
        </table>
        <button className="btn btn-primary">
          <Link className="btn btn-primary" to="/new">
            Create New User
          </Link>
        </button>
      </div>
    </>
  );
}

export default ReadUsers;
