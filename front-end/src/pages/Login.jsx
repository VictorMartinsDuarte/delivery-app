import React from 'react';

function Login() {
  const valor6 = 6;

  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  const history = useHistory();

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
  return (
    <form id="container" onSubmit={ loginClick }>
      <div className="inputs">

        <input
          type="email"
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
        />

        <input
          type="password"
          value={ senha }
          onChange={ (event) => setSenha(event.target.value) }
          minLength="6"
        />

      </div>
      <div className="btn">

        <button
          type="submit"
          disabled={ senha.length < valor6 || !email.match(regex) }
        >
          LOGIN

        </button>

        <button type="button" onClick={ cadastroClick }>Ainda não tenho conta</button>

      </div>
    </form>
  );
}

export default Login;
