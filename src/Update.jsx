import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    department: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://backend-jsonserver-1-eclv.onrender.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log("Error fetching user:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://backend-jsonserver-1-eclv.onrender.com/users/${id}`, user)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log("Error updating user:", error));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width:"100vw",
        display: "flex",
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
          maxWidth: "500px",
          borderRadius: "15px",
          padding: "30px",
          backgroundColor: "#fff",
        }}
      >
        <h1
          className="text-center mb-4"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#343a40",
          }}
        >
          Edit User
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: "bold" }}>
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              required
              style={{
                border: "1px solid #ced4da",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              required
              style={{
                border: "1px solid #ced4da",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              style={{
                border: "1px solid #ced4da",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Department
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter department"
              value={user.department}
              onChange={(e) =>
                setUser({ ...user, department: e.target.value })
              }
              required
              style={{
                border: "1px solid #ced4da",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              backgroundColor: "#007bff",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
