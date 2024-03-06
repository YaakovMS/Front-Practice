// LoginForm.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import { UserContext } from '../context/UserContext';
import './LoginForm.css';

function LoginForm() {
  const { handleLogin } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const handleTextInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'senha') {
      setSenha(value);
    }
  };

  const handleLoginClick = async () => {
    setErrorLogin('');
    try {
      await handleLogin(email, senha);
      // Trate o login com sucesso, por exemplo, redirecione para outra página
    } catch (error) {
      setErrorLogin(error.message);
    }
  };

  return (
    <div className="login-form">
      {errorLogin && <p className="error">{errorLogin}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleTextInputChange}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={senha}
          onChange={handleTextInputChange}
        />
      </div>
      
      <p>
        Ainda não tem uma conta?{' '}
        <Link to="/cadastro">Cadastre-se aqui</Link>
      </p>
      <button onClick={handleLoginClick}>Entrar</button>
   
    </div>
  );
}

export default LoginForm;
