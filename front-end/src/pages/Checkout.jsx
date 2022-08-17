import React from 'react';
import DeliveryDetails from '../components/DeliveryDetails';
import Checkout from '../components/Checkout';
import Navbar from '../components/Navbar';

function CheckoutPage() {
  return (
    <div>
      <Navbar />
      <Checkout />
      <DeliveryDetails />
    </div>
  );
}

export default CheckoutPage;
