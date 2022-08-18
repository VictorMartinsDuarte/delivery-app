import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardSellerOrders from '../components/CardSellerOrders';
import Navbar from '../components/Navbar';
import { apiGetOrders } from '../services/api';

function SellerOrders() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const sellerOrders = useCallback(async () => {
    const userId = window.localStorage.getItem('userId');
    const objUser = JSON.parse(userId);
    const customOrders = await apiGetOrders(objUser);
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
          <button
            key={ index }
            type="button"
            onClick={ () => navigate(`/seller/orders/${id}`) }
          >
            <div key={ index }>
              <CardSellerOrders
                key={ id }
                id={ id }
                date={ saleDate }
                price={ totalPrice }
                status={ status }
                address={ deliveryAddress }
                addressNumber={ deliveryNumber }
              />
            </div>
          </button>
        ),
      )}
    </div>
  );
}

export default SellerOrders;
