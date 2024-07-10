import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="reg-cards">
        <div className="card red">
          <p className="tip">As a Seller</p>
          <p className="second-text">Make own Store</p>
          <Link className="register-btn1" to={"/sellerlogin"} >Register</Link>
        </div>
        <div className="card blue">
          <p className="tip">Shopping</p>
          <p className="second-text">Shopping to enjoying</p>
          <Link className="register-btn2" to={"/signupuser"}>Register</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
