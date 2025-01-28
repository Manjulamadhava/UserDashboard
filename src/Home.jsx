import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-jsonserver-1-eclv.onrender.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("Error fetching users:", error));
  }, []);

  const handleDeleteUser = (id) => {
    axios
      .delete(`https://backend-jsonserver-1-eclv.onrender.com/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.log("Error deleting user:", error));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width:"100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      <div
        className="card shadow"
        style={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <h1
          className="text-center mb-4"
          style={{
            color: "#343a40",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          User Management Dashboard
        </h1>
        <div className="d-flex justify-content-end mb-3">
          <Link
            to="/add-user"
            className="btn btn-primary"
            style={{
              backgroundColor: "#007bff",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Add New User
          </Link>
        </div>
        <table
          className="table table-hover table-bordered"
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
            }}
          >
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.department}</td>
                  <td>
                    <Link
                      to={`/edit-user/${user.id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
