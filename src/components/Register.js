// src/components/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";


const Register = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
