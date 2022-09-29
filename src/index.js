import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9P6C8Yn0ko767xJUDVlYdZRalVeJLtdY",
  authDomain: "coderhouse-ecommerce-d1c5c.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d1c5c",
  storageBucket: "coderhouse-ecommerce-d1c5c.appspot.com",
  messagingSenderId: "995911667230",
  appId: "1:995911667230:web:2fe898f6fc2f5a5214680f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
