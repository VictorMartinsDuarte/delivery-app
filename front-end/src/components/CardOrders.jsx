import React from 'react';

function CardOrders(params) {
  const { id, price, date, status } = params;
  const MAX_INDEX_DATE = 10;
  const formattedDate = date.slice(0, MAX_INDEX_DATE).split('-').reverse().join('/');

  return (
    <div>
      <h3
        data-testid={ `customer_orders__element-order-id-${id}` }
      >
        {id}
      </h3>
      <h2
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        {status}

      </h2>
      <h4
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        {formattedDate}

      </h4>
      <h4
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        {price.replace('.', ',')}

      </h4>
    </div>
  );
}

export default CardOrders;
