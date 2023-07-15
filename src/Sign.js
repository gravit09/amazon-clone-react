import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Sign() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-img"
          src="https://marcas-logos.net/wp-content/uploads/2020/01/Amazon-Logo-1-2048x1279.png"
          alt="amz-img"
        />
      </Link>
      <div className="login-info">
        <h1>Sign-up</h1>
        <form>
          <h5>Enter your Username</h5>
          <input type="text" />
          <h5>Enter Password</h5>
          <input type="password" />
          
          <button className="signin-btn" type="submit">
            signup button
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link to="/Login">
          <button className="signup-btn">signin</button>
        </Link>
      </div>
    </div>
  );
}

export default Sign;
