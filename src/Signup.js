import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("mobile");
  const [password, setPassword] = useState("mobile");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3100/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uname: email, pass: password }),
    });
    const data = await response.json();
    if (response.ok) {
      // If the response is successful, redirect the user to the home page
      history.push("/");
    } else {
      // If the response is not successful, display an error message
      setError(data.error);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-img"
          src="https://marcas-logos.net/wp-content/uploads/2020/01/Amazon-Logo-1-2048x1279.png"
        />
      </Link>
      <div className="login-info">
        <h1>Sign-in</h1>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signin-btn" type="submit">
            Sign button
          </button>
        </form>
        <p>
          By signing-in, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <Link to="/Sig" className="signup-btn">
          Create your amazon account
        </Link>
      </div>
    </div>
  );
}

export default Login;
