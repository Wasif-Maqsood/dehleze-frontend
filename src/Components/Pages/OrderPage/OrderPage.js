// src/Components/Pages/OrderPage/OrderPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './OrderPage.css';

const OrderPage = ({ cart, removeFromCart }) => {
  // Convert the price to a number if it's a string
  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <div className="order-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={`http://39.61.51.195:8007${item.image}`} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {cart.length}</p>
            <p>Total Price: ${getTotalPrice()}</p>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderPage;
