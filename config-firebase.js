// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBagwbBZbMnG_ZEfBMZmfWwrAs77S77o0o",
  authDomain: "formulario-b5731.firebaseapp.com",
  projectId: "formulario-b5731",
  storageBucket: "formulario-b5731.appspot.com",
  messagingSenderId: "1013263341547",
  appId: "1:1013263341547:web:b487cbdd2c73ce4ba2abae",
  measurementId: "G-3B7Z8Y8PNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);