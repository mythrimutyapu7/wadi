import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">FibApp</h1>
      <div className="nav-links">
        <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/fibonacci">Fibonacci</Link>
      </div>
    </nav>
  );
};

export default Navbar;
