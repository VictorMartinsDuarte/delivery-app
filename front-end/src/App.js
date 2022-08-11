import React from 'react';
import './App.css';
import { Route, Navigate, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate replace to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" />
      <Route exact path="/seller/orders" element={ <SellerOrders /> } />
    </Routes>
  );
}

export default App;
