import React from 'react';
import './App.css';
import { Route, Navigate, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import SellerOrders from './pages/SellerOrders';
import { CartProvider } from './contexts/useCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <CustomerProducts /> } />
        <Route exact path="/seller/orders" element={ <SellerOrders /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
      </Routes>
    </CartProvider>
  );
}

export default App;
