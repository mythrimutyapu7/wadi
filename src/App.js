import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Fibonacci from "./components/Fibonacci";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/fibonacci"
          element={
            <ProtectedRoute>
              <Fibonacci />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
