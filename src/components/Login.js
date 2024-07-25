import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/images/Logo.svg";
import eye from "../assets/images/Eye.svg";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation (you'll likely want more robust validation)
    if (!email || !password) {
      setLoginError("Please enter both email and password.");
      return;
    }
    navigate("/home");
      };

  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="login-container">
        <p>WELCOME BACK</p>
        <h4>Log into your account</h4>

        <form onSubmit={handleLogin}>
          <div className="input-field">
            <div className="label-container">
              <label htmlFor="email">Email or Username</label>
            </div>
            <input
              placeholder="Enter your email or username"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="input-field">
            <div className="label-container">
              <label htmlFor="password">Password</label>
              <p className="forgot-password">Forgot password?</p>
            </div>
            <div className="password-container">
             <span id="input-container">
             <input
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <img
                src={eye}
                alt="Eye"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              />
             </span>
            </div>
          </div>

          {loginError && <p className="error">{loginError}</p>}

          <button className='continue-btn' type="submit">Login now</button>
          <p id="register">
            Not registered yet? <Link to="/register">Register &rarr;</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
