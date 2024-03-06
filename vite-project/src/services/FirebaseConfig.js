// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA5bWRkIuW3pQ1bdllgZx9rQrxscEK545k",
  authDomain: "front-a7305.firebaseapp.com",
  projectId: "front-a7305",
  storageBucket: "front-a7305.appspot.com",
  messagingSenderId: "4501647406",
  appId: "1:4501647406:web:d83ac18f046f8b35b6efbf",
  measurementId: "G-H789P24LE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export { auth  };
