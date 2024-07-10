import React from 'react';
import './Content.css';
import pic1 from '../../Assets/Asset 23.png';
import pic2 from '../../Assets/Asset 24.png';
import pic3 from '../../Assets/Asset 25.png';
import pic4 from '../../Assets/Asset 26.png';
import pic5 from '../../Assets/Asset 27.png';
import pic6 from '../../Assets/Asset 28.png';

const Content = () => {
    return (
        <div className="container">
            <section className="why-sell">
                <h1>Why Sell on Dehleez</h1>
                <div className="benefits">
                    <div className="benefit">
                        <img src={pic1} alt="Reach" />
                        <div className="text">
                            <h2>Reach</h2>
                            <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                        </div>
                    </div>
                    <div className="benefit">
                        <img src={pic2} alt="Free Registration" />
                        <div className="text">
                            <h2>Free Registration</h2>
                            <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                        </div>
                    </div>
                    <div className="benefit">
                        <img src={pic3} alt="Reliable Shipping" />
                        <div className="text">
                            <h2>Reliable Shipping</h2>
                            <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                        </div>
                    </div>
                    <div className="benefit">
                        <img src={pic4} alt="Timely Payments" />
                        <div className="text">
                            <h2>Timely Payments</h2>
                            <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                        </div>
                    </div>
                    <div className="benefit">
                        <img src={pic5} alt="Marketing Tools" />
                        <div className="text">
                            <h2>Marketing Tools</h2>
                            <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                        </div>
                    </div>
                    <div className="benefit">
                        <img src={pic6} alt="Customer Support" />
                        <div className="text">
                            <h2>Customer Support</h2>
                            <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="steps">
                <h1>5 Simple Steps to Start Selling</h1> 
                <br/>
                <div className="spacer"></div> {/* Add a div with a className that adds some space */}

                <div className="step">
                    <img src={pic1} alt="Signup for Free" />
                    <div className="text">
                        <h2>Signup for Free</h2>
                        <p>Create your account through our website or mobile app with just your phone number</p>
                    </div>
                </div>
                <div className="step">
                    <img src={pic2} alt="Add Profile Information" />
                    <div className="text">
                        <h2>Add Profile Information</h2>
                        <p>Complete your profile by providing your email and store name so that we can identify you</p>
                    </div>
                </div>
                <div className="step">
                    <img src={pic3} alt="Add Address Information" />
                    <div className="text">
                        <h2>Add Address Information</h2>
                        <p>Provide all address details of your business</p>
                    </div>
                </div>
                <div className="step">
                    <img src={pic4} alt="Add ID & Bank Information" />
                    <div className="text">
                        <h2>Add ID & Bank Information</h2>
                        <p>Add in your ID & Business related details. Include necessary bank information for payments</p>
                    </div>
                </div>
                <div className="step">
                    <img src={pic5} alt="List Products" />
                    <div className="text">
                        <h2>List Products</h2>
                        <p>Add products to your store through seller center. Start selling as soon as your products go live after going through quality control</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Content;
