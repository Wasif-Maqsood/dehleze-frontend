import React, { useState } from 'react';
import './SignUpUser.css';
import logo from '../../Assets/Logo.png';
import ecom from '../../Assets/Ecom.png';
import ecom1 from '../../Assets/Ecom1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUpUser = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://39.61.51.195:8007/account/seller_register/', {
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        username: formData.userName,
        password: formData.password,
        phone_number: formData.phone,
      });
      console.log(response.data);
      alert('Registration successful!');
      // Redirect or perform any other actions upon successful registration
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed!');
    }
  };

  return (
    <>
      <div className="register-container">
        <div className="register-left">
          <div className="left-card">
            <img className="ecom1" src={ecom1} alt="Ecom1" />
            <h5>Shop Smart, Save More – Welcome to Dehleez</h5>
            <img className="ecom" src={ecom} alt="Ecom" />
          </div>
        </div>
        <div className="register-right">
          <h1>User Account</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="name-fields">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="User Name"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Phone No"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
          </form> 
          <button className="google-signup mt-3">
            <ion-icon name="logo-google" className="logo-google" />
            Sign up with Google
          </button>
          <button className="facebook-signup ">
            <ion-icon name="logo-facebook" />
            Continue with Facebook
          </button>
          <p>Already have an account? <Link to="/userlogin">Login</Link></p>
          <p>By signing up you agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></p>
        </div>
      </div>
    </>
  );
};

export default SignUpUser;
