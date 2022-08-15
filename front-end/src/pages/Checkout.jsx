import React from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../contexts/useCart';

function Checkout() {
  const { cart } = useCart();
  return (
    <div>
      <Navbar />
      {cart.map((item, index) => (
        <div key={ index }>
          <span>{index + 1}</span>
          <span>{item.name}</span>
          <span>{item.quantity}</span>
          <span>{item.price}</span>
          <span>{item.price * item.quantity}</span>
          <button type="button">Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Checkout;
