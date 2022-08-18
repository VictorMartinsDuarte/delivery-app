import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { apiGetSellers, apiGetUsers } from '../services/api';
import CheckoutDetails from '../components/CheckoutDetails';
import CardOrdersDetails from '../components/CardOrdersDetails';

function OrdersDetails() {
  const { id } = useParams();
  const [sellers, setSellers] = useState('');
  const [seller, setSeller] = useState('');
  const SellersOrders = useCallback(async (iD) => {
    const SellerDetails = await apiGetSellers(iD);
    const nameseller = await apiGetUsers();
    const [sellerName] = nameseller.filter((e) => e.id === SellerDetails.sellerId);
    setSellers(SellerDetails);
    setSeller(sellerName.name);
  }, []);

  // const SellersOrders = useCallback(async (iD) => {
  //   const SellerDetails = await apiGetSellers(iD);
  //   setSellers(SellerDetails);
  // }, []);

  useEffect(() => {
    SellersOrders(id);
  }, []);

  return (
    <div>
      {/* {console.log(sellers)} */}
      <Navbar />
      <p>Detalhe do Pedido</p>
      <CardOrdersDetails
        key={ sellers.id }
        id={ sellers.id }
        date={ sellers.saleDate }
        price={ sellers.totalPrice }
        status={ sellers.status }
        name={ seller }
      />
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled
      >
        Marcar como entregue
      </button>
      {sellers.products ? sellers.products.map((e, index) => (
        <CheckoutDetails
          key={ e.id }
          id={ e.id }
          index={ index }
          name={ e.name }
          price={ e.price }
          quantity={ e.salesProducts.quantity }
        />
      )) : null}
    </div>
  );
}

export default OrdersDetails;
