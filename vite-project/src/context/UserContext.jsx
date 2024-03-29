// UserContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { login, logout } from '../services/AuthService';

// Adicione a função handleCadastro
export const UserContext = createContext({
  userId: null,
  logado: false,
  handleLogin: () => {},
  handleLogout: () => {},
  handleCadastro: () => {}, // Adicione esta linha
});

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({ userId: null, logado: true });

  async function handleLogin(email, senha) {
    try {
      const id = await login(email, senha);
      setCurrentUser({ userId: id, logado: true });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function handleLogout() {
    await logout();
    setCurrentUser({ userId: null, logado: false });
  }

  // Adicione a função handleCadastro
  async function handleCadastro(nome, email, senha) {
    // Implemente a lógica de cadastro aqui
    // Lembre-se de chamar setCurrentUser quando o cadastro for bem-sucedido
  }

  const contexto = {
    userId: currentUser.userId,
    logado: currentUser.logado,
    handleLogin,
    handleLogout,
    handleCadastro, // Adicione esta linha
  };

  return (
    <UserContext.Provider value={contexto}>
      {props.children}
    </UserContext.Provider>
  );
};
