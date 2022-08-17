import { useMemo, createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

function useCart() {
  const { cart,
    setCart,
    products,
    setProducts,
    adressNumber,
    setAdressNumber,
    adress,
    setAdress,
    date,
    setDate,
    status,
    setStatus,
    nameSeller,
    setnameSeller } = useContext(CartContext);
  return ({ cart,
    setCart,
    products,
    setProducts,
    adressNumber,
    setAdressNumber,
    adress,
    setAdress,
    date,
    setDate,
    status,
    setStatus,
    nameSeller,
    setnameSeller });
}

function CartProvider(prop) {
  const { children } = prop;
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [adressNumber, setAdressNumber] = useState('');
  const [adress, setAdress] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [nameSeller, setnameSeller] = useState('');
  const value = useMemo(
    () => ({
      cart,
      setCart,
      products,
      setProducts,
      adressNumber,
      setAdressNumber,
      adress,
      setAdress,
      date,
      setDate,
      status,
      setStatus,
      nameSeller,
      setnameSeller,
    }),
    [cart, products, adressNumber, adress, date, status, nameSeller],
  );
  // useEffect(()=>{
  //   setCart(prev => []);
  // }, [products]);
  return (
    <CartContext.Provider
      value={ value }
    >
      {children}

    </CartContext.Provider>
  );
}

export {
  useCart,
  CartProvider,
};
