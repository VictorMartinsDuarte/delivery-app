import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiGetUsers, apiPostSellers } from '../services/api';

function DeliveryDetails() {
  const [usersSellers, setUsersSellers] = useState([]);
  const navigate = useNavigate();
  const userssellers = useCallback(async () => {
    const users = await apiGetUsers();
    const sellers = users.filter(({ role }) => role === 'seller');
    setUsersSellers(sellers);
  }, [setUsersSellers]);

  useEffect(() => {
    userssellers();
  }, []);

  const handleclick = async () => {
    const idSeller = await apiPostSellers();
    navigate(`/customer/orders/${idSeller}`);
  };

  return (
    <div>
      <div>
        <select data-testid="customer_checkout__select-seller">
          {usersSellers.map((option) => (
            <option key={ option.id } value={ option.name }>{option.name}</option>
          ))}
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
        onClick={ () => handleclick() }
      >
        {' '}
        FINALIZAR PEDIDO

      </button>
    </div>
  );
}

export default DeliveryDetails;
