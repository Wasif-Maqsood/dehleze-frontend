import React from 'react';
import './SellerLogin.css';
import pic from '../../Assets/tokri.png'
import Content from '../Contents/Content';
const SellerLogin = () => {
  return (
    <>
    <div className="login-page">
      <div className="content-container">
        <div className="left-content">
          <h1 className='heading-h1'> Sell on Pakistan's <br/> Top Marketplace</h1>
          <p className='heeadin-p'>Create a Dehleez Seller Account in quick time and Access Millions of Customers Today!</p>
          <img src={pic} className='left-img' />
        </div>
        <div className="right-content">
          <div className="login-form">
            <h2>Login with Password</h2>
            <form>
              <div className="input-container">
                <input type="text" placeholder="Email/Mobile Number" required />
              </div>
              <div className="input-container">
                <input type="password" placeholder="Password" required />
              </div>
              <button type="submit">Login</button>
              <div className="extra-options">
                <a href="/reset-password">Reset Password</a> 
                <a href="/create-account">Create a new account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Content/>
    </>
  );
};

export default SellerLogin;
