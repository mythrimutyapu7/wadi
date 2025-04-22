// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth";
import "../styles/Form.css";


const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser?.username === input.username &&
      storedUser?.password === input.password
    ) {
      auth.login(() => navigate("/fibonacci"));
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        onChange={(e) => setInput({ ...input, username: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setInput({ ...input, password: e.target.value })}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
