import React, { useMemo } from 'react';
import { useCart } from '../contexts/useCart';

function Checkout(display) {
  const { cart, setCart } = useCart();
  const { displayButtom } = display;

  const handleRemove = (id) => {
    const remove = cart.filter((e) => e.id !== id);
    setCart(remove);
  };

  const cartTotal = useMemo(() => cart.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.quantity,
    0,
  ), [cart]);

  // useEffect(() => {
  //   handleRemove()
  // },[cart])

  return (
    <div>
      {cart.map((item, index) => (
        <div key={ index }>
          <span
            data-testid={
              `customer_checkout__element-order-table-item-number-${index}`
            }
          >
            {index + 1}

          </span>
          <span
            data-testid={ `customer_checkout__element-order-table-name-${index}` }
          >
            {item.name}

          </span>
          <span
            data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
          >
            {item.quantity}

          </span>
          <span
            data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          >
            {(item.price).replace('.', ',')}

          </span>
          <span
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            {Number(item.price * item.quantity)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}

          </span>
          <button
            onClick={ () => handleRemove(item.id) }
            style={ { display: { displayButtom } } }
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          >
            Remove

          </button>
        </div>
      ))}
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        {cartTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </span>
    </div>
  );
}

export default Checkout;
