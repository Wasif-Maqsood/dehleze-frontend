// Navbar.js

import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faSignOutAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Optional: If you have custom styles

const NavigationBar = ({ cart, isAuthenticated, handleLogout }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav}>
          <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} size="lg" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? "show" : ""}>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-link" exact>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              About
            </Nav.Link>
          </Nav>
          <div className="nav-icons">
            <Nav.Link as={Link} to="/order" className="nav-link cart-link">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" className="cart-icon" />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Nav.Link>
            {isAuthenticated ? (
              <NavDropdown
                title={<FontAwesomeIcon icon={faUser} size="lg" />}
                id="basic-nav-dropdown"
                alignRight
                className="user-dropdown"
              >
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button as={Link} to="/login" variant="outline-primary" className="login-btn">
                Login
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
