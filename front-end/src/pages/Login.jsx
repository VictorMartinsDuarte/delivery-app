import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const valor6 = 6;

  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function loginClick(event) {
    prop.enviaEmail(email);
    event.preventDefault();
    history.push('/home');
  }
  function cadastroClick() {
    history.push('/cadastro');
  }
  console.log(email);
  console.log(senha);
  return (
    <form id="container" onSubmit={ loginClick }>
      <div className="inputs">

        <input
          data-testid="common_login__input-email"
          type="email"
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
        />

        <input
          data-testid="common_login__input-password"
          type="password"
          value={ senha }
          onChange={ (event) => setSenha(event.target.value) }
          minLength="6"
        />

      </div>
      <div className="btn">

        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ senha.length < valor6 || !email.match(regex) }
        >
          LOGIN

        </button>

        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ cadastroClick }
        >
          Ainda não tenho conta

        </button>

      </div>
    </form>
  );
}

export default Login;
