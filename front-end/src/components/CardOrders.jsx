import React from 'react';

function CardOrders(params) {
  const { id, price, date, status } = params;

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
        {date}

      </h4>
      <h4
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        {price}

      </h4>
    </div>
  );
}

export default CardOrders;
