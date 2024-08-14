import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/todos" className="nav-link">
        Todos
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
    </nav>
  );
}
