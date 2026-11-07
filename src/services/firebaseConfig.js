// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvZsPWsi9My5jXijvT8grkTpyJxpDNj6E",
  authDomain: "gestao-trufas.firebaseapp.com",
  projectId: "gestao-trufas",
  storageBucket: "gestao-trufas.firebasestorage.app",
  messagingSenderId: "754718396315",
  appId: "1:754718396315:web:7f16fdad497b0584c35b3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Constante de autenticação
export const auth = getAuth(app);
