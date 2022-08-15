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

  const handleNav = () => {
    navigate('/customer/checkout');
  };

  return (
    <div>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ handleNav }
        disabled={ cartTotal <= 0 }
      >
        Ver Carrinho
      </button>
      <p
        data-testid="customer_products__checkout-bottom-value"
      >
        { cartTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
      </p>
    </div>
  );
}

export default CartBtn;
