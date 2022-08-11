import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { apiProducts } from '../services/api';

function CustomerProducts() {
  const [products, setProducts] = useState([]);

  async function customerProducts() {
    const customProducts = await apiProducts();
    setProducts(customProducts);
  }

  useEffect(() => {
    customerProducts();
  }, []);

  console.log(products);
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
    </div>
  );
}

export default CustomerProducts;
