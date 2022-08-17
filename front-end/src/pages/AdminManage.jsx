import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { apiRegisterAdmin } from '../services/api';

function AdminManage() {
  const MAX_LENGTH_NAME = 12;
  const MIN_LENGTH_PASSWORD = 6;
  const STATUS_CREATED = 201;
  const validateEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = JSON.parse(window.localStorage.getItem('user'));
    const { token } = user;

    const postObject = {
      name,
      email,
      password,
      role,
    };

    const userRegister = await apiRegisterAdmin(postObject, token);
    if (userRegister === STATUS_CREATED) {
      setError(false);
    }
    setError(true);
  };

  return (
    <div>
      <Navbar />
      <div>
        <input
          data-testid="admin_manage__input-name"
          onChange={ (e) => setName(e.target.value) }
        />
        <input
          data-testid="admin_manage__input-email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          data-testid="admin_manage__input-password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <select
          data-testid="admin_manage__select-role"
          value={ role }
          onChange={ (e) => setRole(e.target.value) }
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
        </select>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          onClick={ handleSubmit }
          disabled={
            password.length < MIN_LENGTH_PASSWORD
            || !email.match(validateEmail)
            || name.length < MAX_LENGTH_NAME
          }
        >
          Cadastrar
        </button>
        {error && (
          <span data-testid="admin_manage__element-invalid-register">
            Não foi possível registrar.
          </span>
        )}
      </div>
    </div>
  );
}

export default AdminManage;
