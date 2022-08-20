import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import TableUsers from '../components/TableUsers';
import { apiRegisterAdmin, apiGetUsers, apiDeleteAdmin } from '../services/api';

function AdminManage() {
  const MAX_LENGTH_NAME = 12;
  const MIN_LENGTH_PASSWORD = 6;
  const STATUS_CREATED = 201;
  const validateEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tokenAdmin, settoken] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [error, setError] = useState(false);
  const [usersAllTable, setusersAllTable] = useState([]);

  const userssellers = useCallback(async () => {
    const users = await apiGetUsers();
    const usersAll = users.filter((e) => e.role !== 'administrator');
    setusersAllTable(usersAll);
  }, [setusersAllTable]);

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
    if (userRegister.status === STATUS_CREATED) {
      setError(false);
      await userssellers();
    }
    if (userRegister.status !== STATUS_CREATED) {
      setError(true);
    }
  };

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    const { token } = user;
    userssellers();
    settoken(token);
  }, []);

  const handleRemove = async (id) => {
    await apiDeleteAdmin(id, tokenAdmin);
    const remove = usersAllTable.filter((e) => e.id !== id);
    setusersAllTable(remove);
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
      {usersAllTable ? usersAllTable.map((e, index) => (
        <div key={ e.id }>
          <TableUsers
            key={ e.id }
            id={ e.id }
            index={ index }
            name={ e.name }
            email={ e.email }
            role={ e.role }
          />
          <button
            data-testid={ `admin_manage__element-user-table-remove-${index}` }
            onClick={ () => handleRemove(e.id) }
            type="button"
          >
            Excluir
          </button>
        </div>
      )) : null}
    </div>
  );
}

export default AdminManage;
