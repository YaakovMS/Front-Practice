import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './FirebaseConfig';

const login = async (email, senha) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return userCredential.user.uid;
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      throw new Error('Senha inválida');
    } else if (error.code === 'auth/user-not-found') {
      throw new Error('Usuário não encontrado');
    } else {
      throw error;
    }
  }
};

const logout = async () => {
  await signOut(auth);
};

const cadastro = async (email, senha) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    return userCredential.user.uid;
  } catch (error) {
    console.error('Erro durante o cadastro:', error);
    throw error;
  }
};

export { login, logout, cadastro };
