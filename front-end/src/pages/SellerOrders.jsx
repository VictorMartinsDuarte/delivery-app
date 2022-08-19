import React, { useCallback, useEffect, useState } from 'react';
import CardSellerOrders from '../components/CardSellerOrders';
import Navbar from '../components/Navbar';
import { apiGetOrdersSeller } from '../services/api';

function SellerOrders() {
  const [order, setOrder] = useState([]);
  const sellerOrders = useCallback(async () => {
    const userId = window.localStorage.getItem('sellerId');
    const objUser = JSON.parse(userId);
    const customOrders = await apiGetOrdersSeller(objUser);
    setOrder(customOrders);
  }, []);

  useEffect(() => {
    sellerOrders();
  }, []);

  return (
    <div className="sellersOrders">
      <Navbar />
      {order.map(
        (
          { id, totalPrice, saleDate, status, deliveryAddress, deliveryNumber },
          index,
        ) => (
          <div key={ index }>
            <CardSellerOrders
              index={ index }
              key={ id }
              id={ id }
              date={ saleDate }
              price={ totalPrice }
              status={ status }
              address={ deliveryAddress }
              addressNumber={ deliveryNumber }
            />
          </div>
        ),
      )}
    </div>
  );
}

export default SellerOrders;
