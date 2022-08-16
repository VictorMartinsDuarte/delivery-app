import React, { useMemo } from 'react';
import { useCart } from '../contexts/useCart';
import Navbar from '../components/Navbar';

function CheckoutDetails() {
  const { cart } = useCart();

  const cartTotal = useMemo(() => cart.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.quantity,
    0,
  ), [cart]);

  return (
    <div>
      <Navbar />
      <p>Detalhe do Pedido</p>
      <div>
        {cart.map((item, index) => (
          <div key={ index }>
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
              {item.name}

            </span>
            <span
              data-testid={
                `seller_order_details__element-order-table-quantity-${index}`
              }
            >
              {item.quantity}

            </span>
            <span
              data-testid={
                `seller_order_details__element-order-table-unit-price-${index}`
              }
            >
              {(item.price).replace('.', ',')}

            </span>
            <span
              data-testid={
                `seller_order_details__element-order-table-sub-total-${index}`
              }
            >
              {Number(item.price * item.quantity)
                .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}

            </span>
          </div>
        ))}
        <span
          data-testid="seller_order_details__element-order-total-price"
        >
          {cartTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </span>
      </div>
    </div>
  );
}

export default CheckoutDetails;
