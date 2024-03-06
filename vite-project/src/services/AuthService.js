// AuthService.js

import app from '/src/services/FirebaseConfig.js';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth(app);

export async function login(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => userCredential.user.uid)
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        throw new Error('Senha inválida');
      } else if (error.code === 'auth/user-not-found') {
        throw new Error('Usuário não encontrado');
      } else {
        throw error;
      }
    });
}

export async function logout() {
  await signOut(auth);
}
