import React from 'react';

function CheckoutDetails(products) {
  const { name, price, index, quantity } = products;
  return (
    <div>
      <div>
        <span
          data-testid={
            `seller_order_details__element-order-table-item-number-${index}`
          }
        >
          {index + 1}

        </span>
        <span
          data-testid={ `seller_order_details__element-order-table-name-${index}` }
        >
          {name}

        </span>
        <span
          data-testid={
            `seller_order_details__element-order-table-quantity-${index}`
          }
        >
          {quantity}

        </span>
        <span
          data-testid={
            `seller_order_details__element-order-table-unit-price-${index}`
          }
        >
          {(price).replace('.', ',')}

        </span>
        <span
          data-testid={
            `seller_order_details__element-order-table-sub-total-${index}`
          }
        >
          {Number(price * quantity)
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}

        </span>
      </div>
    </div>
  );
}

export default CheckoutDetails;
