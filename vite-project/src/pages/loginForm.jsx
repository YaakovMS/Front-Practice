// LoginForm.jsx
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import './LoginForm.css';

function LoginForm() {
  const { handleLogin } = useContext(UserContext);
  const [errorLogin, setErrorLogin] = useState('');
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const validaEmail = {
    required: {
      value: true,
      message: 'Email é obrigatório',
    },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'Email inválido',
    },
  };

  const validaSenha = {
    required: {
      value: true,
      message: 'Senha é obrigatória',
    },
    minLength: {
      value: 8,
      message: 'Senha deve ter no mínimo 8 caracteres',
    },
  };

  async function onSubmit(data) {
    const { email, senha } = data;
    setErrorLogin('');
    try {
      await handleLogin(email, senha);
      navigate('/');
    } catch (error) {
      setErrorLogin(error.message);
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      {errorLogin && <p className="error">{errorLogin}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email', validaEmail)} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" {...register('senha', validaSenha)} />
        {errors.senha && <p className="error">{errors.senha.message}</p>}
      </div>
      <button>Entrar</button>
    </form>
  );
}

export default LoginForm;
