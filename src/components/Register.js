import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import eye from "../assets/images/Eye.svg";

const Register = ({
  isModal = false,
  handleClose
}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className='register'>
      <div className="register-container">
        {isModal && <div className='close-div' onClick={handleClose}>
          {closeIcon()}
        </div>}
        <p>SIGN UP</p>
        <h4>Create an account to continue</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input placeholder="Enter your email"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input placeholder="Choose a preferred username"
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>

            <span id="input-container">
              <input placeholder="Choose a strong password"
                type={showPassword ? 'text' : 'password'}
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
          <button className='continue-btn' type="submit">Continue</button>
        </form>
        <p id='register'>Already have an account? <Link to="/"> Login &rarr;</Link></p>
      </div>
    </div>
  );
};

export default Register;


const closeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
      <g fill="none"><circle cx="12" cy="12" r="12" fill="black" fill-opacity="0.25" />
        <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="m16 8l-8 8m0-8l8 8" />
      </g>
    </svg>
  )
}