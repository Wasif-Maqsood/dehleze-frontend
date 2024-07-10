
// ProtectedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/register" />;
};

export default ProtectedRoute;
