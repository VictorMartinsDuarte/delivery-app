import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorage, clearStorage } from '../services/storage';

function Navbar() {
  const navigate = useNavigate();
  const userName = getStorage().name;

  function handleLogout() {
    clearStorage();
    navigate('/login');
  }

  return (
    <section>
      <button
        onClick={ () => navigate('/customer/products') }
        data-testid="customer_products__element-navbar-link-products"
        type="button"
      >
        Produtos
      </button>
      <button
        onClick={ () => navigate('/customer/orders') }
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
      >
        Meus Pedidos
      </button>
      <button
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
      >
        { userName }
      </button>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ handleLogout }
      >
        Logout
      </button>
    </section>
  );
}

export default Navbar;

/*
  1 - Quando tiver as rotas para os botões, mudar a tag button para Link do react-router-dom
  2 - No botão "Nome da Pessoa" inserir o nome da pessoa logada, pelo database
*/
