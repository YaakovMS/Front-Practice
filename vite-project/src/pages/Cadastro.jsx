import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { cadastro } from '../services/AuthService';
import './Cadastro.css';

function Cadastro() {
  const { logado } = useContext(UserContext);
  const [errorCadastro, setErrorCadastro] = useState('');
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const validaNome = {
    required: {
      value: true,
      message: 'Nome é obrigatório',
    },
    maxLength: {
      value: 50,
      message: 'Nome deve ter no máximo 50 caracteres',
    },
  };

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
    const { nome, email, senha } = data;
    setErrorCadastro('');
    try {
      await cadastro(email, senha);
      navigate('/'); // Redirecione para a página principal após o cadastro
    } catch (error) {
      setErrorCadastro(error.message);
    }
  }

  return (
    <form className="cadastro-form" onSubmit={handleSubmit(onSubmit)}>
      {logado ? (
        // Redirecione se o usuário já estiver logado
        navigate('/')
      ) : (
        <>
          {errorCadastro && <p className="error">{errorCadastro}</p>}
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" {...register('nome', validaNome)} />
            {errors.nome && <p className="error">{errors.nome.message}</p>}
          </div>
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
          <div className="button-container">
            <button type="submit">Cadastrar</button>
          </div>
          <p>Já tem uma conta? <Link to="/login">Faça login aqui</Link></p>
        </>
      )}
    </form>
  );
}

export default Cadastro;
