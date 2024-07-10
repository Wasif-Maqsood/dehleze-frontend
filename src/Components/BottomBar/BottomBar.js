import React from "react";
import "./BottomBar.css";

const BottomBar = () => {
  return (
    <div className="bottom-bar-container">
      <div className="bottom-bar">
        <div className="column">
          <h1>Company</h1>
          <h4>About us</h4>
          <h4>Our Store</h4>
          <h4>Contact Us</h4>
        </div>
        <div className="column">
          <h1>Career Opportunities</h1>
          <h4>Selling Program</h4>
          <h4>Cooperation</h4>
          <h4>Advertise</h4>
        </div>
        <div className="column">
          <h1>How to Buy</h1>
          <h4>Buyer Protection</h4>
          <h4>Making Payment</h4>
          <h4>Delivery Options</h4>
        </div>
        <div className="column">
          <h1>Support</h1>
          <h4>Privacy Policy</h4>
          <h4>FAQ's</h4>
          <h4>Other</h4>
        </div>
        <ion-icon name="logo-paypal"></ion-icon>
        <ion-icon name="card-outline"></ion-icon>
      </div>
      <div className="divider"></div>
      <div className="payment-methods">
        <p>We accept MasterCard and PayPal</p>
        
        <div className="icon">
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-whatsapp"></ion-icon>

        </div>
      </div>
    </div>
  );
};

export default BottomBar;
