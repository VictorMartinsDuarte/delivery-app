import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { apiGetSellers, apiGetUsers, apiupdateSeler } from '../services/api';
import CheckoutDetails from '../components/CheckoutDetails';
import CardOrdersDetails from '../components/CardOrdersDetails';

function OrdersDetails() {
  const { id } = useParams();
  const [sellers, setSellers] = useState('');
  const [seller, setSeller] = useState('');
  const [status, setStatus] = useState('');
  const SellersOrders = useCallback(async (iD) => {
    const SellerDetails = await apiGetSellers(iD);
    const nameseller = await apiGetUsers();
    const [sellerName] = nameseller.filter((e) => e.id === SellerDetails.sellerId);
    setSellers(SellerDetails);
    setSeller(sellerName.name);
    setStatus(SellerDetails.status);
  }, []);

  // const SellersOrders = useCallback(async (iD) => {
  //   const SellerDetails = await apiGetSellers(iD);
  //   setSellers(SellerDetails);
  // }, []);

  async function dispatchClick() {
    await apiupdateSeler(id, 'Entregue');
    setStatus('Entregue');
  }

  useEffect(() => {
    SellersOrders(id);
  }, []);

  return (
    <div>
      <Navbar />
      <p>Detalhe do Pedido</p>
      <CardOrdersDetails
        key={ sellers.id }
        id={ sellers.id }
        date={ sellers.saleDate }
        price={ sellers.totalPrice }
        status={ status }
        name={ seller }
      />
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        onClick={ dispatchClick }
        disabled={ status !== 'Em Trânsito' }
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
