import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers, getAuthtoken } from "../../api/UserService";

interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  role: string;
}

function ReadUser() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const handleGetUser = async () => {
    try {
      const data = await getAllUsers(getAuthtoken());
      setData(data.ourUserList);
    } catch (error) {}
  };
  const deleteUser = (id: number) => {
    console.log(`delete ${id}`);
    if (window.confirm("Are you sure you want to delete this user?")) {
      // Continue with the delete operation
    } else {
      // Cancel the delete operation
    }
    window.location.reload();
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">email</th>
              <th scope="col">City</th>
              <th scope="col">Role</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody key={refresh}>
            {data.map((user: User, index: number) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.role}</td>
                <td>
                  <Link to="/" className="btn btn-warning">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link to={"/"} className="btn btn-danger">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
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

export default ReadUser;
