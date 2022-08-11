import React, { useState } from 'react';

function Card(products) {
  const [counter, setCounter] = useState(0);
  const [cartTotal, setCartTot] = useState([]);
  const { id, name, price, img } = products;
  const prices = price.replace('.', ',');
  const prodPrices = [];

  const addItem = (event) => {
    setCounter(counter + 1);
    prodPrices.push(+event);
    setCartTot(prodPrices);
    localStorage.setItem('cartTotalPrice', JSON.stringify(prodPrices));
  };

  const deleteItem = (event) => {
    const subt = -1;
    setCounter(counter - 1);
    prodPrices.push(event * subt);
    setCartTot(prodPrices);
    localStorage.setItem('cartTotalPrice', JSON.stringify(cartTotal));
  };
  console.log(prodPrices);
  return (
    <div>
      <h3 data-testid={ `customer_products__element-card-price-${id}` }>{ prices }</h3>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ img }
        alt={ name }
      />
      <div>
        <h3 data-testid={ `customer_products__element-card-title-${id}` }>{ name }</h3>
        <div>
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            disabled={ counter === 0 }
            onClick={ () => deleteItem(price) }
          >
            -
          </button>
          <input
            value={ counter }
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="text"
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            onClick={ () => addItem(price) }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
