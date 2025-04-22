// src/components/Fibonacci.js
import React, { useState } from "react";
import { auth } from "../auth";
import { useNavigate } from "react-router-dom";
import "../styles/Fibonacci.css";


const Fibonacci = () => {
  const [num, setNum] = useState(0);
  const [series, setSeries] = useState([]);
  const navigate = useNavigate();

  const generateFibonacci = () => {
    const n = parseInt(num);
    let a = 0,
      b = 1,
      result = [0];

    for (let i = 1; i < n; i++) {
      result.push(b);
      [a, b] = [b, a + b];
    }
    setSeries(result);
  };

  const handleLogout = () => {
    auth.logout(() => navigate("/login"));
  };

  return (
    <div  className="fib-container">
      <h2>Fibonacci Generator</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter count"
      />
      <button onClick={generateFibonacci}>Generate</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h4>Series:</h4>
        <p>{series.join(", ")}</p>
      </div>
    </div>
  );
};

export default Fibonacci;
