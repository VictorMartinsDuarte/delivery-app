import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRegister from '../services/api';

function Register() {
  const MIN_LENGTH_PASSWORD = 6;
  const MAX_LENGTH_NAME = 12;
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const history = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function registerClick(event) {
    prop.enviaEmail(email);
    event.preventDefault();
    history.push('/home');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const userRegister = await apiRegister(email, password);
    if (userRegister) {
      setError(false);
      history('/customer/products');
    }
    setError(true);
  }

  return (
    <form id="container" onSubmit={ registerClick }>
      <div className="inputs">
        <input
          data-testid="common_register__input-name"
          type="name"
          value={ name }
          onChange={ (event) => setName(event.target.value) }
        />

        <input
          data-testid="common_register__input-email"
          type="email"
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
        />

        <input
          data-testid="common_register__input-password"
          type="password"
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
          minLength="6"
        />
      </div>
      <div className="btn">
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ password.length < MIN_LENGTH_PASSWORD
             || !email.match(regex)
              || name.length < MAX_LENGTH_NAME }
          onClick={ handleSubmit }
        >
          CADASTRAR
        </button>
      </div>
      {error && (
        <div className="error-message">
          <p data-testid="common_register__element-invalid_register">
            Não foi possível fazer Register.
          </p>
        </div>
      )}
    </form>
  );
}

export default Register;
