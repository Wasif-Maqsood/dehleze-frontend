// src/Components/Pages/CheckoutPage/CheckoutPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderChkOut.css';

const OrderChkOut = ({ cart }) => {
  const navigate = useNavigate();

  const handleProceed = () => {
    // Implement the proceed to payment or order confirmation logic here
    alert("Proceeding to payment...");
    // Navigate to another page if needed
    navigate("/");
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="checkout-items">
          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <img src={`http://39.61.51.195:8007${item.image}`} alt={item.name} className="checkout-img" />
              <div className="checkout-details">
                <h5>{item.name}</h5>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
          <div className="checkout-summary">
            <p>Total Items: {cart.length}</p>
            <p>Total Price: ${getTotalPrice()}</p>
            <button className="proceed-btn" onClick={handleProceed}>
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderChkOut;
