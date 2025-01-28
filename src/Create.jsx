import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [newUser, setNewUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    department: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://backend-jsonserver-1-eclv.onrender.com/users", newUser)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => console.log("Error adding user:", error));
  };

  return (
    <div
      style={{
        height: "100vh",
        width:"100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        className="card shadow"
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <h1 className="text-center mb-4" style={{ color: "#343a40" }}>
          Create New User
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">ID</label>
            <input
              type="text"
              className="form-control"
              value={newUser.id}
              onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
              placeholder="Enter ID"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={newUser.firstname}
              onChange={(e) =>
                setNewUser({ ...newUser, firstname: e.target.value })
              }
              placeholder="Enter First Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={newUser.lastname}
              onChange={(e) =>
                setNewUser({ ...newUser, lastname: e.target.value })
              }
              placeholder="Enter Last Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              value={newUser.department}
              onChange={(e) =>
                setNewUser({ ...newUser, department: e.target.value })
              }
              placeholder="Enter Department"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              backgroundColor: "#007bff",
              border: "none",
              padding: "10px",
              fontSize: "16px",
            }}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
