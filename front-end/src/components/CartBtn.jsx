import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/useCart';

function CartBtn() {
  const navigate = useNavigate();

  const { cart } = useCart();

  const cartTotal = useMemo(() => cart.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.quantity,
    0,
  ), [cart]);

  function handleNav() {
    navigate('/customer/checkout');
  }

  return (
    <div>
      <button
        data-testid="customer_products__checkout-bottom-value"
        type="button"
        onClick={ handleNav }
      >
        { cartTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
      </button>
    </div>
  );
}

export default CartBtn;
