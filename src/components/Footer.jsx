import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} ToDo App</p>
        <nav className="footer-link">
        <Link to="/about">
          About
        </Link>
        <Link to="/privacy">
          Privacy Policy
        </Link>
        <Link to="/terms">
          Terms of Service
        </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
