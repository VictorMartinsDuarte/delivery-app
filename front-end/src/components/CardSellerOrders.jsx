import React from 'react';

function CardSellerOrders(params) {
  const { id, price, date, status, address, addressNumber } = params;
  const MAX_INDEX_DATE = 10;
  const formattedDate = date !== undefined ? date.slice(0, MAX_INDEX_DATE)
    .split('-').reverse().join('/') : null;

  return (
    <div>
      <h3
        data-testid={ `seller_orders__element-order-id-${id}` }
      >
        {id}
      </h3>
      <h2
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      >
        {status}

      </h2>
      <h4
        data-testid={ `seller_orders__element-order-date-${id}` }
      >
        {formattedDate}

      </h4>
      <h4
        data-testid={ `seller_orders__element-card-price-${id}` }
      >
        {price !== undefined ? price.replace('.', ',') : null}

      </h4>
      <h4
        data-testid={ `seller_orders__element-card-address-${id}` }
      >
        {address}
        ,
        {' '}
        {addressNumber}

      </h4>
    </div>
  );
}

export default CardSellerOrders;
