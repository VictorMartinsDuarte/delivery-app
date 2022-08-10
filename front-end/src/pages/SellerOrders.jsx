import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { apiRegister } from '../services/api';

function SellerOrders() {
  // const STATUS_CREATED = 201;
  // const MIN_LENGTH_PASSWORD = 6;
  // const MAX_LENGTH_NAME = 12;
  // const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  // const navigate = useNavigate();

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState(false);

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const userRegister = await apiRegister(name, email, password);
  //   if (userRegister === STATUS_CREATED) {
  //     setError(false);
  //     navigate('/customer/products');
  //   }
  //   setError(true);
  // }

  const mockOrders = [{
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: 100,
    deliveryAddress: '52 Rua irmãos trybe',
    deliveryNumber: '0001',
    saleDate: '2022-01-01',
    status: 'PENDENTE',
  },
  {
    id: 2,
    userId: 4,
    sellerId: 2,
    totalPrice: 150,
    deliveryAddress: '52 Rua irmãos trybe',
    deliveryNumber: '0002',
    saleDate: '2022-01-01',
    status: 'ENTREGUE',
  }];

  return (
    <div className="sellersOrders">
      {mockOrders.map((e, index) => (
        <div key={ index }>
          <span
            data-testid={ `seller_orders__element-order-id-${e.id}` }
          >
            {e.deliveryNumber}
          </span>
          <span
            data-testid={ `seller_orders__element-delivery-status-${e.id}` }
          >
            {e.status}
          </span>
          <span
            data-testid={ `seller_orders__element-order-date-${e.id}` }
          >
            {e.saleDate}
          </span>
          <span
            data-testid={ `seller_orders__element-card-price-${e.id}` }
          >
            {e.totalPrice}
          </span>
          <span
            data-testid={ `seller_orders__element-card-address-${e.id}` }
          >
            {e.deliveryAddress}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SellerOrders;
