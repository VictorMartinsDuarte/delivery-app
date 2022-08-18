import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { apiGetSellers, apiGetUsers } from '../services/api';
import CheckoutDetails from '../components/CheckoutDetails';
import SellerCardOrdersDetails from '../components/SellerCardOrdersDetails';

function SellerOrdersDetails() {
  const { id } = useParams();
  const [sellers, setSellers] = useState('');
  const [seller, setSeller] = useState('');
  const [disebleBottom] = useState(true);
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
      <SellerCardOrdersDetails
        key={ sellers.id }
        id={ sellers.id }
        date={ sellers.saleDate }
        price={ sellers.totalPrice }
        status={ sellers.status }
        name={ seller }
      />
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparar Pedido
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ disebleBottom }
      >
        Saiu para Entrega
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

export default SellerOrdersDetails;
