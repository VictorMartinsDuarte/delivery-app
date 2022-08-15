import React from 'react';

function DeliveryDetails() {
  return (
    <div>
      <div>
        <select data-testid="customer_checkout__select-seller">
          <option> Test </option>
          {/* {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))} */}
        </select>
      </div>

      <input
        type="text"
        data-testid="customer_checkout__input-address"
      />

      <input
        type="text"
        data-testid="customer_checkout__input-addressNumber"
      />

      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        {' '}
        FINALIZAR PEDIDO

      </button>
    </div>
  );
}

export default DeliveryDetails;
