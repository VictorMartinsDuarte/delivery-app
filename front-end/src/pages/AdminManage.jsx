import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function AdminManage() {
  const MAX_LENGTH_NAME = 12;
  const MIN_LENGTH_PASSWORD = 6;
  const validateEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');

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
          <option>Cliente</option>
          <option>Vendedor</option>
          <option>Administrador</option>
        </select>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={
            password.length < MIN_LENGTH_PASSWORD
            || !email.match(validateEmail)
            || name.length < MAX_LENGTH_NAME
          }
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default AdminManage;
