// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Products from './Components/Pages/Products/Products';
import NavigationBar from './Components/Navbar/Navbar';
import Register from './Components/Pages/Register/Register';
import SignUpSeller from './Components/Pages/SignUp/SignUpSeller';
import SellerLogin from './Components/Pages/Login/SellerLogin';
import UserLogin from './Components/Pages/Login/UserLogin';
import SignUpUser from './Components/Pages/SignUp/SignUpUser';
import ProtectedRoute from './ProtectedRoute';
import OrderPage from './Components/Pages/OrderPage/OrderPage';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Profile from './Components/Pages/Profile/Profile';
import OrderChkOut from './Components/Pages/OrderChkOut/OrderChkOut';
import BottomBar from './Components/BottomBar/BottomBar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState('');

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <Router>
      <NavigationBar cart={cart} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signupseller" element={<SignUpSeller />} />
        <Route path="/signupuser" element={<SignUpUser />} />
        <Route path="/userlogin" element={<UserLogin setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<OrderPage cart={cart} removeFromCart={(id) => setCart(cart.filter(item => item.id !== id))} />} />
        <Route path="/checkout" element={<OrderChkOut cart={cart} />} />
        <Route path="/profile" element={<Profile username={username} />} />
        <Route path="/sellerlogin" element={<SellerLogin />} />
        <Route
          path="/products"
          element={<ProtectedRoute component={Products} isAuthenticated={isAuthenticated} setCart={setCart} cart={cart} />}
        />
      </Routes>
      <BottomBar/>
    </Router>
  );
}

export default App;
