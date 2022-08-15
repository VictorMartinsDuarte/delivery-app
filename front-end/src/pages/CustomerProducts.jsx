import React, { useCallback, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { apiProducts } from '../services/api';
import CartBtn from '../components/CartBtn';
import { useCart } from '../contexts/useCart';

function CustomerProducts() {
  const { products, setProducts } = useCart();

  const customerProducts = useCallback(async () => {
    const customProducts = await apiProducts();
    console.log(customProducts);
    setProducts(customProducts);
  }, [setProducts]);

  useEffect(() => {
    customerProducts();
  }, [customerProducts]);

  return (
    <div>
      <Navbar />
      {products.map(({ id, name, price, urlImage }) => (
        <Card
          key={ id }
          id={ id }
          name={ name }
          img={ urlImage }
          price={ price }
        />
      ))}
      <CartBtn />
    </div>
  );
}

export default CustomerProducts;
