import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/useCart';
import { apiGetUsers,
  apiPostSellers, findGetusersCostumer,
  findGetusersSeller } from '../services/api';

let deliverynumber = 0;
function DeliveryDetails() {
  const NumberSlice = -4;
  const {
    cart,
    adressNumber,
    setAdressNumber,
    adress,
    setAdress,
    nameSeller,
    setnameSeller } = useCart();
  const [usersSellers, setUsersSellers] = useState([]);
  const [usersCostumer, setUsersCostumer] = useState('');
  const [usersSellerId, setusersSellerId] = useState(2);
  const navigate = useNavigate();
  const userssellers = useCallback(async () => {
    const users = await apiGetUsers();
    const sellers = users.filter(({ role }) => role === 'seller');
    setUsersSellers(sellers);
  }, [setUsersSellers]);

  const getUserId = async () => {
    const userId = window.localStorage.getItem('user');
    const objUser = JSON.parse(userId);
    const [user] = await findGetusersCostumer(objUser.email);
    setUsersCostumer(user.id);
  };

  const getSellerId = async () => {
    const [seller] = await findGetusersSeller(nameSeller);
    setusersSellerId(seller.id);
  };

  useEffect(() => {
    userssellers();
    getUserId();
  }, []);

  useEffect(() => {
    getSellerId();
  }, [nameSeller]);

  const cartTotal = useMemo(() => cart.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.quantity,
    0,
  ), [cart]);

  const handleclick = async () => {
    const user = window.localStorage.getItem('user');
    const objUser = JSON.parse(user);
    deliverynumber += 1;
    const objBody = {
      userId: usersCostumer,
      sellerId: usersSellerId,
      totalPrice: cartTotal,
      deliveryAddress: `${adress} ${adressNumber}`,
      deliveryNumber: (`0000${deliverynumber}`).slice(NumberSlice),
    };
    const idSeller = await apiPostSellers(objBody, objUser.token);
    navigate(`/customer/orders/${idSeller}`);
    // await apiPostSalesProducts(idSeller, cart);
  };

  return (
    <div>
      <div>
        <select
          data-testid="customer_checkout__select-seller"
          value={ nameSeller }
          name="nameSeller"
          onChange={ (event) => setnameSeller(event.target.value) }
        >
          {usersSellers.map((option) => (
            <option
              key={ option.id }
              value={ option.name }
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <input
        data-testid="customer_checkout__input-address"
        value={ adress }
        type="text"
        name="adress"
        onChange={ (event) => setAdress(event.target.value) }
      />

      <input
        type="text"
        data-testid="customer_checkout__input-addressNumber"
        value={ adressNumber }
        onChange={ (event) => setAdressNumber(event.target.value) }
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
