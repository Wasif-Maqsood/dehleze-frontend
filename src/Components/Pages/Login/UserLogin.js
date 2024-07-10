import React, { useState } from "react";
import "./UserLogin.css";
import logo from "../../Assets/Logo.png";
import ecom from "../../Assets/Ecom.png";
import ecom1 from "../../Assets/Ecom1.png";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = ({ setIsAuthenticated, setUsername }) => {
  const [username, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://39.61.51.195:8007/account/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login successful:", data);
      setIsAuthenticated(true);
      setUsername(username);
      navigate("/products", { state: { username } }); // Pass the username as state
    } else {
      console.error("Login failed:", data);
      alert("Login failed: " + data.message);
    }
  };

  return (
    <>
      <div className="register-container">
        <div className="register-left">
          <div>
            <img className="ecom1" src={ecom1} alt="Ecom1" />
            <h4>Shop Smart, Save More – Welcome to Dehleez</h4>
            <img className="ecom" src={ecom} alt="Ecom" />
          </div>
        </div>
        <div className="register-right">
          <h1>User Login</h1>
          <form className="register-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={username}
              onChange={(e) => setUsernameInput(e.target.value)}
              required
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
            <button type="submit">Login</button>
          </form>
          <button className="google-signup mt-3">
            <ion-icon name="logo-google" className="logo-google" />
            Sign up with Google
          </button>
          <button className="facebook-signup ">
            <ion-icon name="logo-facebook" />
            Continue with Facebook
          </button>
 
          <p>
            Don't have an account? <Link to="/signupuser">Register</Link>
          </p>
          <p>
            By logging in, you agree to the{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
