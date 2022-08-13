import { useMemo, createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

function useCart() {
  const { cart, setCart, products, setProducts } = useContext(CartContext);
  return ({ cart, setCart, products, setProducts });
}

function CartProvider(prop) {
  const { children } = prop;
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const value = useMemo(
    () => ({ cart, setCart, products, setProducts }),
    [cart, products],
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
