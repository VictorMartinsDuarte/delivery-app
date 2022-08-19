import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardSellerOrders(params) {
  const navigate = useNavigate();
  const { id, price, date, status, address, addressNumber, index } = params;
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
      <button
        key={ index }
        type="button"
        onClick={ () => navigate(`/seller/orders/${id}`) }
      >
        <h2
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          {status}

        </h2>
      </button>
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
