import React, { useState, useEffect, useCallback } from 'react';
import CardOrders from '../components/CardOrders';
import Navbar from '../components/Navbar';
import { apiGetOrders } from '../services/api';

function Orders() {
  const [order, setOrder] = useState([]);
  const customerOrders = useCallback(async () => {
    const userId = window.localStorage.getItem('userId');
    const objUser = JSON.parse(userId);
    const customOrders = await apiGetOrders(objUser);
    setOrder(customOrders);
  }, []);

  useEffect(() => {
    customerOrders();
  }, []);
  console.log(order);

  return (
    <div>
      <Navbar />
      { order.map(({ id, totalPrice, saleDate, status }) => (
        <CardOrders
          key={ id }
          id={ id }
          date={ saleDate }
          price={ totalPrice }
          status={ status }
        />
      ))}
    </div>
  );
}

export default Orders;
