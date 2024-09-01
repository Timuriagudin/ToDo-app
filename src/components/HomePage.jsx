import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h1>Welcome to the ultimate task management app!</h1>
        <h2>
          Here, you can create, edit, update the status, or remove your tasks.
        </h2>
      </div>
      <div className="right-section">
        <form className="login-form">
          <input type="email" name="email" placeholder="email" required />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <nav className="forgot-password">
            <Link to="/" className="forgot-password-link">
              Forgot password
            </Link>
          </nav>
          <button type="submit">Sign in</button>
          <button type="button">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
