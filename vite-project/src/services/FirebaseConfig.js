// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


export default app;