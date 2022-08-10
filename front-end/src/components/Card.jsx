import React, { useState } from 'react';

function Card() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3 data-testid="customer_products__element-card-price-<id>">price</h3>
      <img
        data-testid="customer_products__img-card-bg-image-<id>"
        src=""
        alt=""
      />
      <div>
        <h3 data-testid="customer_products__element-card-title-<id>">name</h3>
        <div>
          <button
            data-testid="customer_products__button-card-rm-item-<id>"
            type="button"
            disabled={ counter < 2 }
            onClick={ () => setCounter(counter - 1) }
          >
            -
          </button>
          <input
            value={ counter }
            data-testid="customer_products__input-card-quantity-<id>"
            type="text"
          />
          <button
            data-testid="customer_products__button-card-add-item-<id>"
            type="button"
            onClick={ () => setCounter(counter + 1) }
          >
            +

          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
