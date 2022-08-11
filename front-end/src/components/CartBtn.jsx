import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartBtn() {
  const navigate = useNavigate();

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
        Ver Carrinho
      </button>
    </div>
  );
}

export default CartBtn;
